import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:300px;
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
flex-direction: column;
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

//#609694 ativo
//#c4c4c4 inativo
export default function Price({ setPrice }) {
  const [checkedBorder1, setCheckedBorder1] = useState(false);
  const [checkedBorder2, setCheckedBorder2] = useState(false);
  const [checkedBorder3, setCheckedBorder3] = useState(false);
  const [checkedBorder4, setCheckedBorder4] = useState(false);
  const [localPrice, setLocalPrice] = useState();

  useEffect(()=>{
    setCheckedBorder1(false);
    setCheckedBorder2(false);
    setCheckedBorder3(false);
    setCheckedBorder4(false);
    if(localPrice === 25){
      setCheckedBorder1(true);
    }else if(localPrice === 50){
      setCheckedBorder2(true);
    }else if(localPrice === 100){
      setCheckedBorder3(true);
    }else if(localPrice === 200){
      setCheckedBorder4(true);
    }
    setPrice(localPrice);
  },[localPrice])

  return (
    <div>
      <Container>
        <Container.Title>Faixa de preço</Container.Title>
        <ContainerButtons>
          <ContainerButtons.Col>
            <Button
              onClick={() => checkedBorder1 ? setLocalPrice(null) : setLocalPrice(25)}
              style={checkedBorder1 ? { borderColor: "#609694" } : { borderColor: "#C4C4C4" }}
            >
              $

            </Button>
            R$25,00
          </ContainerButtons.Col>
          <ContainerButtons.Col>
            <Button
              onClick={() => checkedBorder2 ? setLocalPrice(null) : setLocalPrice(50)}
              style={checkedBorder2 ? { borderColor: "#609694" } : { borderColor: "#C4C4C4" }}
            >
              $$

            </Button>
            R$50,00
          </ContainerButtons.Col>
          <ContainerButtons.Col>
            <Button
              onClick={() => checkedBorder3 ? setLocalPrice(null) : setLocalPrice(100)}
              style={checkedBorder3 ? { borderColor: "#609694" } : { borderColor: "#C4C4C4" }}
            >
              $$$

            </Button>
            R$100,00
          </ContainerButtons.Col>
          <ContainerButtons.Col>
            <Button
              onClick={() => checkedBorder4 ? setLocalPrice(null) : setLocalPrice(200)}
              style={checkedBorder4 ? { borderColor: "#609694" } : { borderColor: "#C4C4C4" }}
            >
              $$$$

            </Button>
            R$100,00+
          </ContainerButtons.Col>
        </ContainerButtons>
      </Container>
    </div>
  );
}