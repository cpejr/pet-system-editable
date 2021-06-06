import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:250px;
font-family:Roboto;
margin-bottom:10%;
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

const ContainerButtons = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
`;

ContainerButtons.Col = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:25%;
`;

const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:40px;
height:40px;
background-color:${({ theme }) => theme.colors.mediumGray};
cursor:pointer;
`;

const PriceDelivery = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
`;

PriceDelivery.Title = styled.h5`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;
PriceDelivery.Prices = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
`;
const PriceDeliveryButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:25%;
font-size:12px;
background-color:${({ theme }) => theme.colors.background};
border:none;
cursor:pointer;
`;

export default function Price() {
  const [checkedPrice1, setCheckedPrice1] = useState('#111111');
  const handleClickPrice1 = () => {
    if (checkedPrice1 === '#111111') {
      setCheckedPrice1('#609694');
    } else {
      setCheckedPrice1('#111111');
    }
  };
  const [checkedPrice2, setCheckedPrice2] = useState('#111111');
  const handleClickPrice2 = () => {
    if (checkedPrice2 === '#111111') {
      setCheckedPrice2('#609694');
    } else {
      setCheckedPrice2('#111111');
    }
  };
  const [checkedPrice3, setCheckedPrice3] = useState('#111111');
  const handleClickPrice3 = () => {
    if (checkedPrice3 === '#111111') {
      setCheckedPrice3('#609694');
    } else {
      setCheckedPrice3('#111111');
    }
  };
  const [checkedPrice4, setCheckedPrice4] = useState('#111111');
  const handleClickPrice4 = () => {
    if (checkedPrice4 === '#111111') {
      setCheckedPrice4('#609694');
    } else {
      setCheckedPrice4('#111111');
    }
  };

  const [checkedBorder1, setCheckedBorder1] = useState('#C4C4C4');
  const handleClickBorder1 = () => {
    if (checkedBorder1 === '#C4C4C4') {
      setCheckedBorder1('#609694');
    } else {
      setCheckedBorder1('#C4C4C4');
    }
  };
  const [checkedBorder2, setCheckedBorder2] = useState('#C4C4C4');
  const handleClickBorder2 = () => {
    if (checkedBorder2 === '#C4C4C4') {
      setCheckedBorder2('#609694');
    } else {
      setCheckedBorder2('#C4C4C4');
    }
  };
  const [checkedBorder3, setCheckedBorder3] = useState('#C4C4C4');
  const handleClickBorder3 = () => {
    if (checkedBorder3 === '#C4C4C4') {
      setCheckedBorder3('#609694');
    } else {
      setCheckedBorder3('#C4C4C4');
    }
  };
  const [checkedBorder4, setCheckedBorder4] = useState('#C4C4C4');
  const handleClickBorder4 = () => {
    if (checkedBorder4 === '#C4C4C4') {
      setCheckedBorder4('#609694');
    } else {
      setCheckedBorder4('#C4C4C4');
    }
  };

  return (
    <div>
      <Container>
        <Container.Title>Faixa de preço</Container.Title>
        <ContainerButtons>
          <ContainerButtons.Col>
            <Button
              onClick={handleClickBorder1}
              style={{ borderColor: checkedBorder1 }}
            >
              $

            </Button>
          </ContainerButtons.Col>
          <ContainerButtons.Col>
            <Button
              onClick={handleClickBorder2}
              style={{ borderColor: checkedBorder2 }}
            >
              $$

            </Button>
          </ContainerButtons.Col>
          <ContainerButtons.Col>
            <Button
              onClick={handleClickBorder3}
              style={{ borderColor: checkedBorder3 }}
            >
              $$$

            </Button>
          </ContainerButtons.Col>
          <ContainerButtons.Col>
            <Button
              onClick={handleClickBorder4}
              style={{ borderColor: checkedBorder4 }}
            >
              $$$$

            </Button>
          </ContainerButtons.Col>
        </ContainerButtons>
        <PriceDelivery>
          <PriceDelivery.Title>Preço máximo de entrega</PriceDelivery.Title>
          <PriceDelivery.Prices>
            <PriceDeliveryButton
              onClick={handleClickPrice1}
              style={{ color: checkedPrice1 }}
            >
              R$ 2,99
            </PriceDeliveryButton>
            <PriceDeliveryButton
              onClick={handleClickPrice2}
              style={{ color: checkedPrice2 }}
            >
              R$ 3,99
            </PriceDeliveryButton>
            <PriceDeliveryButton
              onClick={handleClickPrice3}
              style={{ color: checkedPrice3 }}
            >
              R$ 4,99
            </PriceDeliveryButton>
            <PriceDeliveryButton
              onClick={handleClickPrice4}
              style={{ color: checkedPrice4 }}
            >
              R$ 6,99+
            </PriceDeliveryButton>
          </PriceDelivery.Prices>
        </PriceDelivery>
      </Container>
    </div>
  );
}
