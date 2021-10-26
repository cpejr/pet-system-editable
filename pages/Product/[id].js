import { useState } from 'react';
import { FaArrowLeft, FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';
import { notification } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import api from '../../src/utils/api';
import { FooterMobile } from '../../src/components/index';
import {
  Container, ProductContainer, ProductTitle, Price, Delivery,
  ButtonsContainer, Button, AddCarButton, Store, Description,
  BackPage, BackButton, CarrinhoCardInfoQuantity,
  CarrinhoCardText,
} from './styles';

export default function Product({ product, store }) {
  const [quantity, setQuantity] = useState(0);

  async function handleAddCart() {
    const body = {
      product_id: product.product_id,
      amount: product.quantity,
      final_price: product.quantity * product.price,
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
    }
  }

  function handlePlus() {
    console.log(product.quantity);
    product.quantity += 1;
    console.log(product.quantity);
    setQuantity(product.quantity);
  }

  function handleMinus() {
    if (product.quantity > 0) {
      product.quantity -= 1;
      setQuantity(product.quantity);
    } else {
      product.quantity = 0;
      setQuantity(product.quantity);
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
            <ButtonsContainer>
              <ButtonsContainer.Col>
                <Button>
                  Comprar
                </Button>
              </ButtonsContainer.Col>
              <ButtonsContainer.Col>
                <AddCarButton onClick={handleAddCart}>
                  Adicionar ao carrinho
                </AddCarButton>
              </ButtonsContainer.Col>
            </ButtonsContainer>
          </ProductContainer.Col2>
        </ProductContainer>
      </Container>
      )}
      <FooterMobile />
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
