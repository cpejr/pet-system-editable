import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useAuth } from '../../src/contexts/AuthContext';
import {
  CarrinhoBody,
  CarrinhoFinalButton,
  CarrinhoIcon,
  CarrinhoText,
  CarrinhoTitle,
  CarrinhoTotal,
  CarrinhoValor,
  CarrinhoValorText,
} from '../../src/components/CarrinhoComponents';
import CarrinhoCard from '../../src/components/CarrinhoComponents/CarrinhoCard';

import api from '../../src/utils/api';

export default function Carrinho() {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      api.get(`/cart/firebase/${user.firebase_id}`).then((response) => {
        console.log(response);
      });
      // api.get(`/CartProducts/${cart.cart_id}`).then((res) => {
      //   setProducts(res.data);
      // });
    }
  }, [user]);

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
