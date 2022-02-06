/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'date-fns';
import { useRouter } from 'next/router';
import DateFnsUtils from '@date-io/date-fns';
import { toast } from 'react-toastify';
import Head from 'next/head';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import api from '../../src/utils/api';
import { useAuth } from '../../src/contexts/AuthContext';
import { Title, WindowDivider } from '../../src/components/index';
import MaskedInput from '../../src/components/MasketInput';
import {
  MainContainer,
  Forms,
  InputField,
  InputName,
  FieldSpace,
  LeftContainer,
  RightContainer,
  Button,
  Subtitle,
  Qnt,
  Product,
  Price,
  Data,
  Subtotal,
  Space,
} from './styles';
import SelectState from '../../src/components/SelectState';
import initialState from '../../src/components/checkoutInitialState';
import { useCart } from '../../src/components/CardContext/CardContext';
import withAuthUser from '../../src/components/WithAuth/WithAuthUser';

const Checkout = () => {
  const cart = useCart();

  const router = useRouter();

  const [dados, setDados] = useState(initialState);
  const [cardBrand, setCardBrand] = useState(initialState);

  // Carregar a imagem da bandeira do cartão__________
  const myLoader = ({ src }) => `https://stc.pagseguro.uol.com.br/${src}`;

  // Dados do usuário que está logado_________________
  const { user } = useAuth();

  const handleChange = (event, field) => {
    if (field === 'page' || field === 'cardToken' || field === 'birth') {
      setDados({ ...dados, [field]: event });
    }
    if (event.target !== undefined && field !== 'cardNumber') {
      setDados({ ...dados, [field]: event.target.value });
    }
  };

  // Função para remover carrinho
  function remove() {
    cart.removeAllFromCart();
  }

  // Função para finalizar o pagamento_____________
  async function handleFinish() {
    // Body passado para a API de pagamentos____________
    const body = {
      'installment.value': String(
        (dados.subTotal + parseFloat(dados.products.shipping_tax)).toFixed(2),
      ),
      'installment.quantity': '1',
      'creditCard.token': dados.cardToken,
      'creditCard.holder.name': dados.name,
      'creditCard.holder.CPF': dados.cpf,
      'creditCard.holder.birthDate': dataNascimentoFormatada(dados.birth),
      'creditCard.holder.areaCode': dados.phone?.substring(0, 2),
      'creditCard.holder.phone': dados.phone?.substring(2, 11),
      'billingAddress.street': dados.street,
      'billingAddress.number': dados.streetNumber,
      'billingAddress.complement': dados.complement,
      'billingAddress.district': dados.district,
      'billingAddress.postalCode': dados.postalCode,
      'billingAddress.city': dados.city,
      'billingAddress.state': dados.state,
      'billingAddress.country': 'BRA',
      paymentMethod: cardBrand,
      'shipping.cost': dados.products.shipping_tax,
      'sender.hash': dados.hash,
    };
    if (dados.phone?.length !== 11) {
      toast('CPF inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (dados.cpf?.length !== 11) {
      toast('CPF inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (dados.cardNumber?.length < 13 || dados.cardNumber?.length > 16) {
      toast('Número do cartão inválido', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.CVV?.length !== dados.paymentData.brand.cvvSize) {
      toast('Número do cartão inválido', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.name?.length === 0) {
      toast('Por favor insira um nome válido', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.expires?.length === 0) {
      toast('Por favor insira uma data de validade válida!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.street?.length === 0) {
      toast('Por favor insira uma endereço válido!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.streetNumber?.length === 0) {
      toast('Por favor insira um número de residência válido!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.district?.length === 0) {
      toast('Por favor insira um bairro válido!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.city?.length === 0) {
      toast('Por favor insira uma cidade válida!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.state?.length === 0) {
      toast('Por favor selecione um estado!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    try {
      await api.post('/payCheckout/CreditCard', body);
      toast('Sucesso', { position: toast.POSITION.BOTTOM_RIGHT });
      remove();
      router.push('/User/Perfil/MyRequests');
    } catch (error) {
      console.error(error);
      toast('Erro', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  // Função para formatar a data___________________
  function dataNascimentoFormatada(bdate) {
    const data = new Date(bdate);
    const dia = data.getDate().toString();
    const diaF = dia.length === 1 ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = mes.length === 1 ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  // Controle da páginas dentro do Checkout________
  function handleProsseguir() {
    if (dados.name.length !== 0) {
      toast('Por favor insira um nome!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.cpf.length !== 0) {
      toast('Por favor insira um cpf válido!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.birth.length !== 0) {
      toast('Por favor insira uma data válida!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.cardNumber.length >= 14) {
      toast('Por favor insira um numero válido para o cartão!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.expires.length !== 0) {
      toast('Por favor insira um bairro válido!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.CVV.length !== 0) {
      toast('Por favor insira um bairro válido!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (dados.phone.length !== 0) {
      toast('Por favor insira um bairro válido!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    handleChange(1, 'page');
  }
  function handleReturn() {
    handleChange(0, 'page');
  }

  // useEffect para carregar os dados da página________

  useEffect(() => {
    if (dados.page === 1 && dados.cardToken === '') {
      PagSeguroDirectPayment?.createCardToken({
        cardNumber: dados.cardNumber,
        brand: cardBrand,
        cvv: dados.CVV,
        expirationMonth: dados.expires.substring(0, 2),
        expirationYear: dados.expires.substring(2, 7),
        success(response) {
          setDados({
            ...dados,
            cardToken: response.card.token,
          });
        },
        error() {
          toast('Informações Do cartão Inválidas!', {
            position: toast.POSITION.BOTTOM_RIGHT,
          }); // Callback para chamadas que falharam.
        },
      });
    }
  }, [dados.page]);

  useEffect(() => {
    if (
      dados.cardNumber.length === 6
      && cardBrand === ''
    ) {
      try {
        PagSeguroDirectPayment.getBrand({
          cardBin: Number(dados.cardNumber),
          success(response) {
            setCardBrand(response.brand.name);
          },
          error(error) {
            console.error(error);
          },
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setCardBrand('');
    }
  }, [dados.cardNumber]);

  useEffect(() => {
    try {
      api.post('/payCheckout/Session').then((res) => {
        PagSeguroDirectPayment.setSessionId(res.data);
        PagSeguroDirectPayment.getPaymentMethods({
          amount: dados.subTotal,
          success() { },
          error() { },
        });
      });
      PagSeguroDirectPayment?.onSenderHashReady((response) => {
        if (response.status === 'error') {
          return false;
        }
        setDados({ ...dados, hash: response.senderHash });
        return true;
      });
    } catch (error) {
      console.error(error);
    }
    let somaPrecos = 0;
    if (user) {
      try {
        api.get('/cart/firebase').then((res) => {
          if (res?.data?.length > 0) {
            res?.data?.forEach((product) => {
              somaPrecos += product.price * product.amount;
            });
            api.get(`/store/${res.data[0].firebase_id_store}`).then((store) => {
              const regionShippingTax = store?.data?.shipping_tax.split(',');
              api.get('address/userMain').then((responseMainAddress) => {
                if (regionShippingTax && responseMainAddress?.data !== 'Usuário não está logado') {
                  switch (responseMainAddress?.data?.region) {
                    case 'Barreiro':
                      res.data.shipping_tax = regionShippingTax[0];
                      break;

                    case 'Centro Sul':
                      res.data.shipping_tax = regionShippingTax[1];
                      break;

                    case 'Leste':
                      res.data.shipping_tax = regionShippingTax[2];
                      break;

                    case 'Nordeste':
                      res.data.shipping_tax = regionShippingTax[3];
                      break;

                    case 'Noroeste':
                      res.data.shipping_tax = regionShippingTax[4];
                      break;

                    case 'Norte':
                      res.data.shipping_tax = regionShippingTax[5];
                      break;

                    case 'Oeste':
                      res.data.shipping_tax = regionShippingTax[6];
                      break;

                    case 'Pampulha':
                      res.data.shipping_tax = regionShippingTax[7];
                      break;

                    default:
                      res.data.shipping_tax = regionShippingTax[8]; // Venda Nova
                      break;
                  }
                  setDados({ ...dados, products: res.data, subTotal: parseFloat(somaPrecos.toFixed(2)) });
                }
              });
            });
          } else {
            setDados({ ...dados, products: res.data, subTotal: parseFloat(somaPrecos.toFixed(2)) });
          }
        });
      } catch (error) {
        console.error(error);
      }
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
                {dados.products.map((p) => (
                  <Data>{p.amount}</Data>
                ))}
              </Qnt>
              <Product>
                Produto
                {dados.products.map((p) => (
                  <Data>{p.product_name}</Data>
                ))}
              </Product>
              <Price>
                Preço
                {dados.products.map((p) => (
                  <Data>
                    R$
                    {' '}
                    {p.price.toFixed(2)}
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
                  {dados.subTotal.toFixed(2)}
                </Data>
                <Data>
                  R$
                  {' '}
                  {dados.products.shipping_tax}
                </Data>
                <Data>
                  R$
                  {' '}
                  {(
                    dados.subTotal + parseFloat(dados.products.shipping_tax)
                  ).toFixed(2)}
                </Data>
              </Subtotal>
            </Subtitle>
          </LeftContainer>
          <WindowDivider />
          <RightContainer>
            <Title>Dados de Pagamento</Title>
            <Forms>
              {dados.page === 1 && (
                <>
                  <InputField.Line>
                    <InputField.InsideLine>
                      <InputName.Inp2>Endereço da cobrança:</InputName.Inp2>
                      <InputField
                        type="text"
                        placeholder="Endereço"
                        onChange={(e) => handleChange(e, 'street')}
                        value={dados.street}
                      />
                    </InputField.InsideLine>
                  </InputField.Line>
                  <InputField.Line>
                    <InputField.InsideLine>
                      <InputName.Inp2>Número</InputName.Inp2>
                      <InputField
                        type="text"
                        placeholder="Número"
                        onChange={(e) => handleChange(e, 'streetNumber')}
                        value={dados.streetNumber}
                      />
                    </InputField.InsideLine>
                    <FieldSpace />
                    <InputField.InsideLine>
                      <InputName.Inp2>Bairro: </InputName.Inp2>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <InputField
                          type="text"
                          placeholder="Bairro"
                          onChange={(e) => handleChange(e, 'district')}
                          value={dados.district}
                        />
                      </MuiPickersUtilsProvider>
                    </InputField.InsideLine>
                  </InputField.Line>
                  <InputField.Line>
                    <InputField.InsideLine>
                      <InputName.Inp2>Cidade</InputName.Inp2>
                      <InputField
                        type="text"
                        placeholder="Cidade"
                        onChange={(e) => handleChange(e, 'city')}
                        value={dados.city}
                      />
                    </InputField.InsideLine>
                    <FieldSpace />
                    <InputField.InsideLine>
                      <InputName.Inp2>Estado</InputName.Inp2>
                      <SelectState
                        name="Estado"
                        onChange={(e) => handleChange(e, 'state')}
                        value={dados.state}
                      />
                    </InputField.InsideLine>
                  </InputField.Line>
                  <InputField.Line>
                    <InputField.InsideLine>
                      <InputName.Inp2>CEP</InputName.Inp2>
                      <MaskedInput
                        name="postalCode"
                        id="postalCode"
                        mask="99999-999"
                        value={dados.postalCode}
                        onChange={(e) => handleChange(e, 'postalCode')}
                      />
                    </InputField.InsideLine>
                    <FieldSpace />
                    <InputField.InsideLine>
                      <InputName.Inp2>Complemento</InputName.Inp2>
                      <InputField
                        type="text"
                        placeholder="Complemento"
                        onChange={(e) => handleChange(e, 'complement')}
                        value={dados.complement}
                      />
                    </InputField.InsideLine>
                  </InputField.Line>
                  <InputField.Line>
                    <Button type="submit" onClick={handleReturn}>
                      Retornar
                    </Button>
                    <Button type="submit" onClick={handleFinish}>
                      Finalizar
                    </Button>
                  </InputField.Line>
                </>
              )}
              {dados.page === 0 && (
                <>
                  <InputField.Line>
                    <InputField.InsideLine>
                      <InputName.Inp2>Nome no Cartão:</InputName.Inp2>
                      <InputField
                        type="text"
                        placeholder="Seu Nome Aqui"
                        onChange={(e) => handleChange(e, 'name')}
                        value={dados.name}
                      />
                    </InputField.InsideLine>
                  </InputField.Line>
                  <InputField.Line>
                    <InputField.InsideLine>
                      <InputName.Inp2>CPF</InputName.Inp2>
                      <MaskedInput
                        name="cpf"
                        id="cpf"
                        mask="999.999.999-99"
                        value={dados.cpf}
                        onChange={(e) => handleChange(e, 'cpf')}
                      />
                    </InputField.InsideLine>
                    <FieldSpace />
                    <InputField.InsideLine>
                      <InputName.Inp2>Nascimento</InputName.Inp2>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          value={dados.birth}
                          field="birth"
                          onChange={(e) => {
                            handleChange(e, 'birth');
                          }}
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
                        onChange={(e) => handleChange(e, 'cardNumber')}
                        value={dados.cardNumber}
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
                      <MaskedInput
                        name="expires"
                        id="expires"
                        mask="99/9999"
                        value={dados.expires}
                        onChange={(e) => handleChange(e, 'expires')}
                      />
                    </InputField.InsideLine>
                    <FieldSpace />
                    <InputField.InsideLine>
                      <InputName.Inp2>CVV:</InputName.Inp2>
                      <InputField.LineField
                        type="text"
                        placeholder="000"
                        onChange={(e) => handleChange(e, 'CVV')}
                        value={dados.CVV}
                        maxlength="4"
                      />
                    </InputField.InsideLine>
                    <InputField.InsideLine>
                      <InputName.Inp2>Telefone:</InputName.Inp2>
                      <MaskedInput
                        name="phone"
                        id="phone"
                        mask="(99)99999-9999"
                        value={dados.phone}
                        onChange={(e) => handleChange(e, 'phone')}
                      />
                    </InputField.InsideLine>
                  </InputField.Line>
                  <InputField.Line>
                    <Button type="submit" onClick={handleProsseguir}>
                      Prosseguir
                    </Button>
                  </InputField.Line>
                </>
              )}
            </Forms>
          </RightContainer>
        </MainContainer.Data>
      </MainContainer>
    </>
  );
};

export default withAuthUser(Checkout);
