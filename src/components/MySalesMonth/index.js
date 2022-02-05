import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useAuth } from '../../../src/contexts/AuthContext';


const SalesMonthContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
border:solid;
border-width:1px;
border-radius:5px;
@media(max-width:960px){
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:5%;

}
@media(max-width:560px){
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:5%;

}
`;

SalesMonthContainer.Title = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:100%;
color:${({ theme }) => theme.colors.mediumGreen};

`;
SalesMonthContainer.Description = styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
@media(max-width:560px){
 margin:0;
}
`;
SalesMonthContainer.Description.Col1 = styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:65%;
@media(max-width:560px){
 margin:0;
 line-height:10px;
}
`;
SalesMonthContainer.Description.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
font-weight:bold;
width:35%;
@media(max-width:560px){
 margin:0;
 line-height:10px;

}
`;

toast.configure();

export default function MySalesMonth({ value, totalOrders, revenue, share, storeProfit, amount}) {

  return (
    <div>
      <SalesMonthContainer>
        <SalesMonthContainer.Title>
          Vendas faturadas no mês $
        </SalesMonthContainer.Title>
        <SalesMonthContainer.Description>
          <SalesMonthContainer.Description.Col1>
            <p>Total de vendas no mês:</p>
            <p>
              Itens vendidos:

            </p>
            <p>Comissão:</p>
            <p>Total de ganhos:</p>
            <p>Número de pedidos:</p>
          </SalesMonthContainer.Description.Col1>
          <SalesMonthContainer.Description.Col2>
            <p>{revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            <p>{amount}</p>
            <p>{share.toFixed(2)}%</p>
            <p>{storeProfit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            <p>{totalOrders}</p>
          </SalesMonthContainer.Description.Col2>
        </SalesMonthContainer.Description>
      </SalesMonthContainer>
    </div>
  );
}
