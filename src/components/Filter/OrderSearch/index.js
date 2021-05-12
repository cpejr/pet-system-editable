import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineFire } from 'react-icons/hi';
import { FaTemperatureHigh } from 'react-icons/fa';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:250px;
margin-bottom:10%;
font-family:Roboto;
@media(max-width:560px){
      display:none;
    }
`;
Container.Title = styled.p`
display:flex;
align-items:center;
justify-content:center;
margin:0;
width:100%;
font-size:28px;

`;

const OrderContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;

`;
const OrderContainerRow1 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
`;

OrderContainerRow1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainerRow1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
const OrderContainerRow2 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
`;
OrderContainerRow2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainerRow2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

const OrderContainerRow3 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
`;
OrderContainerRow3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainerRow3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

export default function Order() {
  const [checkedAvaliation, setCheckedAvaliation] = useState('#111111');
  const handleClickAvaliation = () => {
    if (checkedAvaliation === '#111111') {
      setCheckedAvaliation('#609694');
    } else {
      setCheckedAvaliation('#111111');
    }
  };
  const [checkedPopular, setCheckedPopular] = useState('#111111');
  const handleClickPopular = () => {
    if (checkedPopular === '#111111') {
      setCheckedPopular('#609694');
    } else {
      setCheckedPopular('#111111');
    }
  };
  const [checkedVisible, setCheckedVisible] = useState('#111111');
  const handleClickVisible = () => {
    if (checkedVisible === '#111111') {
      setCheckedVisible('#609694');
    } else {
      setCheckedVisible('#111111');
    }
  };
  return (
    <div>

      <Container>
        <Container.Title>Ordenar</Container.Title>
        <OrderContainer>

          <OrderContainerRow1
            onClick={handleClickAvaliation}
            style={{ color: checkedAvaliation }}
          >
            <OrderContainerRow1.Col1>
              <AiOutlineStar />
            </OrderContainerRow1.Col1>
            <OrderContainerRow1.Col2>
              Avaliação
            </OrderContainerRow1.Col2>
          </OrderContainerRow1>

          <OrderContainerRow2
            onClick={handleClickPopular}
            style={{ color: checkedPopular }}
          >
            <OrderContainerRow2.Col1>
              <HiOutlineFire />
            </OrderContainerRow2.Col1>
            <OrderContainerRow2.Col2>
              Mais populares
            </OrderContainerRow2.Col2>
          </OrderContainerRow2>

          <OrderContainerRow3
            onClick={handleClickVisible}
            style={{ color: checkedVisible }}
          >
            <OrderContainerRow3.Col1>
              <FaTemperatureHigh />
            </OrderContainerRow3.Col1>
            <OrderContainerRow3.Col2>
              Mais vistos
            </OrderContainerRow3.Col2>
          </OrderContainerRow3>
        </OrderContainer>
      </Container>
    </div>
  );
}
