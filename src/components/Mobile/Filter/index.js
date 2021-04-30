import React from 'react';
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
    color:${({ theme }) => theme.colors.mediumGreen};
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
    color:${({ theme }) => theme.colors.mediumRed};
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
            <ButtonOrder>Avaliação</ButtonOrder>
            <ButtonOrder>Mais vistos</ButtonOrder>
          </OrderContainer.Col1>
          <OrderContainer.Col2>
            <ButtonOrder>Mais populares</ButtonOrder>
          </OrderContainer.Col2>

        </OrderContainer>
        <SubTitleCategory>
          Categorias
        </SubTitleCategory>
        <CategoryContainer>
          <CategoryContainer.Col1>
            <ButtonCategory>Raçao</ButtonCategory>
            <ButtonCategory>Casinhas</ButtonCategory>
            <ButtonCategory>Shampoo</ButtonCategory>
          </CategoryContainer.Col1>
          <OrderContainer.Col2>
            <ButtonCategory>Brinquedos</ButtonCategory>
            <ButtonCategory>Vasilhas</ButtonCategory>
            <ButtonCategory>Petiscos</ButtonCategory>
          </OrderContainer.Col2>

        </CategoryContainer>
        <ConfirmButton>Confirmar</ConfirmButton>

      </Container>
    </div>
  );
}
