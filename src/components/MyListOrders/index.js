import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import api from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import {
  FullRequest, Submit, ImgLittle, ImgNormal,
} from './styles';

export default function MyListOrders() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div>
        <p>Dados do usuário não encontrados</p>
      </div>
    );
  }

  const [orders, setOrders] = useState([]);
  const router = useRouter();

  function dataFormatada(bdate) {
    const data = new Date(bdate);
    const dia = data.getDate().toString();
    const diaF = dia.length === 1 ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = mes.length === 1 ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  function loadOrder() {
    try {
      api.get('getOrderAndCartProducts/').then((res) => {
        setOrders(res.data);
      });
    } catch (error) {
    console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    loadOrder();
  }, []);

  if (orders) {
    return (
      <div>
        {orders.map((order) => {
          if (order.status === 'enviado' || order.status === 'em andamento' || order.status === 'Aguardando pagamento') {
            return (
              <FullRequest>
                <FullRequest.Col1>
                  <ImgLittle>
                    <Image
                      src="/images/pet2Little.png"
                      alt=""
                      width="80"
                      height="80"
                    />
                  </ImgLittle>
                  <ImgNormal>
                    <Image src="/images/pet2.jpg" alt="" width="350" height="188" />
                  </ImgNormal>
                </FullRequest.Col1>
                <FullRequest.Col2>
                  <FullRequest.Col2.Row1>{order.product_name}</FullRequest.Col2.Row1>
                  <FullRequest.Col2.Row2>
                    <p>
                      • Valor do pedido R$
                      {order.total_price}
                    </p>
                    <p />
                    <p>
                      {' '}
                      • Data do Pedido:
                      {' '}
                      {dataFormatada(order.created_at)}
                      <p />
                      • Status do Pedido:
                      {' '}
                      {order.status}
                    </p>
                  </FullRequest.Col2.Row2>
                </FullRequest.Col2>
                <FullRequest.Col3>
                  <Submit onClick={() => router.push(`/User/Perfil/MyOrder/${order.order_id}`)}>Detalhes</Submit>
                </FullRequest.Col3>
              </FullRequest>
            );
          } return <div />;
        })}
      </div>
    );
  }
  return (
    <p>Nenhum pedido em andamento</p>
  );
}
