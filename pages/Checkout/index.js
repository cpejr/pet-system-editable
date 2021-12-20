import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import api from '../../src/utils/api';
import { useAuth } from '../../src/contexts/AuthContext';
import { Title, WindowDivider } from '../../src/components/index';
import {
  MainContainer, Forms, InputField, InputName, FieldSpace, LeftContainer,
  RightContainer, Button, Subtitle, Qnt, Product, Price, Data, Subtotal,
  Space,
} from './styles';

export default function Checkout() {
  const [name, setName] = useState();
  const [cardNumber, setCardNumber] = useState('');
  const [cardBrand, setBrand] = useState();
  const [expires, setExpires] = useState();
  const [CVV, setCVV] = useState();
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [session, setSession] = useState();
  const [paymentMethod, setPaymentMethod] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    try {
      api.post('/payCheckout/Session').then((res) => {
        setSession(res.data);
        PagSeguroDirectPayment.setSessionId(res.data);
        PagSeguroDirectPayment.getPaymentMethods({
          amount: subTotal,
          success(response) {
            setPaymentMethod(response);// Retorna os meios de pagamento disponíveis.
          },
          error(response) {
            // Callback para chamadas que falharam.
          },
          complete(response) {
            // Callback para todas chamadas.
          },
        });
      });
    } catch (error) {
      console.error(error);
    }
    let somaPrecos = 0;
    if (user) {
      api.get('/cart/firebase').then((res) => {
        if (res.data.length > 0) {
          res.data.forEach((product) => {
            somaPrecos += product.price * product.amount;
          });
          setSubTotal(parseFloat(somaPrecos.toFixed(2)));
          api.get(`/store/${res.data[0].firebase_id_store}`).then((store) => {
            res.data.shipping_tax = store.data.shipping_tax;
            setProducts(res.data);
          });
        } else {
          setProducts(res.data);
        }
      });
    }
  }, [user]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeCardNumber(event) {
    setCardNumber(event.target.value);
    if (cardNumber.length >= 6) {
      PagSeguroDirectPayment.getBrand({
        cardBin: Number(cardNumber),
        success(response) {
          setBrand(response.brand.name);
          // bandeira encontrada
        },
        error(response) {
          // tratamento do erro
        },
        complete(response) {
          // tratamento comum para todas chamadas
        },
      });
    } else setBrand(undefined);
  }
  function handleChangeExpires(event) {
    setExpires(event.target.value);
  }
  function handleChangeCVV(event) {
    setCVV(event.target.value);
  }
  function handleFinish() {
    console.log(paymentMethod);
  }
  function loadHash() {
    PagSeguroDirectPayment.onSenderHashReady((response) => {
      if (response.status === 'error') {
        return false;
      }
      const hash = response.senderHash;
    });
  }
  const myLoader = ({ src }) => `https://stc.pagseguro.uol.com.br/${src}`;
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"
        />
      </Head>
      <MainContainer>
        <Title>Finalizar Compra</Title>
        <MainContainer.Data>
          <LeftContainer>
            <Title>Revisão do Pedido</Title>
            <Subtitle>
              <Qnt>
                Qnt
                {products.map((p) => (
                  <Data>{p.name}</Data>
                ))}
              </Qnt>
              <Product>
                Produto
                {products.map((p) => (
                  <Data>{p.product_name}</Data>
                ))}
              </Product>
              <Price>
                Preço
                {products.map((p) => (
                  <Data>
                    R$
                    {' '}
                    {p.price}
                  </Data>
                ))}
              </Price>
            </Subtitle>
            <Space />
            <Subtitle>
              <Qnt />
              <Product.Subtotal>
                <Data>Subtotal</Data>
                <Data>Frete</Data>
                <Data>Total</Data>
              </Product.Subtotal>
              <Subtotal>
                <Data>
                  R$
                  {' '}
                  {subTotal}
                </Data>
                <Data>
                  R$
                  {' '}
                  {products.shipping_tax}
                </Data>
                <Data>
                  R$
                  {' '}
                  {subTotal + parseFloat(products.shipping_tax)}
                </Data>
              </Subtotal>
            </Subtitle>
          </LeftContainer>
          <WindowDivider />
          <RightContainer>
            <Title>Dados de Pagamento</Title>
            <Forms>
              <InputName.Inp2>Nome no Cartão:</InputName.Inp2>
              <InputField
                type="text"
                placeholder="Seu Nome Aqui"
                onChange={handleChangeName}
                onClick={loadHash}
                value={name}
              />
              <InputName.Inp2>Número do Cartão:</InputName.Inp2>
              <InputField
                type="text"
                placeholder="0000 0000 0000 0000"
                onChange={handleChangeCardNumber}
                value={cardNumber}
              />
              <InputField.Line>
                {cardBrand !== undefined ? (
                  <Image
                    loader={myLoader}
                    src={`public/img/payment-methods-flags/68x30/${cardBrand}.png`}
                    alt=""
                    width="550"
                    height="250"
                  />
                ) : (
                  <div />
                )}
                <InputName>Validade:</InputName>
                <InputField.LineField
                  type="text"
                  placeholder="MM/AA"
                  onChange={handleChangeExpires}
                  value={expires}
                />
                <FieldSpace />
                <InputName>CVV:</InputName>
                <InputField.LineField
                  type="text"
                  placeholder="000"
                  onChange={handleChangeCVV}
                  value={CVV}
                />
              </InputField.Line>
              <Button type="submit" onClick={handleFinish}>Finalizar</Button>
            </Forms>
          </RightContainer>
        </MainContainer.Data>
      </MainContainer>
    </>
  );
}
