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
    color: white;
    border: solid;
    border-width: 1px;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
    margin-bottom:5%;
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
    color: white;
    border: solid;
    border-width: 1px;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
    margin-bottom:5%;
    font-size:14px;
`;

export default function Filter() {
  const [backgroundAvaliacao, setBackgroundAvaliacao] = useState('#F8F8F8');
  const [fontAvaliacao, setFontAvaliacao] = useState('#609694');

  function changeBackgroundAvaliacao() {
    if (backgroundAvaliacao === '#F8F8F8') {
      setBackgroundAvaliacao('#609694');
      setFontAvaliacao('#F8F8F8');
    } else {
      setBackgroundAvaliacao('#F8F8F8');
      setFontAvaliacao('#609694');
    }
  }

  const [backgroundMaisVistos, setBackgroundMaisVistos] = useState('#F8F8F8');
  const [fontMaisVistos, setFontMaisVistos] = useState('#609694');

  function changeBackgroundMaisVistos() {
    if (backgroundMaisVistos === '#F8F8F8') {
      setBackgroundMaisVistos('#609694');
      setFontMaisVistos('#F8F8F8');
    } else {
      setBackgroundMaisVistos('#F8F8F8');
      setFontMaisVistos('#609694');
    }
  }

  const [backgroundMaisPopulares, setBackgroundMaisPopulares] = useState('#F8F8F8');
  const [fontMaisPopulares, setFontMaisPopulares] = useState('#609694');

  function changeBackgroundMaisPopulares() {
    if (backgroundMaisPopulares === '#F8F8F8') {
      setBackgroundMaisPopulares('#609694');
      setFontMaisPopulares('#F8F8F8');
    } else {
      setBackgroundMaisPopulares('#F8F8F8');
      setFontMaisPopulares('#609694');
    }
  }

  const [backgroundRacao, setBackgroundRacao] = useState('#F8F8F8');
  const [fontRacao, setFontRacao] = useState('#BD2B2B');

  function changeBackgroundRacao() {
    if (backgroundRacao === '#F8F8F8') {
      setBackgroundRacao('#BD2B2B');
      setFontRacao('#F8F8F8');
    } else {
      setBackgroundRacao('#F8F8F8');
      setFontRacao('#BD2B2B');
    }
  }

  const [backgroundBrinquedos, setBackgroundBrinquedos] = useState('#F8F8F8');
  const [fontBrinquedos, setFontBrinquedos] = useState('#BD2B2B');

  function changeBackgroundBrinquedos() {
    if (backgroundBrinquedos === '#F8F8F8') {
      setBackgroundBrinquedos('#BD2B2B');
      setFontBrinquedos('#F8F8F8');
    } else {
      setBackgroundBrinquedos('#F8F8F8');
      setFontBrinquedos('#BD2B2B');
    }
  }

  const [backgroundVasilhas, setBackgroundVasilhas] = useState('#F8F8F8');
  const [fontVasilhas, setFontVasilhas] = useState('#BD2B2B');

  function changeBackgroundVasilhas() {
    if (backgroundVasilhas === '#F8F8F8') {
      setBackgroundVasilhas('#BD2B2B');
      setFontVasilhas('#F8F8F8');
    } else {
      setBackgroundVasilhas('#F8F8F8');
      setFontVasilhas('#BD2B2B');
    }
  }

  const [backgroundCasinhas, setBackgroundCasinhas] = useState('#F8F8F8');
  const [fontCasinhas, setFontCasinhas] = useState('#BD2B2B');

  function changeBackgroundCasinhas() {
    if (backgroundCasinhas === '#F8F8F8') {
      setBackgroundCasinhas('#BD2B2B');
      setFontCasinhas('#F8F8F8');
    } else {
      setBackgroundCasinhas('#F8F8F8');
      setFontCasinhas('#BD2B2B');
    }
  }

  const [backgroundPetiscos, setBackgroundPetiscos] = useState('#F8F8F8');
  const [fontPetiscos, setFontPetiscos] = useState('#BD2B2B');

  function changeBackgroundPetiscos() {
    if (backgroundPetiscos === '#F8F8F8') {
      setBackgroundPetiscos('#BD2B2B');
      setFontPetiscos('#F8F8F8');
    } else {
      setBackgroundPetiscos('#F8F8F8');
      setFontPetiscos('#BD2B2B');
    }
  }

  const [backgroundShampoo, setBackgroundShampoo] = useState('#F8F8F8');
  const [fontShampoo, setFontShampoo] = useState('#BD2B2B');

  function changeBackgroundShampoo() {
    if (backgroundShampoo === '#F8F8F8') {
      setBackgroundShampoo('#BD2B2B');
      setFontShampoo('#F8F8F8');
    } else {
      setBackgroundShampoo('#F8F8F8');
      setFontShampoo('#BD2B2B');
    }
  }
  const [backgroundPerfumes, setBackgroundPerfumes] = useState('#F8F8F8');
  const [fontPerfumes, setFontPerfumes] = useState('#BD2B2B');

  function changeBackgroundPerfumes() {
    if (backgroundPerfumes === '#F8F8F8') {
      setBackgroundPerfumes('#BD2B2B');
      setFontPerfumes('#F8F8F8');
    } else {
      setBackgroundPerfumes('#F8F8F8');
      setFontPerfumes('#BD2B2B');
    }
  }
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
              onClick={changeBackgroundAvaliacao}
              style={{ backgroundColor: backgroundAvaliacao, borderColor: '#609694', color: fontAvaliacao }}
            >
              Avaliação

            </ButtonOrder>
            <ButtonOrder
              onClick={changeBackgroundMaisVistos}
              style={{ backgroundColor: backgroundMaisVistos, borderColor: '#609694', color: fontMaisVistos }}
            >
              Mais vistos
            </ButtonOrder>
          </OrderContainer.Col1>
          <OrderContainer.Col2>
            <ButtonOrder
              onClick={changeBackgroundMaisPopulares}
              style={{ backgroundColor: backgroundMaisPopulares, borderColor: '#609694', color: fontMaisPopulares }}
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
              onClick={changeBackgroundRacao}
              style={{ backgroundColor: backgroundRacao, borderColor: '#BD2B2B', color: fontRacao }}
            >
              Raçao
            </ButtonCategory>
            <ButtonCategory
              onClick={changeBackgroundCasinhas}
              style={{ backgroundColor: backgroundCasinhas, borderColor: '#BD2B2B', color: fontCasinhas }}
            >
              Casinhas
            </ButtonCategory>
            <ButtonCategory
              onClick={changeBackgroundShampoo}
              style={{ backgroundColor: backgroundShampoo, borderColor: '#BD2B2B', color: fontShampoo }}
            >
              Shampoo
            </ButtonCategory>
            <ButtonCategory
              onClick={changeBackgroundPerfumes}
              style={{ backgroundColor: backgroundPerfumes, borderColor: '#BD2B2B', color: fontPerfumes }}
            >
              Perfumes
            </ButtonCategory>
          </CategoryContainer.Col1>
          <OrderContainer.Col2>
            <ButtonCategory
              onClick={changeBackgroundBrinquedos}
              style={{ backgroundColor: backgroundBrinquedos, borderColor: '#BD2B2B', color: fontBrinquedos }}
            >
              Brinquedos
            </ButtonCategory>
            <ButtonCategory
              onClick={changeBackgroundVasilhas}
              style={{ backgroundColor: backgroundVasilhas, borderColor: '#BD2B2B', color: fontVasilhas }}
            >
              Vasilhas
            </ButtonCategory>
            <ButtonCategory
              onClick={changeBackgroundPetiscos}
              style={{ backgroundColor: backgroundPetiscos, borderColor: '#BD2B2B', color: fontPetiscos }}
            >
              Petiscos
            </ButtonCategory>
          </OrderContainer.Col2>

        </CategoryContainer>

      </Container>
    </div>
  );
}
