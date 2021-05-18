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
width:100%;
margin-bottom:10%;
font-family:Roboto;
`;
Container.Title = styled.p`
display:flex;
align-items:center;
justify-content:center;
margin:0;
width:100%;
font-size:28px;

`;
// Ordenar
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

// Marcas

const CategoryContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;
CategoryContainer.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row4 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row4.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row4.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row5 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row5.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row5.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row6 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row6.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row6.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row7 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
cursor: pointer;
`;

CategoryContainer.Row7.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row7.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

// Preços

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
margin-bottom:5%;
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
font-size:11px;
background-color:${({ theme }) => theme.colors.background};
border:none;
cursor:pointer;
`;
const Submit = styled.button`
height: 40px;
width: 50%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color: white;
border: 0;
border-radius: 5px;
cursor:pointer;
outline:none;

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
  const [checkedPedigree, setCheckedPedigree] = useState(false);
  const handleClickPedigree = () => setCheckedPedigree(!checkedPedigree);

  const [checkedQuatree, setCheckedQuatree] = useState(false);
  const handleClickQuatree = () => setCheckedQuatree(!checkedQuatree);

  const [checkedPremier, setCheckedPremier] = useState(false);
  const handleClickPremier = () => setCheckedPremier(!checkedPremier);

  const [checkedMarca4, setCheckedMarca4] = useState(false);
  const handleClickMarca4 = () => setCheckedMarca4(!checkedMarca4);

  const [checkedMarca5, setCheckedMarca5] = useState(false);
  const handleClickMarca5 = () => setCheckedMarca5(!checkedMarca5);

  const [checkedMarca6, setCheckedMarca6] = useState(false);
  const handleClickMarca6 = () => setCheckedMarca6(!checkedMarca6);

  const [checkedMarca7, setCheckedMarca7] = useState(false);
  const handleClickMarca7 = () => setCheckedMarca7(!checkedMarca7);

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
        <Container.Title>Marcas</Container.Title>
        <CategoryContainer>

          <CategoryContainer.Row1>
            <CategoryContainer.Row1.Col1>
              <input onClick={handleClickPedigree} checked={checkedPedigree} type="radio" />
            </CategoryContainer.Row1.Col1>
            <CategoryContainer.Row1.Col2>
              Pedrigree
            </CategoryContainer.Row1.Col2>
          </CategoryContainer.Row1>

          <CategoryContainer.Row2>
            <CategoryContainer.Row2.Col1>
              <input onClick={handleClickQuatree} checked={checkedQuatree} type="radio" />
            </CategoryContainer.Row2.Col1>
            <CategoryContainer.Row2.Col2>
              Quatree
            </CategoryContainer.Row2.Col2>
          </CategoryContainer.Row2>

          <CategoryContainer.Row3>
            <CategoryContainer.Row3.Col1>
              <input onClick={handleClickPremier} checked={checkedPremier} type="radio" />
            </CategoryContainer.Row3.Col1>
            <CategoryContainer.Row3.Col2>
              Premier
            </CategoryContainer.Row3.Col2>
          </CategoryContainer.Row3>

          <CategoryContainer.Row4>
            <CategoryContainer.Row4.Col1>
              <input onClick={handleClickMarca4} checked={checkedMarca4} type="radio" />
            </CategoryContainer.Row4.Col1>
            <CategoryContainer.Row4.Col2>
              Marca4
            </CategoryContainer.Row4.Col2>
          </CategoryContainer.Row4>

          <CategoryContainer.Row5>
            <CategoryContainer.Row5.Col1>
              <input onClick={handleClickMarca5} checked={checkedMarca5} type="radio" />
            </CategoryContainer.Row5.Col1>
            <CategoryContainer.Row5.Col2>
              Marca5
            </CategoryContainer.Row5.Col2>
          </CategoryContainer.Row5>

          <CategoryContainer.Row6>
            <CategoryContainer.Row6.Col1>
              <input onClick={handleClickMarca6} checked={checkedMarca6} type="radio" />
            </CategoryContainer.Row6.Col1>
            <CategoryContainer.Row6.Col2>
              Marca6
            </CategoryContainer.Row6.Col2>
          </CategoryContainer.Row6>

          <CategoryContainer.Row7>
            <CategoryContainer.Row7.Col1>
              <input onClick={handleClickMarca7} checked={checkedMarca7} type="radio" />
            </CategoryContainer.Row7.Col1>
            <CategoryContainer.Row7.Col2>
              Marca7
            </CategoryContainer.Row7.Col2>
          </CategoryContainer.Row7>

        </CategoryContainer>
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
        <Submit>Aplicar</Submit>

      </Container>
    </div>
  );
}
