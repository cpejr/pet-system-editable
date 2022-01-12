import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { toast } from 'react-toastify';
import Head from 'next/head';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import api from '../../src/utils/api';
import { useAuth } from '../../src/contexts/AuthContext';
import { Title, WindowDivider } from '../../src/components/index';
import MaskedInput from '../../src/components/MasketInput';
import {
  MainContainer, Forms, InputField, InputName, FieldSpace, LeftContainer,
  RightContainer, Button, Subtitle, Qnt, Product, Price, Data, Subtotal,
  Space,
} from './styles';

export default function Checkout() {
  // Dados do usuário que está logado_________________
  const { user } = useAuth();

  // Dados da loja responsável pelos produtos_________
  const [store, setStore] = useState();

  // Variáveis do endereço para cobrança _____________
  const [street, setStreet] = useState();
  const [streetNumber, setStreetNumber] = useState();
  const [district, setDistrict] = useState();
  const [complement, setComplement] = useState();
  const [postalCode, setPostalCode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const country = useState('BR');

  // Variáveis do cartão para a cobrança _____________
  const [cardNumber, setCardNumber] = useState('');
  const [cardBrand, setBrand] = useState();
  const [expires, setExpires] = useState();
  const [CVV, setCVV] = useState('');
  const [hash, setHash] = useState();
  const [cardToken, setCardToken] = useState();

  // Variaveis do titular do cartão___________________
  const [name, setName] = useState();
  const [cpf, setCpf] = useState('');
  const [birth, setBirth] = useState(new Date());

  // Variáveis do Pedido______________________________
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [paymentData, setPaymentData] = useState();
  const [paymentMethod, setPaymentMethod] = useState([]);

  // Body passado para a API de pagamentos____________
  const body = {
    'installment.value': String((subTotal + parseFloat(products.shipping_tax)).toFixed(2)),
    'installment.quantity': '1',
    'installment.noInterestInstallmentQuantity': '1',
    'creditCard.token': cardToken,
    'creditCard.holder.name': name,
    'creditCard.holder.CPF': cpf,
    'creditCard.holder.birthDate': birth,
    'creditCard.holder.areaCode': user.phone.substring(0, 2),
    'creditCard.holder.phone': user.phone.substring(2),
    'billingAddress.street': street,
    'billingAddress.number': streetNumber,
    'billingAddress.complement': complement,
    'billingAddress.district': district,
    'billingAddress.postalCode': postalCode,
    'billingAddress.city': city,
    'billingAddress.state': state,
    'billingAddress.country': 'BRA',
    paymentMethod,
  };

  // Carregar a imagem da bandeira do cartão__________
  const myLoader = ({ src }) => `https://stc.pagseguro.uol.com.br/${src}`;

  // Funções para setar as variáveis___________________
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeCardNumber(event) {
    setCardNumber(event.target.value);
    if (cardNumber.length >= 6 && cardNumber.length <= 7) {
      PagSeguroDirectPayment.getBrand({
        cardBin: Number(cardNumber),
        success(response) {
          setPaymentData(response);
          setBrand(response.brand.name);
        },
        error(response) {
        },
      });
    } else if (cardNumber.length <= 6) setBrand(undefined);
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
  function handleStreet(event) {
    setStreet(event.target.value);
  }
  function handleStreetNumber(event) {
    setStreetNumber(event.target.value);
  }
  function handleDistrict(event) {
    setDistrict(event.target.value);
  }
  function handleComplement(event) {
    setComplement(event.target.value);
  }
  function handlePostalCode(event) {
    setPostalCode(event.target.value);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function handleState(event) {
    setState(event.target.value);
  }
  function handleFinish() {
    // if (cpf?.length !== 11) {
    //   toast('CPF inválido', { position: toast.POSITION.BOTTOM_RIGHT });
    //   return;
    // }
    // if (cardNumber?.length < 13 || cardNumber?.length > 16) {
    //   toast('Número do cartão inválido', { position: toast.POSITION.BOTTOM_RIGHT });
    //   return;
    // }
    // if (CVV?.length !== paymentData.brand.cvvSize) {
    //   toast('Número do cartão inválido', { position: toast.POSITION.BOTTOM_RIGHT });
    //   return;
    // }
    // PagSeguroDirectPayment.createCardToken({
    //   cardNumber,
    //   brand: cardBrand,
    //   cvv: CVV,
    //   expirationMonth: expires.substring(0, 2),
    //   expirationYear: expires.substring(2, 7),
    //   success(response) {
    //     setCardToken(response.card.token);
    //   },
    //   error(response) {
    //     toast('Informações Inválidas, por favor tente novamente!', { position: toast.POSITION.BOTTOM_RIGHT });// Callback para chamadas que falharam.
    //   },
    // });
    // api.post('/payCheckout/CreditCard', body);
  }

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
  // useEffect para carregar os dados da página________
  useEffect(() => {
    try {
      api.post('/payCheckout/Session').then((res) => {
        PagSeguroDirectPayment.setSessionId(res.data);
        PagSeguroDirectPayment.getPaymentMethods({
          amount: subTotal,
          success(response) {
            setPaymentMethod(response); // Retorna os meios de pagamento disponíveis.
          },
          error(response) {
            console.log(response); // Callback para chamadas que falharam.
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
                  <InputName.Inp2>Endereço da cobrança:</InputName.Inp2>
                  <InputField
                    type="text"
                    placeholder="Endereço"
                    onChange={handleStreet}
                    onClick={loadHash}
                    value={street}
                  />
                </InputField.InsideLine>
              </InputField.Line>
              <InputField.Line>
                <InputField.InsideLine>
                  <InputName.Inp2>Número</InputName.Inp2>
                  <InputField
                    type="text"
                    placeholder="Número"
                    onChange={handleStreetNumber}
                    value={streetNumber}
                  />
                </InputField.InsideLine>
                <FieldSpace />
                <InputField.InsideLine>
                  <InputName.Inp2>Bairro: </InputName.Inp2>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <InputField
                      type="text"
                      placeholder="Bairro"
                      onChange={handleDistrict}
                      value={district}
                    />
                  </MuiPickersUtilsProvider>
                </InputField.InsideLine>
              </InputField.Line>
              <InputField.Line>
                <InputField.InsideLine>
                  <InputName.Inp2>Estado</InputName.Inp2>
                  <InputField
                    type="text"
                    placeholder="Cidade"
                    onChange={handleState}
                    value={state}
                  />
                </InputField.InsideLine>
                {/* <InputField.InsideLine>
                  <InputName.Inp2>CEP</InputName.Inp2>
                  <MaskedInput name="postalCode" id="postalCode" mask="99999-999" onChange={handlePostalCode} />
                </InputField.InsideLine> */}
                <FieldSpace />
                <InputField.InsideLine>
                  <InputName.Inp2>Cidade</InputName.Inp2>
                  <InputField
                    type="text"
                    placeholder="Cidade"
                    onChange={handleCity}
                    value={city}
                  />
                </InputField.InsideLine>
              </InputField.Line>
              <InputField.Line>
                <InputField.InsideLine>
                  <InputName.Inp2>CEP</InputName.Inp2>
                  <MaskedInput name="postalCode" id="postalCode" mask="99999-999" onChange={handlePostalCode} />
                </InputField.InsideLine>
                <FieldSpace />
                <InputField.InsideLine>
                  <InputName.Inp2>Complemento</InputName.Inp2>
                  <InputField
                    type="text"
                    placeholder="Complemento"
                    onChange={handleComplement}
                    value={complement}
                  />
                </InputField.InsideLine>
              </InputField.Line>
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
                  <MaskedInput name="cpf" id="cpf" mask="999.999.999-99" onChange={handleCpfChange} />
                </InputField.InsideLine>
                <FieldSpace />
                <InputField.InsideLine>
                  <InputName.Inp2>Nascimento</InputName.Inp2>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      value={birth}
                      onChange={(newDate) => { setBirth(newDate); }}
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
                  <MaskedInput name="expires" id="expires" mask="99/9999" onChange={handleChangeExpires} />
                </InputField.InsideLine>
                <FieldSpace />
                <InputField.InsideLine>
                  <InputName.Inp2>CVV:</InputName.Inp2>
                  <InputField.LineField
                    type="text"
                    placeholder="000"
                    onChange={handleChangeCVV}
                    maxlength="4"
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
