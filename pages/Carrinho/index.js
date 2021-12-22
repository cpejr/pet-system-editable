import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CarrinhoBody, CarrinhoFinalButton, CarrinhoIcon, CarrinhoText,
  CarrinhoTitle, CarrinhoTotal, CarrinhoValor, CarrinhoValorText,
} from '../../src/components/CarrinhoComponents';
import CarrinhoCard from '../../src/components/CarrinhoComponents/CarrinhoCard';
import { useAuth } from '../../src/contexts/AuthContext';
import { ContainerDatas, BoxDatas } from '../../src/components/MyAdresses/styles';
import api from '../../src/utils/api';

toast.configure();

export default function Carrinho() {
  const [products, setProducts] = useState([]);
  const [att, setAtt] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const { user } = useAuth();
  const router = useRouter();

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

  async function handleSubmit() {
    router.push('/Checkout');
  }

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
              <CarrinhoCard product={p} key={p.product_id} setSubTotal={setSubTotal} subTotal={subTotal} att={att} setAtt={setAtt} />
            ))}
          </div>
          <CarrinhoValor>
            {/* <CarrinhoValorTitle>Digite o seu CEP</CarrinhoValorTitle>
            <CarrinhoFrete /> */}
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
            <CarrinhoFinalButton onClick={handleSubmit}>Continuar</CarrinhoFinalButton>
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
