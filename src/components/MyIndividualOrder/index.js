import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../utils/api';
import MyOrder from '../MyOrder';

const ContainerDatas = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 5% 10%;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const BoxDatas = styled.div`
  display: flex;
  font: 1.5rem Roboto;
  font-weight: 300;
  padding: 4% 4% 0 4%;
  flex-direction: column;
  width: 90%; 
  margin-left: 5%;
  margin-bottom: 2%;
  margin-top: 2%;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  align-items: left;
  line-height: 100%;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  @media (max-width: 800px) {
    display:flex;
    justify-content: center;
    width:60vw;
    font-size: 100%;
    margin-right: 0;
    margin-left: 0;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

ContainerDatas.Col1 = styled.div`
  width: 50%;
  margin-right: 4%;
  @media (max-width: 800px) {
    display:flex;
    justify-content: center;
    margin-right: 0;
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

ContainerDatas.Col2 = styled.div`
  width: 50%;
  margin-left: 4%;
  @media (max-width: 800px) {
    display:flex;
    justify-content: center;
    margin-left: 0;
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Content = styled.div`
  margin-bottom: 4%;
`;

export default function MyIndividualOrder({ order }) {
  const [address, setAddress] = useState('');

  async function loadAddress() {
    try {
      const response = await api.get('/address/d8acc954-f49e-4d87-ac41-f2e76c690551');
      setAddress(response.data);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  // async function obterDados() {
  //   try {
  //     await api.get('order/'+ req.order.order_id).then((res) => {
  //       setOrder(res.data);
  //     });
  //   } catch (error) {
  //     console.error(error); //eslint-disable-line
  //   }
  // }

  useEffect(() => {
    // obterDados();
    loadAddress();
  }, []);

  function dataFormatada(bdate) {
    var data = new Date(bdate),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = mes.length == 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  function valorTotal(quantidade, valor_unitario) {
    const valor_total = quantidade * valor_unitario;
    return valor_total;
  }

  if (order) {
    return (
      <ContainerDatas>
        <ContainerDatas.Col1>
          <BoxDatas>
            {order?.cart_product?.map((p) => (
              <div>
                <Content>
                  {p.amount}
                  x
                  {p.product_name}
                  R$
                  {valorTotal(p.amount, p.final_price)}
                </Content>
              </div>
            ))}
            <Content>
              Entrega em:
              {address.street}
              -
              {address.number}
              -
              {address.neighbourhood}
              -
              {address.city}
              /
              {address.state}
            </Content>
            <Content>Taxa de entrega:</Content>
            <Content>
              Total:
              {order.total_price}
            </Content>
            <Content>
              Data do pedido:
              {dataFormatada(order.created_at)}
            </Content>
            <Content>
              Tipo de pagamento:
              {order.payment_type}
            </Content>
            <Content>
              Status do pedido:
              {order.status}
            </Content>
            <Content>Colocar previsão de entrega ? </Content>
          </BoxDatas>
        </ContainerDatas.Col1>
        <ContainerDatas.Col2>
          <MyOrder order={order.cart_product} />
        </ContainerDatas.Col2>
      </ContainerDatas>
    );
  }
  return (
    <ContainerDatas>
      <p>Loading</p>
    </ContainerDatas>
  );
}
