import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
i

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

export default function MySalesMonth() {
  const [revenue, setRevenue] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [share, setShare] = useState(0);
  const [storeProfit, setStoreProfit] = useState(0);
  const [value, setValue] = useState(new Date());

  async function getSalesInfo() {
    try{
      const response = await api.get('/sales', {
      params: {
        month: moment(value).format('M'),
        year: moment(value).format('Y'),
      },
    })
      setRevenue(response.data.revenue.sum);
      setShare(response.data.share);
      setQuantity(response.data.quantity);
      setStoreProfit(response.data.store_profit);
    } catch (error) {
      toast('Erro ao obter dados sobre as vendas.', { position: toast.POSITION.BOTTOM_RIGHT });
    } 
  }

  useEffect(() => {
    getSalesInfo;
  }, [value]);
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
          </SalesMonthContainer.Description.Col1>
          <SalesMonthContainer.Description.Col2>
            <p>{revenue}</p>
            <p>{quantity}</p>
            <p>{share}%</p>
            <p>{storeProfit}</p>
          </SalesMonthContainer.Description.Col2>
        </SalesMonthContainer.Description>
      </SalesMonthContainer>
    </div>
  );
}
