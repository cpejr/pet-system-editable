/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { notification } from 'antd';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Select } from '@material-ui/core';
import 'antd/dist/antd.css';
import moneyMask from '../moneyMask/moneyMask';
import percentageMask from '../percentageMask/percentageMask';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

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

const SubTitleProduct = styled.p`
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
height:200px;
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
  height: 55px;
  width: 200px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.strongRed};
  color: white;
  border: 0;
  border-radius: 5px;
  transform: translate(0%, -50%);
  margin-top: 15%;
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

const Img = styled.img` 
  display:flex;
align-items:center;
justify-content:center;
  width: 200px;
  height: 200px;
  margin-bottom:5%;
  margin-top:5%;
  `;
const UploadContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const ImageSelected = styled.input`
`;

const Label = styled.label`
background-color:  ${({ theme }) => theme.colors.mediumGreen};;
color: white;
padding: 0.5rem;
font-family: sans-serif;
border-radius: 0.3rem;
cursor: pointer;
margin-top: 1rem;
`;

export default function AddProducts({
  closeModal, categories, att, setAtt,
}) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState({ file: null, url: null }); /* Caminho da imagem no lugar de null */
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState();

  function handleChange(event) {
    setPhoto({
      file: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    });
  }

  function handleProductNameChange(event) {
    setProductName(event.target.value);
  }
  function handlePriceChange(event) {
    setPrice(moneyMask(event.target.value));
  }
  function handleDiscountChange(event) {
    setDiscount(percentageMask(event.target.value));
    console.log("🚀 ~ file: index.js ~ line 294 ~ handleDiscountChange ~ event.target.value", event.target.value)
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  async function handleSubmit() {
    const formData = new FormData();

    formData.append('category_id', categoryId);
    formData.append('product_name', productName);
    formData.append('price', price.replace('R$ ', ''));
    formData.append('discount', discount);
    formData.append('description', description);
    formData.append('available', 1);
    if (photo.file) {
      formData.append('img', photo.file);
    }

    try {
      await api.post('/api/product', formData);
      setAtt(!att);
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
      closeModal();
    } catch (error) {
      console.error(error);
      notification.open({
        message: 'Erro!',
        description:
          'Erro ao cadastrar o produto',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }
  return (
    <div>
      <AddProductsContainer>
        <AddProductsContainer.Col1>
          <AddTitle>Cadastro de Produto</AddTitle>
          <SubTitleProduct>Nome do Produto:</SubTitleProduct>
          <DivInput>
            <NameProductInput
              type="text"
              required
              value={productName}
              onChange={handleProductNameChange}
            />
          </DivInput>
          <SubTitleProduct>Categoria:</SubTitleProduct>
          <DivInput>
            <Select
              labelId="label"
              id="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              input={<OutlinedInput />}
              style={{ width: '80%', height: '40px' }}
            >
              {categories?.map((category) => (
                <MenuItem
                  key={category.category_id}
                  value={category.name}
                  onClick={() => setCategoryId(category.category_id)}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </DivInput>
          <PriceAndDiscont>
            <PriceAndDiscont.Col1>
              <PriceAndDiscont.Col1.Row1>
                Preço:
              </PriceAndDiscont.Col1.Row1>
              <DivInput>
                <PriceAndDiscont.Col1.Row2
                  placeholder="R$ 000.00"
                  required
                  value={price}
                  onChange={handlePriceChange}
                  decimalSeparator="."
                  thousandsSeparator=","
                />
              </DivInput>
            </PriceAndDiscont.Col1>

            <PriceAndDiscont.Col2>
              <PriceAndDiscont.Col2.Row1>
                Desconto:
              </PriceAndDiscont.Col2.Row1>
              <DivInput>
                <PriceAndDiscont.Col2.Row2
                  placeholder="% 00.00"
                  value={discount}
                  onChange={handleDiscountChange}
                  decimalSeparator="."
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
          <UploadContainer>
            <ImageSelected type="file" id="upload" hidden onChange={handleChange} />
            <Label for="upload">Escolha a imagem</Label>
            <Img alt="" src={photo.url} />
          </UploadContainer>
          <ButtonCancel onClick={(e) => { e.preventDefault(); closeModal(); }}>
            Cancelar Cadastro
          </ButtonCancel>
          <ButtonConfirm onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          >
            Confirmar Cadastro
          </ButtonConfirm>
        </AddProductsContainer.Col2>
      </AddProductsContainer>

    </div>
  );
}
