import { useEffect, useState } from 'react';
import { FaArrowLeft, FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';
import { notification } from 'antd';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/router';
import api from '../../src/utils/api';
import URL_BASE from '../../src/utils/urlBase';
import {
  Container, ProductContainer, ProductTitle, Price, Delivery,
  ButtonsContainer, Button, AddCarButton, Store, Description,
  BackPage, BackButton, CarrinhoCardInfoQuantity,
  CarrinhoCardText, StoreStatusClosed, StatusContainer, StoreOpenedTime,
} from '../../src/styles/productStyles';
import StoreIsOpen from '../../src/components/StoreIsOpen';
import { useCart } from '../../src/components/CartContext/CartContext';
import { useAuth } from '../../src/contexts/AuthContext';

toast.configure();

export default function Product({ product, store }) {
  const cart = useCart();
  function add(newProduct) {
    if (user && user.type !== 'admin') {
      if (cartStore === store.firebase_id_store || cartStore === ' ') {
        if (quantity > 0) {
          cart.addToCart(newProduct);
        }
      }
    }
  }
  const openingTime = store.opening_time.split(',');
  const closingTime = store.closing_time.split(',');
  // eslint-disable-next-line no-nested-ternary
  const regionShippingTax = store ? store?.shipping_tax.split(',') : product ? product?.shipping_tax.split(',') : null;
  const [shippingValue, setShippingValue] = useState();
  const [shippingMinValue, setShippingMinValue] = useState(0);
  const [shippingMaxValue, setShippingMaxValue] = useState(0);
  const [today, setToday] = useState();
  const data = new Date();
  const day = moment(data).format('dddd');
  const [quantity, setQuantity] = useState(0);
  const [cartStore, setCartStore] = useState(' ');
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    try {
      api.get('address/userMain').then((response) => {
        if (regionShippingTax && response?.data !== 'Usuário não está logado') {
          switch (response?.data?.region) {
            case 'Barreiro':
              setShippingValue(regionShippingTax[0]);
              break;

            case 'Centro Sul':
              setShippingValue(regionShippingTax[1]);
              break;

            case 'Leste':
              setShippingValue(regionShippingTax[2]);
              break;

            case 'Nordeste':
              setShippingValue(regionShippingTax[3]);
              break;

            case 'Noroeste':
              setShippingValue(regionShippingTax[4]);
              break;

            case 'Norte':
              setShippingValue(regionShippingTax[5]);
              break;

            case 'Oeste':
              setShippingValue(regionShippingTax[6]);
              break;

            case 'Pampulha':
              setShippingValue(regionShippingTax[7]);
              break;

            default:
              setShippingValue(regionShippingTax[8]); // Venda Nova
              break;
          }
        } else {
          setShippingMinValue(Math.min(...regionShippingTax));
          setShippingMaxValue(Math.max(...regionShippingTax));
        }
      });
    } catch (err) {
      toast('Erro', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }, [regionShippingTax]);

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

  async function getProductStore() {
    try {
      const response = await api.get('/cart/firebase');
      if (response.data.length !== 0) {
        setCartStore(response.data[0].firebase_id_store);
      }
    } catch (error) {
      notification.open({
        message: 'Falha :(',
        description:
          'Erro ao obter produtos do carrinho',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }

  useEffect(() => {
    getProductStore();
  }, []);

  async function handleAddCart() {
    const body = {
      product_id: product.product_id,
      amount: quantity,
      final_price: quantity * product.price,
    };
    if (user && user.type !== 'admin') {
      if (cartStore === store.firebase_id_store || cartStore === ' ') {
        if (quantity > 0) {
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
        } else {
          notification.open({
            message: 'Falha :(',
            description:
              'A quantidade do produto deve ser maior que zero',
            className: 'ant-notification',
            top: '100px',
            style: {
              width: 600,
            },
          });
        }
      } else {
        notification.open({
          message: 'Falha :(',
          description:
            'Os produtos no carrinho devem ser da mesma loja',
          className: 'ant-notification',
          top: '100px',
          style: {
            width: 600,
          },
        });
      }
    } else {
      notification.open({
        message: 'Falha :(',
        description:
          'É necessário estar logado como comprador para adicionar produto ao carrinho',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }

  async function handleAddCartAndBuy() {
    const body = {
      product_id: product.product_id,
      amount: quantity,
      final_price: quantity * product.price,
    };
    if (user && user.type !== 'admin') {
      if (quantity > 0) {
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
          router.push('/Checkout');
        } catch (error) {
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
      } else {
        notification.open({
          message: 'Falha :(',
          description:
            'A quantidade do produto deve ser maior que zero',
          className: 'ant-notification',
          top: '100px',
          style: {
            width: 600,
          },
        });
      }
    } else {
      notification.open({
        message: 'Falha :(',
        description:
          'É necessário estar logado como comprador para realizar a compra',
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
        <a href={`${URL_BASE}/Search?keyword=`}>
          <BackButton>
            <FaArrowLeft size={24} />
            Voltar
          </BackButton>
        </a>
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
              {/* eslint-disable-next-line no-nested-ternary */}
              {shippingValue ? (parseFloat(shippingValue) === 0 ? 'Gratis' : `R$${shippingValue}`) : (shippingMinValue === 0 ? `Gratis ~ R$${shippingMaxValue.toFixed(2)}` : `R$${shippingMinValue.toFixed(2)} ~ R$${shippingMaxValue.toFixed(2)}`) }
            </Delivery>
            <CarrinhoCardInfoQuantity>
              <FaRegMinusSquare size="2x" onClick={() => handleMinus()} />
              <CarrinhoCardText>{quantity}</CarrinhoCardText>
              <FaRegPlusSquare size="2x" onClick={() => handlePlus()} />
            </CarrinhoCardInfoQuantity>
            {(StoreIsOpen(openingTime[today], closingTime[today])) ? (
              <ButtonsContainer>
                <ButtonsContainer.Col>
                  <Button onClick={() => {
                    handleAddCartAndBuy();
                    add(product);
                  }}
                  >
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

export async function getServerSideProps({ params }) {
  const { data: product } = await api.get(`product/${params.id}`);
  const { data: store } = await api.get(`store/${product.firebase_id_store}`);
  return { props: { store, product } };
}
