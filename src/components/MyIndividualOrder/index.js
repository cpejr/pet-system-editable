import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import api from "../../utils/api";
import MyProductRequestSmall from '../MyProductRequestSmall';

const ContainerDatas = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 5% 10%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const horizontalLine = styled.div`
  width: 100%;
  border-style: 2px solid gray;
  margin-block-start: 0.3em;
  margin-block-end: 0.5em;  
`;

const SectionText = styled.button`
  font: 1rem Roboto;
  background-color: #f8f8f8;
  color: #609694;
  cursor: pointer;
  border: none;
  font-family: Roboto;
  outline: none;
  height: 90%;
`;

const BoxDatas = styled.div`
  display: flex;
  font: 1.5rem Roboto;
  padding: 4% 4% 0 4%;
  flex-direction: column;
  width: 90%; 
  margin-left: 5%;
  border-color: black;
  align-items: left;
  line-height: 100%;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 5%;
  @media (max-width: 976px) {
    width: 100%;
    margin-bottom: 2%;
  }
  @media (max-width: 560px) {
    width: 80%;
    font-size: 87.5%;
  }
`;

ContainerDatas.Col1 = styled.div`
  width: 100%;
  margin-right: 4%;
`;

ContainerDatas.Col2 = styled.div`
  width: 70%;
  margin-left: 4%;
`;

const Content = styled.div`
  margin-bottom: 4%;
`;

const RowEdit = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  letter-spacing: 30%;
`;
const Icon = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
`;

export default function MyIndividualOrder(req) {
  const [order, setOrder] = useState(req.order);
  const [store, setStore] = useState('');
  const [order_products, setOrderProducts] = useState('');
  const [address, setAddress,] = useState('');
  const [product, setProduct] = useState('');
  
  async function loadAddress() {
    try {
      const response = await api.get('/address/d8acc954-f49e-4d87-ac41-f2e76c690551');
      setAddress(response.data);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }
  
  async function obterDados(){
    try {
      await api.get('order/'+ req.order.order_id).then((res) => {
        setOrder(res.data);
      })
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }
  
  useEffect(() => {
    obterDados();
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
  
  function valorTotal(quantidade,valor_unitario) {
    const valor_total = quantidade*valor_unitario;
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
            <Content>Entrega em: {address.street} - {address.number} - {address.neighbourhood} - {address.city}/{address.state}</Content>
            <Content>Taxa de entrega:</Content>
            <Content>Total: {order.total_price}</Content>
            <Content>Data do pedido:{dataFormatada(order.created_at)}</Content>
            <Content>Tipo de pagamento:{order.payment_type}</Content>
            <Content>Status do pedido:{order.status}</Content>
            <Content>Colocar previsão de entrega ? </Content>
          </BoxDatas>
        </ContainerDatas.Col1>
        <ContainerDatas.Col2>
          <MyProductRequestSmall order={order} />
        </ContainerDatas.Col2>
      </ContainerDatas>
    );
  }else{
    return (
      <ContainerDatas>
          <p>Loading</p>
        </ContainerDatas>
      );
  }
}
