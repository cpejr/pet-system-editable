import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useAuth } from "../../contexts/AuthContext";

const FullRequest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;

FullRequest.Col1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
  width: 30%;
  @media (max-width: 560px) {
    display: flex;
    margin-left: 1%;
    margin-right: 1%;
    width: 20%;
  }
`;
FullRequest.Col2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 560px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
FullRequest.Col2.Row1 = styled.h3`
  display: flex;
  @media (max-width: 560px) {
    font-size: 14px;
    margin: 0;
  }
`;
FullRequest.Col2.Row2 = styled.div`
  margin-bottom: 8%;
  color: #aaabb0;
  @media (max-width: 1000px) {
    margin-bottom: 2%;
    font-size: 13px;
  }

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }
`;
FullRequest.Col2.Row3 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    display: none;
    @media (max-width: 560px) {
      display: none;
    }
  }
`;

const Box = styled.button`
  border-color: black;
  width: 30px;
  height: 30px;
  margin-right: 1%;
  background-color: none;
`;
const Paragraph = styled.p`
  display: flex;
  margin: 0;
  align-items: center;
`;
FullRequest.Col3 = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
  }
`;

const Submit = styled.button`
  height: 40px;
  width: 50%;
  font-family: Roboto;
  font-size: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 80%;
    height: 30px;
    border-radius: 20px;
  }
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 80%;
    height: 30px;
    border-radius: 20px;
  }
`;

const ImgLittle = styled.div`
  display: none;
  @media (max-width: 560px) {
    display: flex;
  }
`;
const ImgNormal = styled.div`
  display: flex;
  @media (max-width: 560px) {
    display: none;
  }
`;

export default function MyListFinalizedOrders() {
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
    var data = new Date(bdate),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = mes.length == 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }
  

async function loadOrder() {
  try {
    await api.get("getOrderAndOrderProducts/" + user.firebase_id).then((res) => {
      setOrders(res.data);
    });
  } catch (error) {
    console.error(error); //eslint-disable-line
  }
}

  useEffect(() => {
    loadOrder();
  }, []);
  

  if(orders){
    return (
      <div>
        {orders.map((order) => {
          if(order.status === 'finalizado'){
            return(
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
                <p1>• Valor do pedido R${order.total_price}</p1>
                <p1> • {dataFormatada(order.created_at)}, {order.status}</p1>
              </FullRequest.Col2.Row2>
              {order.orderProducts.map((orderProduct) =>{
                return(
                <FullRequest.Col2.Row3>
                <Box>{orderProduct.quantify}</Box>
                <Paragraph>{orderProduct.product_name}</Paragraph>
                </FullRequest.Col2.Row3>
                )
              })}
            </FullRequest.Col2>
            <FullRequest.Col3>
              <Submit onClick={() => router.push(`/User/Perfil/MyOrder/${order.order_id}`)}>Ver Pedido</Submit>
            </FullRequest.Col3>
          </FullRequest>
            );   
          }
        })}
      </div>
    );
  }else{
    return(
      <p>Nenhum pedido finalizado</p>
    );
  }
}
