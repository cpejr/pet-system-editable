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
font-family:Roboto;
@media(max-width:560px){
      display:none;
    }
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
color:${({ theme }) => theme.colors.titleGray};
`;

const OrderContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;

`;
OrderContainer.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

OrderContainer.Row1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainer.Row1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
OrderContainer.Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
OrderContainer.Row2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainer.Row2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

OrderContainer.Row3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
cursor: pointer;
`;
OrderContainer.Row3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainer.Row3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

export default function Order() {
  return (
    <div>

      <Container>
        <Container.Title>Ordenar</Container.Title>
        <OrderContainer>

          <OrderContainer.Row1>
            <OrderContainer.Row1.Col1>
              <AiOutlineStar />
            </OrderContainer.Row1.Col1>
            <OrderContainer.Row1.Col2>
              Avaliação
            </OrderContainer.Row1.Col2>
          </OrderContainer.Row1>

          <OrderContainer.Row2>
            <OrderContainer.Row2.Col1>
              <HiOutlineFire />
            </OrderContainer.Row2.Col1>
            <OrderContainer.Row2.Col2>
              Mais populares
            </OrderContainer.Row2.Col2>
          </OrderContainer.Row2>

          <OrderContainer.Row3>
            <OrderContainer.Row3.Col1>
              <FaTemperatureHigh />
            </OrderContainer.Row3.Col1>
            <OrderContainer.Row3.Col2>
              Mais vistos
            </OrderContainer.Row3.Col2>
          </OrderContainer.Row3>
        </OrderContainer>
      </Container>
    </div>
  );
}
