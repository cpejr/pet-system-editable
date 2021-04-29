import React from 'react';
import styled from 'styled-components';
import Upload from './Upload';

const AddProductsContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
margin-bottom:2%;
`;

AddProductsContainer.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:70%;
flex-direction:column;
`;

const DivInput = styled.div`
display:flex;
justify-content:initial;
width:100%;
`;
const AddTitle = styled.h2`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
font-family: Roboto;
`;

const NameProduct = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
margin:0;
font-family: Roboto;
`;
const NameProductInput = styled.input`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
height:40px;
border-radius:5px;
border-color: ${({ theme }) => theme.colors.borderBoxColor};
border-width:1px;
margin-bottom:2%;
margin-top:1%;
font-family: Roboto;
`;

const PriceAndDiscont = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
flex-direction:row;
margin-bottom:2%;

`;
PriceAndDiscont.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:50%;
flex-direction:column;
`;
PriceAndDiscont.Col1.Row1 = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
margin:0;
font-family: Roboto;
`;
PriceAndDiscont.Col1.Row2 = styled.input`
display:flex;
align-items:center;
justify-content:initial;
width:60%;
height:40px;
border-radius:5px;
border-color: ${({ theme }) => theme.colors.borderBoxColor};
border-width:1px;
margin-top:1%;
font-family: Roboto;
`;

PriceAndDiscont.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:50%;
flex-direction:column;
`;

PriceAndDiscont.Col2.Row1 = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
margin:0;
font-family: Roboto;
`;

PriceAndDiscont.Col2.Row2 = styled.input`
display:flex;
align-items:center;
justify-content:initial;
width:60%;
height:40px;
border-radius:5px;
border-color: ${({ theme }) => theme.colors.borderBoxColor};
border-width:1px;
margin-top:1%;
font-family: Roboto;
`;

const DescriptionProduct = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
margin:0;
font-family: Roboto;
`;
const DescriptionInput = styled.input`
display:flex;
align-items:center;
justify-content:center;
width:80%;
height:250px;
border-radius:5px;
border-color: ${({ theme }) => theme.colors.borderBoxColor};
border-width:1px;
margin-top:1%;
font-family: Roboto;
`;

AddProductsContainer.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:30%;
flex-direction:column;
`;

const SelectImage = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family: Roboto;
`;
const ButtonCancel = styled.button`
    display:flex;
    margin-top: 50px;
    height: 55px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.strongRed};
    color: white;
    border: 0;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    margin-top:10%;
    cursor: pointer;
`;
const ButtonConfirm = styled.button`
    display:flex;
    margin-top: 50px;
    height: 55px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    margin-top:10%;
    cursor: pointer;
`;

export default function AddProducts() {
  return (
    <div>
      <AddProductsContainer>
        <AddProductsContainer.Col1>
          <AddTitle>Cadastro de Produto</AddTitle>
          <NameProduct>Nome do Produto:</NameProduct>
          <DivInput>
            <NameProductInput type="text" />
          </DivInput>
          <PriceAndDiscont>
            <PriceAndDiscont.Col1>
              <PriceAndDiscont.Col1.Row1>
                Preço:
              </PriceAndDiscont.Col1.Row1>
              <DivInput>
                <PriceAndDiscont.Col1.Row2 type="text" placeholder="R$ 00,00" />
              </DivInput>
            </PriceAndDiscont.Col1>

            <PriceAndDiscont.Col2>
              <PriceAndDiscont.Col2.Row1>
                Desconto:
              </PriceAndDiscont.Col2.Row1>
              <DivInput>
                <PriceAndDiscont.Col2.Row2 type="text" placeholder="% 00,0" />
              </DivInput>
            </PriceAndDiscont.Col2>

          </PriceAndDiscont>

          <DescriptionProduct>Descrição do Produto:</DescriptionProduct>
          <DivInput>
            <DescriptionInput type="text" />
          </DivInput>
        </AddProductsContainer.Col1>

        <AddProductsContainer.Col2>
          <SelectImage>Selecionar imagem</SelectImage>
          <Upload />
          <ButtonCancel>Cancelar Cadastro</ButtonCancel>
          <ButtonConfirm>Confirmar Cadastro</ButtonConfirm>
        </AddProductsContainer.Col2>
      </AddProductsContainer>

    </div>
  );
}
