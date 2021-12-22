import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Head from 'next/head';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
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
  const [store, setStore] = useState();
  const [cardNumber, setCardNumber] = useState('');
  const [cardBrand, setBrand] = useState();
  const [expires, setExpires] = useState();
  const [CVV, setCVV] = useState('');
  const [date, setDate] = useState(new Date());
  const [cpf, setCpf] = useState('');
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [session, setSession] = useState();
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [hash, setHash] = useState();
  const [cardToken, setCardToken] = useState();
  const { user } = useAuth();

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
    if (event.target.value.length === 3) {
      setCVV(event.target.value, handleFinish);
    } else setCVV(event.target.value);
  }
  function handleCpfChange(event) {
    setCpf(event.target.value);
  }

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
          setStore(res.data[0].firebase_id_store);
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

  function handleFinish() {
    PagSeguroDirectPayment.createCardToken({
      cardNumber,
      brand: cardBrand,
      cvv: CVV,
      expirationMonth: expires.substring(0, 2),
      expirationYear: expires.substring(3, 7),
      success(response) {
        setCardToken(response.card.token);
      },
      error(response) {
        // Callback para chamadas que falharam.
      },
    });
    api.post('/payCheckout/CreditCard', body);
  }
  const body = {
    firebase_id_store: store,
    creditCardHolderBirthDate: dataNascimentoFormatada(date),
    creditCardHolderCPF: cpf,
    creditCardHolderName: name,
    creditCardToken: cardToken,
    installmentQuantity: '1',
    installmentValue: String((subTotal + parseFloat(products.shipping_tax)).toFixed(2)),
    extraAmount: String(parseFloat(products.shipping_tax).toFixed(2)),
    paymentMethod: 'creditCard',
    senderHash: hash,
    delivery_method: 'Proprio',
  };

  function loadHash() {
    PagSeguroDirectPayment.onSenderHashReady((response) => {
      if (response.status === 'error') {
        return false;
      }
      setHash(response.senderHash);
    });
  }

  function dataNascimentoFormatada(bdate) {
    const data = new Date(bdate);
    const dia = data.getDate().toString();
    const diaF = dia.length === 1 ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = mes.length === 1 ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }
  // const body = {
  //   firebase_id_store: store,
  //   creditCardHolderBirthDate: dataNascimentoFormatada(date),
  //   creditCardHolderCPF: cpf,
  //   creditCardHolderHolderName: name,
  //   creditCardToken: cardToken,
  //   installmentQuantity: '1',
  //   instalmentValue: String(subTotal + parseFloat(products.shipping_tax)),
  //   paymentMethod: 'creditCard',
  //   senderHash: hash,
  //   delivery_method: 'Proprio',
  // };
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
                  <Data>{p.amount}</Data>
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
                    {(p.price.toFixed(2))}
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
                  {subTotal.toFixed(2)}
                </Data>
                <Data>
                  R$
                  {' '}
                  {products.shipping_tax}
                </Data>
                <Data>
                  R$
                  {' '}
                  {(subTotal + parseFloat(products.shipping_tax)).toFixed(2)}
                </Data>
              </Subtotal>
            </Subtitle>
          </LeftContainer>
          <WindowDivider />
          <RightContainer>
            <Title>Dados de Pagamento</Title>
            <Forms>
              <InputField.Line>
                <InputField.InsideLine>
                  <InputName.Inp2>Nome no Cartão:</InputName.Inp2>
                  <InputField
                    type="text"
                    placeholder="Seu Nome Aqui"
                    onChange={handleChangeName}
                    onClick={loadHash}
                    value={name}
                  />
                </InputField.InsideLine>
              </InputField.Line>
              <InputField.Line>
                <InputField.InsideLine>
                  <InputName.Inp2>CPF</InputName.Inp2>
                  <InputField
                    type="number"
                    placeholder="123.456.789-00"
                    pattern="[0-9]$"
                    required
                    title="Digite um CPF válido"
                    onChange={handleCpfChange}
                  />
                </InputField.InsideLine>
                <FieldSpace />
                <InputField.InsideLine>
                  <InputName.Inp2>Nascimento</InputName.Inp2>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      value={date}
                      onChange={(newDate) => { setDate(newDate); }}
                      variant="inline"
                      format="dd/MM/yyyy"
                    />
                  </MuiPickersUtilsProvider>
                </InputField.InsideLine>
              </InputField.Line>
              <InputField.Line>
                <InputField.InsideLine>
                  <InputName.Inp2>Número do Cartão:</InputName.Inp2>
                  <InputField
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    onChange={handleChangeCardNumber}
                    value={cardNumber}
                  />
                </InputField.InsideLine>
                <InputField.InsideLineBrand>
                  {cardBrand !== undefined ? (
                    <Image
                      loader={myLoader}
                      src={`public/img/payment-methods-flags/68x30/${cardBrand}.png`}
                      alt=""
                      width="68"
                      height="30"
                    />
                  ) : (
                    <div />
                  )}
                </InputField.InsideLineBrand>
              </InputField.Line>
              <InputField.Line>
                <InputField.InsideLine>
                  <InputName.Inp2>Validade:</InputName.Inp2>
                  <InputField.LineField
                    type="text"
                    placeholder="MM/AAAA"
                    onChange={handleChangeExpires}
                    value={expires}
                  />
                </InputField.InsideLine>
                <FieldSpace />
                <InputField.InsideLine>
                  <InputName.Inp2>CVV:</InputName.Inp2>
                  <InputField.LineField
                    type="text"
                    placeholder="000"
                    onChange={handleChangeCVV}
                    value={CVV}
                  />
                </InputField.InsideLine>
              </InputField.Line>
              <InputField.Line>
                <Button type="submit" onClick={handleFinish}>Finalizar</Button>
              </InputField.Line>
            </Forms>
          </RightContainer>
        </MainContainer.Data>
      </MainContainer>
    </>
  );
}
