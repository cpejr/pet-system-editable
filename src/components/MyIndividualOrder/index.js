import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import api from "../../utils/api";

const ContainerDatas = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;


const Title = styled.h1`
align-items:initial;
display:flex;
margin-left:5%;
margin-top:2%;
margin-bottom:1%;
font-family: Roboto;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:2%;
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
  flex-direction: column;
  width: 65%;
  border-color: black;
  align-items: left;
  line-height: 100%;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  @media (max-width: 976px) {
    width: 100%;
    margin-bottom: 2%;
  }
  @media (max-width: 560px) {
    width: 80%;
    font-size: 87.5%;
  }
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

  if(order){
    return (
      <ContainerDatas>
          <BoxDatas>
          <Title>Seu pedido em: {order.product_name}</Title>
          {order.orderProducts.map((p) => (
              <div>
                 <p>{p.quantify}x {p.product_name} R${valorTotal(p.quantify,p.unit_price)}</p>
            </div>
            ))}
            <p>Entrega em: {address.street} - {address.number} - {address.neighbourhood} - {address.city}/{address.state}</p>
            <p>Taxa de entrega:</p>
            <p>Total: {order.total_price}</p>
            <p>Data do pedido:{dataFormatada(order.created_at)}</p>
            <p>Tipo de pagamento:{order.payment_type}</p>
            <p>Status do pedido:{order.status}</p>
            <p>Colocar previsão de entrega ? </p>
          </BoxDatas>
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
