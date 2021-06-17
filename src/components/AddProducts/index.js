import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import timestamp from 'time-stamp';
import { notification } from 'antd';
import Upload from './Upload';
import 'antd/dist/antd.css';

const api = axios.create({ baseURL: 'http://localhost:3000/' });
const { v4: uuidv4 } = require('uuid');

const AddProductsContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
margin-bottom:2%;
@media(max-width:1190px){
  flex-direction:column;
  overflow:auto;
}
`;

AddProductsContainer.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:70%;
flex-direction:column;
@media(max-width:1190px){
  width:100%;
}
`;

const DivInput = styled.div`
display:flex;
justify-content:initial;
width:100%;
@media(max-width:1190px){
  justify-content:center;
}
`;
const AddTitle = styled.h2`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
font-family: Roboto;
@media(max-width:1190px){
  justify-content:center;
}
`;

const NameProduct = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:100%;
margin:0;
font-family: Roboto;
@media(max-width:1190px){
  justify-content:center;
}
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
@media(max-width:1190px){
  justify-content:center;
}
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
@media(max-width:1190px){
  justify-content:center;
}
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
@media(max-width:1190px){
  justify-content:center;
}
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
@media(max-width:1190px){
  width:100%;
  justify-content:center;
}
`;

const SelectImage = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family: Roboto;
margin: 0;
@media(max-width:1190px){
  justify-content:center;
}
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

export default function AddProducts({ closeModal }) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');

  function handleProductNameChange(event) {
    setProductName(event.target.value);
  }
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  function handleDiscountChange(event) {
    setDiscount(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  async function handleSubmit() {
    const body = {
      product_id: uuidv4(),
      store_id: '6',
      product_name: productName,
      price,
      discount,
      description,
      img: 'djdiss',
      created_at: timestamp(),

    };
    try {
      console.log(body);
      const Validate = await api.post('/api/product', body);
      console.log(Validate.data);
      notification.open({
        message: 'Sucesso!',
        description:
          'O registro do produto foi concluído com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <AddProductsContainer>
        <AddProductsContainer.Col1>
          <AddTitle>Cadastro de Produto</AddTitle>
          <NameProduct>Nome do Produto:</NameProduct>
          <DivInput>
            <NameProductInput
              type="text"
              required
              value={productName}
              onChange={handleProductNameChange}
            />
          </DivInput>
          <PriceAndDiscont>
            <PriceAndDiscont.Col1>
              <PriceAndDiscont.Col1.Row1>
                Preço:
              </PriceAndDiscont.Col1.Row1>
              <DivInput>
                <PriceAndDiscont.Col1.Row2
                  type="text"
                  placeholder="R$ 00,00"
                  required
                  value={price}
                  onChange={handlePriceChange}
                />
              </DivInput>
            </PriceAndDiscont.Col1>

            <PriceAndDiscont.Col2>
              <PriceAndDiscont.Col2.Row1>
                Desconto:
              </PriceAndDiscont.Col2.Row1>
              <DivInput>
                <PriceAndDiscont.Col2.Row2
                  type="text"
                  placeholder="% 00,0"
                  required
                  value={discount}
                  onChange={handleDiscountChange}
                />
              </DivInput>
            </PriceAndDiscont.Col2>

          </PriceAndDiscont>

          <DescriptionProduct>Descrição do Produto:</DescriptionProduct>
          <DivInput>
            <DescriptionInput
              type="text"
              as="textarea"
              required
              value={description}
              onChange={handleDescriptionChange}
            />
          </DivInput>
        </AddProductsContainer.Col1>

        <AddProductsContainer.Col2>
          <SelectImage>Selecionar imagem</SelectImage>
          <Upload />
          <ButtonCancel onClick={(e) => { e.preventDefault(); closeModal(); }}>
            Cancelar Cadastro
          </ButtonCancel>
          <ButtonConfirm onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            closeModal();
          }}
          >
            Confirmar Cadastro
          </ButtonConfirm>
        </AddProductsContainer.Col2>
      </AddProductsContainer>

    </div>
  );
}
