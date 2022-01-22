import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import {
  CarrinhoBody, CarrinhoFinalButton, CarrinhoIcon, CarrinhoText,
  CarrinhoTitle, CarrinhoTotal, CarrinhoValor, CarrinhoValorText,
} from '../../src/components/CarrinhoComponents';
import CarrinhoCard from '../../src/components/CarrinhoComponents/CarrinhoCard';
import { useAuth } from '../../src/contexts/AuthContext';
import { ContainerDatas, BoxDatasCart } from '../../src/components/MyAdresses/styles';
import api from '../../src/utils/api';

export default function Carrinho() {
  const [products, setProducts] = useState([]);
  const [att, setAtt] = useState(false);
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
  }, [user, att]);
  if (products.length > 0) {
    return (
      <>
        <CarrinhoTitle>
          <CarrinhoText>Carrinho de Compras</CarrinhoText>
          <CarrinhoIcon>
            <MdShoppingCart size="100%" color="#609694" />
          </CarrinhoIcon>
        </CarrinhoTitle>
        <ContainerDatas>
          <CarrinhoBody>
            <div>
              {products.map((p) => (
                <CarrinhoCard product={p} key={p.product_id} setSubTotal={setSubTotal} subTotal={subTotal} att={att} setAtt={setAtt} />
              ))}
            </div>
            <CarrinhoValor>
              <CarrinhoTotal>
                <CarrinhoValorText>SubTotal</CarrinhoValorText>
                <CarrinhoValorText>
                  R$
                  {subTotal}
                </CarrinhoValorText>
                <CarrinhoValorText>Frete:</CarrinhoValorText>
                <CarrinhoValorText>
                  R$
                  {products.shipping_tax}
                </CarrinhoValorText>
                <CarrinhoValorText>Total</CarrinhoValorText>
                <CarrinhoValorText>
                  R$
                  {subTotal + parseFloat(products.shipping_tax)}
                </CarrinhoValorText>
              </CarrinhoTotal>
              <CarrinhoFinalButton>Continuar</CarrinhoFinalButton>
            </CarrinhoValor>
          </CarrinhoBody>
        </ContainerDatas>
      </>
    );
  }
  return (
    <ContainerDatas>
      <BoxDatasCart>
        <p>Nenhum produto em seu carrinho</p>
      </BoxDatasCart>
    </ContainerDatas>
  );
}
