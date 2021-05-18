import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;
const Title = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:82vw;
height:50px;
flex-direction:row;
background-color: ${({ theme }) => theme.colors.mediumGreen};
margin-top:0;
color:${({ theme }) => theme.colors.titleGray};
position:fixed;
top:0;
`;
Title.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80%;
font-family:Roboto;
font-size:18px;
`;
Title.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
font-family:Roboto;
font-size:14px;
cursor: pointer;
`;

const SubTitle = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
margin-top:20%;
`;
const OrderContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80vw;;
flex-direction:row;
`;
OrderContainer.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:50%;
`;
OrderContainer.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:50%;
`;
const ButtonOrder = styled.button`
    height: 30px;
    width: 90%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    border-color:${({ theme }) => theme.colors.mediumGreen};
    border: 1;
    border-radius: 15px;
    cursor:pointer;
    outline:none;
    margin-bottom:5%;
    color:'#111';
    font-size:14px;
`;
const SubTitleCategory = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
margin-top:10%;
`;

const CategoryContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80vw;
flex-direction:row;
`;
CategoryContainer.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:50%;
`;
CategoryContainer.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:50%;
`;
const ButtonCategory = styled.button`
    height: 30px;
    width: 90%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    border-color:${({ theme }) => theme.colors.strongRed};
    border: 1;
    border-radius: 15px;
    cursor:pointer;
    outline:none;
    margin-bottom:5%;
    color:'#111';
    font-size:14px;
`;

const ConfirmButton = styled.button`
  height: 30px;
    width: 60%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color:${({ theme }) => theme.colors.blueButton};
    border: 1;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
    color:${({ theme }) => theme.colors.titleGray};
    font-size:14px;
    margin-top:5%;
    border:none;


`;

export default function Filter() {
  const [checkedAvaliacao, setCheckedAvaliacao] = useState('#F8F8F8');
  const handleClickAvaliacao = () => {
    if (checkedAvaliacao === '#F8F8F8') {
      setCheckedAvaliacao('#609694');
    } else {
      setCheckedAvaliacao('#F8F8F8');
    }
  };

  const [checkedMaisVistos, setCheckedMaisVistos] = useState('#F8F8F8');
  const handleClickMaisVistos = () => {
    if (checkedMaisVistos === '#F8F8F8') {
      setCheckedMaisVistos('#609694');
    } else {
      setCheckedMaisVistos('#F8F8F8');
    }
  };

  const [checkedMaisPopulares, setCheckedMaisPopulares] = useState('#F8F8F8');
  const handleClickMaisPopulares = () => {
    if (checkedMaisPopulares === '#F8F8F8') {
      setCheckedMaisPopulares('#609694');
    } else {
      setCheckedMaisPopulares('#F8F8F8');
    }
  };

  const [checkedRacao, setCheckedRacao] = useState('#F8F8F8');
  const handleClickRacao = () => {
    if (checkedRacao === '#F8F8F8') {
      setCheckedRacao('#BD2B2B');
    } else {
      setCheckedRacao('#F8F8F8');
    }
  };

  const [checkedBrinquedos, setCheckedBrinquedos] = useState('#F8F8F8');
  const handleClickBrinquedos = () => {
    if (checkedBrinquedos === '#F8F8F8') {
      setCheckedBrinquedos('#BD2B2B');
    } else {
      setCheckedBrinquedos('#F8F8F8');
    }
  };

  const [checkedVasilhas, setCheckedVasilhas] = useState('#F8F8F8');
  const handleClickVasilhas = () => {
    if (checkedVasilhas === '#F8F8F8') {
      setCheckedVasilhas('#BD2B2B');
    } else {
      setCheckedVasilhas('#F8F8F8');
    }
  };

  const [checkedCasinhas, setCheckedCasinhas] = useState('#F8F8F8');
  const handleClickCasinhas = () => {
    if (checkedCasinhas === '#F8F8F8') {
      setCheckedCasinhas('#BD2B2B');
    } else {
      setCheckedCasinhas('#F8F8F8');
    }
  };

  const [checkedPetiscos, setCheckedPetiscos] = useState('#F8F8F8');
  const handleClickPetiscos = () => {
    if (checkedPetiscos === '#F8F8F8') {
      setCheckedPetiscos('#BD2B2B');
    } else {
      setCheckedPetiscos('#F8F8F8');
    }
  };

  const [checkedShampoo, setCheckedShampoo] = useState('#F8F8F8');
  const handleClickShampoo = () => {
    if (checkedShampoo === '#F8F8F8') {
      setCheckedShampoo('#BD2B2B');
    } else {
      setCheckedShampoo('#F8F8F8');
    }
  };

  const [checkedPerfumes, setCheckedPerfumes] = useState('#F8F8F8');
  const handleClickPerfumes = () => {
    if (checkedPerfumes === '#F8F8F8') {
      setCheckedPerfumes('#BD2B2B');
    } else {
      setCheckedPerfumes('#F8F8F8');
    }
  };
  return (
    <div>
      <Container>
        <Title>
          <Title.Col1>
            Filtros
          </Title.Col1>
          <Title.Col2>
            Limpar
          </Title.Col2>
        </Title>
        <SubTitle>
          Ordenar
        </SubTitle>
        <OrderContainer>
          <OrderContainer.Col1>
            <ButtonOrder
              onClick={handleClickAvaliacao}
              style={{ backgroundColor: checkedAvaliacao }}
            >
              Avaliação

            </ButtonOrder>
            <ButtonOrder
              onClick={handleClickMaisVistos}
              style={{ backgroundColor: checkedMaisVistos }}
            >
              Mais vistos
            </ButtonOrder>
          </OrderContainer.Col1>
          <OrderContainer.Col2>
            <ButtonOrder
              onClick={handleClickMaisPopulares}
              style={{ backgroundColor: checkedMaisPopulares }}
            >
              Mais populares
            </ButtonOrder>
          </OrderContainer.Col2>

        </OrderContainer>
        <SubTitleCategory>
          Categorias
        </SubTitleCategory>
        <CategoryContainer>
          <CategoryContainer.Col1>
            <ButtonCategory
              onClick={handleClickRacao}
              style={{ backgroundColor: checkedRacao }}
            >
              Raçao
            </ButtonCategory>
            <ButtonCategory
              onClick={handleClickCasinhas}
              style={{ backgroundColor: checkedCasinhas }}
            >
              Casinhas
            </ButtonCategory>
            <ButtonCategory
              onClick={handleClickShampoo}
              style={{ backgroundColor: checkedShampoo }}
            >
              Shampoo
            </ButtonCategory>
            <ButtonCategory
              onClick={handleClickPerfumes}
              style={{ backgroundColor: checkedPerfumes }}
            >
              Perfumes
            </ButtonCategory>
          </CategoryContainer.Col1>
          <OrderContainer.Col2>
            <ButtonCategory
              onClick={handleClickBrinquedos}
              style={{ backgroundColor: checkedBrinquedos }}
            >
              Brinquedos
            </ButtonCategory>
            <ButtonCategory
              onClick={handleClickVasilhas}
              style={{ backgroundColor: checkedVasilhas }}
            >
              Vasilhas
            </ButtonCategory>
            <ButtonCategory
              onClick={handleClickPetiscos}
              style={{ backgroundColor: checkedPetiscos }}
            >
              Petiscos
            </ButtonCategory>
          </OrderContainer.Col2>

        </CategoryContainer>
        <ConfirmButton>Confirmar</ConfirmButton>

      </Container>
    </div>
  );
}
