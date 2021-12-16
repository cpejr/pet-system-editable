import { useEffect, useState } from 'react';
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
import { Title, WindowDivider } from '../../src/components/index';
import { useAuth } from '../../src/contexts/AuthContext';
import api from '../../src/utils/api';

export default function Checkout() {
  const [name, setName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expires, setExpires] = useState();
  const [CVV, setCVV] = useState();
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
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
  }
  function handleChangeExpires(event) {
    setExpires(event.target.value);
  }
  function handleChangeCVV(event) {
    setCVV(event.target.value);
  }

  return (
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
            <Button type="submit">Finalizar</Button>
          </Forms>
        </RightContainer>
      </MainContainer.Data>
    </MainContainer>
  );
}
