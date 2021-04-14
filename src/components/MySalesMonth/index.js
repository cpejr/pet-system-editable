import React from 'react';
import styled from 'styled-components';

const SalesMonthContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
border:solid;
border-width:1px;
border-radius:5px;
`;

SalesMonthContainer.Title = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;
SalesMonthContainer.Description = styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
`;
SalesMonthContainer.Description.Col1 = styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:65%;
`;
SalesMonthContainer.Description.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
font-weight:bold;
width:35%;
`;

export default function MySalesMonth() {
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
            <p>R$ 187,00</p>
            <p>2</p>
            <p>10%</p>
            <p>R$ 168,30</p>
          </SalesMonthContainer.Description.Col2>
        </SalesMonthContainer.Description>
      </SalesMonthContainer>
    </div>
  );
}
