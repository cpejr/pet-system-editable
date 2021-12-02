import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CarrinhoBody, CarrinhoFinalButton, CarrinhoIcon, CarrinhoText,
  CarrinhoTitle, CarrinhoTotal, CarrinhoValor, CarrinhoValorText,
  // CarrinhoValorTitle,
} from '../../src/components/CarrinhoComponents';
// import CarrinhoFrete from '../../src/components/CarrinhoComponents/CarrinhoFrete';
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

  async function handleSubmit(event) {
    event.preventDefault();
    // Esse botão tem que redirecionar para a pagina de pedido e não finalizar o pedido em si como está sendo feito.
    const body = {
      firebase_id_store: products[0].firebase_id_store,
      total_price: subTotal + parseFloat(products.shipping_tax),
      payment_type: 'cartao', // tem que tornar dinâmico
      status: 'Pedido Criado',
      delivery_method: 'Próprio da Loja',
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PAGSEGURO_MERCHANT_ID}`,
    };
    try {
      const response = await api.post('/order', body);
      toast('Sucesso!', { position: toast.POSITION.BOTTOM_RIGHT });
      router.push(`${response.data.links[1].href}`, { headers });
    } catch (error) {
      console.log(error);
      toast('Erro ao gerar pedido.', { position: toast.POSITION.BOTTOM_RIGHT });
    }
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
