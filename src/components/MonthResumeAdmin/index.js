import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:500px;
flex-direction:column;
border-style:solid;
border-width:1px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:860px){
    width:300px;
}
@media(max-width:305px){
  width:275px;
}
`;

Container.Row1 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
font-size:18px;
@media(max-width:860px){
    font-size:14px;
}
`;
Container.Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
border-top-style:solid;
border-bottom-style:solid;
border-width:1px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
`;
Container.Row2.Col1 = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:70%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;
Container.Row2.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:25%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;
Container.Row3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
border-bottom-style:solid;
border-width:1px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
`;
Container.Row3.Col1 = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:70%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;
Container.Row3.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:25%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;

Container.Row4 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
border-bottom-style:solid;
border-width:1px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
`;
Container.Row4.Col1 = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:70%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;
Container.Row4.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:25%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;

Container.Row5 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;
Container.Row5.Col1 = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:70%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;
Container.Row5.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:25%;
font-family:Roboto;
font-size:16px;
@media(max-width:860px){
    font-size:12px;
}
`;

export default function MonthResumeAdmin({ revenue, totalStores, averageShare, profit }) {
  return (
    <div>
      <Container>
        <Container.Row1>Resumo do mês</Container.Row1>
        <Container.Row2>
          <Container.Row2.Col1>Número de lojas associadas:</Container.Row2.Col1>
          <Container.Row2.Col2>{totalStores}</Container.Row2.Col2>
        </Container.Row2>
        <Container.Row3>
          <Container.Row3.Col1>Total de vendas:</Container.Row3.Col1>
          <Container.Row3.Col2>{revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Container.Row3.Col2>
        </Container.Row3>

        <Container.Row4>
          <Container.Row4.Col1>Ganhos com comissão:</Container.Row4.Col1>
          <Container.Row4.Col2>{averageShare.toFixed(2)}%</Container.Row4.Col2>
        </Container.Row4>

        <Container.Row5>
          <Container.Row5.Col1>Faturamento:</Container.Row5.Col1>
          <Container.Row5.Col2>{profit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Container.Row5.Col2>
        </Container.Row5>

      </Container>
    </div>
  );
}
