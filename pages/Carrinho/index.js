import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import {
  CarrinhoBody, CarrinhoFinalButton, CarrinhoIcon, CarrinhoText,
  CarrinhoTitle, CarrinhoTotal, CarrinhoValor, CarrinhoValorText,
  CarrinhoValorTitle,
} from '../../src/components/CarrinhoComponents';
import CarrinhoFrete from '../../src/components/CarrinhoComponents/CarrinhoFrete';
import CarrinhoCard from '../../src/components/CarrinhoComponents/CarrinhoCard';
import { useAuth } from '../../src/contexts/AuthContext';
import { ContainerDatas, BoxDatas } from '../../src/components/MyAdresses/styles';
import api from '../../src/utils/api';

export default function Carrinho() {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log(user);
      api.get('/cart/firebase').then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
    }
  }, [user]);
  if (products.length > 0) {
    return (
      <>
        <CarrinhoTitle>
          <CarrinhoText>Carrinho de Compras</CarrinhoText>
          <CarrinhoIcon>
            <MdShoppingCart size="100%" color="#609694" />
          </CarrinhoIcon>
        </CarrinhoTitle>
        <CarrinhoBody>
          <div>
            {products.map((p) => (
              <CarrinhoCard product={p} key={p.product_id} setSubTotal={setSubTotal} subTotal={subTotal} />
            ))}
          </div>
          <CarrinhoValor>
            <CarrinhoValorTitle>Digite o seu CEP</CarrinhoValorTitle>
            <CarrinhoFrete />
            <CarrinhoTotal>
              <CarrinhoValorText>SubTotal</CarrinhoValorText>
              <CarrinhoValorText>
                R$
                {subTotal}
              </CarrinhoValorText>
              <CarrinhoValorText>Frete</CarrinhoValorText>
              <CarrinhoValorText>R$Frete</CarrinhoValorText>
              <CarrinhoValorText>Total</CarrinhoValorText>
              <CarrinhoValorText>R$Total</CarrinhoValorText>
            </CarrinhoTotal>
            <CarrinhoFinalButton>Continuar</CarrinhoFinalButton>
          </CarrinhoValor>
        </CarrinhoBody>
      </>
    );
  }
  return (
    <ContainerDatas>
      <BoxDatas>
        <p>Nenhum produto em seu carrinho</p>
      </BoxDatas>
    </ContainerDatas>
  );
}
