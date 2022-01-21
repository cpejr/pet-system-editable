import { useEffect, useState } from 'react';
import { FaArrowLeft, FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';
import { notification } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import api from '../../src/utils/api';
import {
  Container, ProductContainer, ProductTitle, Price, Delivery,
  ButtonsContainer, Button, AddCarButton, Store, Description,
  BackPage, BackButton, CarrinhoCardInfoQuantity,
  CarrinhoCardText, StoreStatusClosed, StatusContainer, StoreOpenedTime,
} from './styles';
import StoreIsOpen from '../../src/components/StoreIsOpen';
import { useCart } from '../../src/components/CardContext/CardContext';

export default function Product({ product, store }) {
  const cart = useCart();
  function add(product){
    cart.addToCart(product);
  }
  const openingTime = store.opening_time.split(',');
  const closingTime = store.closing_time.split(',');
  const situation = store.working_days.split(',');
  const [today, setToday] = useState();
  const data = new Date();
  const day = moment(data).format('dddd');
  useEffect(() => {
    if (day) {
      switch (day) {
        case 'Monday':
          setToday(0);
          break;

        case 'Tuesday':
          setToday(1);
          break;

        case 'Wednesday':
          setToday(2);
          break;

        case 'Thursday':
          setToday(3);
          break;

        case 'Friday':
          setToday(4);
          break;

        case 'Saturday':
          setToday(5);
          break;

        default:
          setToday(6);
          break;
      }
    }
  }, [day]);
  const [quantity, setQuantity] = useState(0);

  async function handleAddCart() {
    const body = {
      product_id: product.product_id,
      amount: quantity,
      final_price: quantity * product.price,
    };
    try {
      await api.post('/CartProducts', body);
      notification.open({
        message: 'Sucesso!',
        description:
          'O produto foi adicionado ao seu carrinho.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.error(error);
      notification.open({
        message: 'Falha :(',
        description:
          'Erro ao adicionar produto ao carrinho',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }

  function handlePlus() {
    setQuantity(quantity + 1);
  }
  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  }

  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  return (
    <div>
      <BackPage>
        <BackButton>
          <FaArrowLeft size={24} />
          Voltar
        </BackButton>
      </BackPage>
      { product && (
      <Container>
        <ProductContainer>
          <ProductContainer.Col1>
            <Image loader={myLoader} src={product.img} alt="" width="751" height="689" />
            <Description>
              <Description.Title>
                Descrição do produto:
              </Description.Title>
              <Description.Text>
                {product.description}
              </Description.Text>
            </Description>
          </ProductContainer.Col1>

          <ProductContainer.Col2>
            <ProductTitle>
              {product.product_name}
            </ProductTitle>
            <Store>
              <Store.Title>
                Vendido e entregue por:
              </Store.Title>
              <Link href={`/Store/${store.firebase_id_store}`}>
                <Store.Text>
                  {store.company_name}
                </Store.Text>
              </Link>
            </Store>
            <Price>
              R$
              {' '}
              {product.price}
            </Price>
            <Delivery>
              Frete:
              {' '}
              R$
              {' '}
              {store.shipping_tax}
            </Delivery>
            <CarrinhoCardInfoQuantity>
              <FaRegMinusSquare size="2x" onClick={() => handleMinus()} />
              <CarrinhoCardText>{quantity}</CarrinhoCardText>
              <FaRegPlusSquare size="2x" onClick={() => handlePlus()} />
            </CarrinhoCardInfoQuantity>
            {(StoreIsOpen(openingTime[today], closingTime[today])) ? (
              <ButtonsContainer>
                <ButtonsContainer.Col>
                  <Button>
                    Comprar
                  </Button>
                </ButtonsContainer.Col>
                <ButtonsContainer.Col>
                  <AddCarButton onClick={() => {
                    handleAddCart();
                    add(product);
                  }}
                  >
                    Adicionar ao carrinho
                  </AddCarButton>
                </ButtonsContainer.Col>
              </ButtonsContainer>
            ) : (
              <StatusContainer>
                <StoreStatusClosed>
                  ESTABELECIMENTO FECHADO
                </StoreStatusClosed>
                <StoreOpenedTime>
                  {`Funcionamento: ${openingTime[today]}h - ${closingTime[today]}h`}
                </StoreOpenedTime>
              </StatusContainer>
            ) }
          </ProductContainer.Col2>
        </ProductContainer>
      </Container>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const { data: products } = await api.get('products');

  return {
    paths: products.map((product) => ({
      params: { id: product.product_id },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { data: product } = await api.get(`product/${params.id}`);
  const { data: store } = await api.get(`store/${product.firebase_id_store}`);
  return {
    props: { store, product },
    revalidate: 60, // 1 minuto
  };
}
