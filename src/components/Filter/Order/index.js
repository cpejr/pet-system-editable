import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineFire } from 'react-icons/hi';
import { FaTemperatureHigh } from 'react-icons/fa';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:${({ theme }) => theme.colors.mediumGray};
width:200px;
border-radius:5px;
margin-bottom:10%;
`;
Container.Title = styled.h3`
display:flex;
align-items:center;
justify-content:center;
margin:0;
width:100%;
height:40px;
background-color:${({ theme }) => theme.colors.mediumGreen};
border-top-left-radius:5px;
border-top-right-radius:5px;
`;

const OrderContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
`;
OrderContainer.Col1 = styled.div`
display:flex;
align-items:flex-end;
justify-content:center;
flex-direction:column;
width:20%;
margin-right:2%;

`;

OrderContainer.Col2 = styled.p`
display:flex;
justify-content:center;
width:80%;
flex-direction:column;
font-family:Roboto;
margin:0;
`;

export default function Order() {
  return (
    <div>
      <Container>
        <Container.Title>Ordenar</Container.Title>
        <OrderContainer>
          <OrderContainer.Col1>
            <p><AiOutlineStar /></p>
            <p><HiOutlineFire /></p>
            <p><FaTemperatureHigh /></p>
          </OrderContainer.Col1>

          <OrderContainer.Col2>
            <p>Avaliação</p>
            <p>Mais populares</p>
            <p>Mais vistos</p>
          </OrderContainer.Col2>
        </OrderContainer>
      </Container>
    </div>
  );
}
