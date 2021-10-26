import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import {
  CarrinhoBody, CarrinhoFinalButton, CarrinhoIcon, CarrinhoText,
  CarrinhoTitle, CarrinhoTotal, CarrinhoValor, CarrinhoValorText,
  CarrinhoValorTitle,
} from '../../src/components/CarrinhoComponents';
import CarrinhoFrete from '../../src/components/CarrinhoComponents/CarrinhoFrete';
import CarrinhoCard from '../../src/components/CarrinhoComponents/CarrinhoCard';

import api from '../../src/utils/api';

export default function Carrinho() {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    api.get('/CartProducts').then((res) => {
      setProducts(res.data);
    });
  }, []);
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
            <CarrinhoCard
              product={p}
              key={p.product_id}
              setSubTotal={setSubTotal}
              subTotal={subTotal}
            />
          ))}
        </div>
        <CarrinhoValor>
          <CarrinhoTotal>
            <CarrinhoValorText>SubTotal</CarrinhoValorText>
            <CarrinhoValorText>
              R$
              {subTotal}
            </CarrinhoValorText>
            <CarrinhoValorText>Total</CarrinhoValorText>
            <CarrinhoValorText>R$Total</CarrinhoValorText>
          </CarrinhoTotal>
          <CarrinhoFinalButton>Continuar</CarrinhoFinalButton>
        </CarrinhoValor>
      </CarrinhoBody>
    </>
  );
}
