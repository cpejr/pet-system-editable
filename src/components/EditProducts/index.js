import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { notification } from 'antd';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Select } from '@material-ui/core';
import 'antd/dist/antd.css';
import InputMask from 'react-input-mask';
import CurrencyFormat from 'react-currency-format';
import api from '../../utils/api';
import { CategoryContainer } from './styles';

const EditProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2%;
  @media (max-width: 1190px) {
    flex-direction: column;
    overflow: auto;
  }
`;

EditProductsContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  flex-direction: column;
  @media (max-width: 1190px) {
    width: 100%;
  }
`;

const DivInput = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
const EditTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;

const NameProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
const NameProductInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-bottom: 2%;
  margin-top: 1%;
  font-family: Roboto;
`;

const CategoryProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
const PriceAndDiscont = styled.div`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2%;
`;
PriceAndDiscont.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;
PriceAndDiscont.Col1.Row1 = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
PriceAndDiscont.Col1.Row2 = styled(CurrencyFormat)`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 60%;
  height: 40px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-top: 1%;
  font-family: Roboto;
`;

PriceAndDiscont.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;

PriceAndDiscont.Col2.Row1 = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;

PriceAndDiscont.Col2.Row2 = styled.input`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 60%;
  height: 40px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-top: 1%;
  font-family: Roboto;
`;

const DescriptionProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
const DescriptionInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 250px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-top: 1%;
  font-family: Roboto;
`;

EditProductsContainer.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  flex-direction: column;
  @media (max-width: 1190px) {
    width: 100%;
    justify-content: center;
  }
`;

const SelectImage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Roboto;
  margin: 0;
  @media (max-width: 1190px) {
    justify-content: center;
    margin-top: 5%;
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
  display: flex;
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
  transform: translate(0%, -50%);
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  cursor: pointer;
`;

const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 5%;
  margin-top: 5%;
`;
const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageSelected = styled.input``;

const Label = styled.label`
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
`;

export default function EditProducts({
  closeModal,
  product,
  categories,
  att,
  setAtt,
}) {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState([]);
  const [productName, setProductName] = useState(product.product_name);
  const [price, setPrice] = useState(product.price);
  const [discount, setDiscount] = useState(product.discount);
  const [description, setDescription] = useState(product.description);
  const [photo, setPhoto] = useState({
    file: null,
    url: null,
  }); /* Caminho da imagem no lugar de null */
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    api.get('group').then((res) => {
      setGroups(res.data);
    });
    const FilteredCategory = categories.filter(
      (category) => category.category_id === product.category_id,
    );
    setType(FilteredCategory[0].name);
    setCategoryId(FilteredCategory[0].category_id);
  }, []);

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
    setPrice(event.target.value);
  }
  function handleDiscountChange(event) {
    setDiscount(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleSelect(group_id, aux, e) {
    if (e.target.checked) {
      aux.push(group_id);
      console.log(selected);
      console.log(e.target.checked);
      setSelected(aux);
    } else {
      aux = aux.filter(((item) => (item !== group_id)));
      setSelected(aux);
      console.log('aux', aux);
      // for (let i = 0; i < selected.length; i++) {
      //   if (selected[i] === group_id) {
      //     selected.splice(i, 1);
      //     console.log(selected);
      //   }
      // }
    }
  }
  console.log('out selected', selected);
  async function handleSubmit() {
    const formData = new FormData();

    formData.append('category_id', categoryId);
    formData.append('product_name', productName);
    formData.append('price', price);
    formData.append('discount', discount);
    formData.append('description', description);
    if (photo.file) {
      formData.append('img', photo.file);
    }

    try {
      await api.put(
        `/product/${product.product_id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setAtt(!att);
      notification.open({
        message: 'Sucesso!',
        description: 'A edição do produto foi concluída com sucesso.',
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
      <EditProductsContainer>
        <EditProductsContainer.Col1>
          <EditTitle>Edição de Produto</EditTitle>
          <NameProduct>Nome do Produto:</NameProduct>
          <DivInput>
            <NameProductInput
              type="text"
              required
              value={productName}
              onChange={handleProductNameChange}
            />
          </DivInput>

          <CategoryProduct>Categoria do Produto:</CategoryProduct>
          <DivInput>
            <Select
              labelId="label"
              id="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              input={<OutlinedInput />}
              style={{ width: '80%', height: '40px' }}
            >
              {categories.map((category) => (
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
              <PriceAndDiscont.Col1.Row1>Preço:</PriceAndDiscont.Col1.Row1>
              <DivInput>
                <PriceAndDiscont.Col1.Row2
                  placeholder="R$ 00,000"
                  required
                  value={price}
                  onChange={handlePriceChange}
                  decimalSeparator="."
                />
              </DivInput>
            </PriceAndDiscont.Col1>

            <PriceAndDiscont.Col2>
              <PriceAndDiscont.Col2.Row1>Desconto:</PriceAndDiscont.Col2.Row1>
              <DivInput>
                <PriceAndDiscont.Col2.Row2
                  as={InputMask}
                  placeholder="% 00.00"
                  mask="99.99"
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
          <DescriptionProduct>Grupos do produto:</DescriptionProduct>
          {groups?.length > 0
        && groups.map((group) => (
          <DivInput>
            <CategoryContainer.Row2.Col1>
              <input
                onClick={(e) => handleSelect(group.group_id, selected, e)}
                type="checkbox"
              />
            </CategoryContainer.Row2.Col1>
            <CategoryContainer.Row2.Col2>
              {group.name}
            </CategoryContainer.Row2.Col2>
          </DivInput>
        ))}
        </EditProductsContainer.Col1>

        <EditProductsContainer.Col2>
          <SelectImage>Selecionar imagem</SelectImage>
          <UploadContainer>
            <ImageSelected
              type="file"
              id="upload"
              hidden
              onChange={handleChange}
            />
            <Label for="upload">Escolha a imagem</Label>
            <Img alt="" src={photo.url} />
          </UploadContainer>
          <ButtonCancel
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
          >
            Cancelar Edição
          </ButtonCancel>
          <ButtonConfirm
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
              closeModal();
            }}
          >
            Confirmar Edição
          </ButtonConfirm>
        </EditProductsContainer.Col2>
      </EditProductsContainer>
    </div>
  );
}
