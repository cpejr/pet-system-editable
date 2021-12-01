import React, { useState, useEffect } from 'react';
import { notification } from 'antd';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Select } from '@material-ui/core';
import 'antd/dist/antd.css';
import InputMask from 'react-input-mask';
import api from '../../utils/api';
import {
  CategoryContainer, EditProductsContainer, DivInput, EditTitle, NameProduct,
  NameProductInput, CategoryProduct, PriceAndDiscont, DescriptionProduct,
  DescriptionInput, SelectImage, ButtonCancel, ButtonConfirm, Img,
  UploadContainer, ImageSelected, Label,
}
  from './styles';

export default function EditProducts({
  closeModal,
  product,
  categories,
  att,
  setAtt,
}) {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currentGroups, setCurrentGroups] = useState([]);
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
    api.get('group').then((res) => {
      setGroups(res.data);
    });
    api.get(`/product_group/${product.product_id}`).then((res) => {
      console.log('res.data', res.data);
      setCurrentGroups(res.data);
      console.log('current', currentGroups);
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
      setSelected(aux);
    } else {
      aux = aux.filter(((item) => (item !== group_id)));
      setSelected(aux);
    }
  }
  function isChecked(group_id) {
    let auxiliar = 0;
    for (let i = 0; i < currentGroups.length; i++) {
      if (currentGroups[i].group_id === group_id) {
        auxiliar += 1;
      }
    }
    if (auxiliar > 0) {
      return true;
    }
    return false;
  }

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
      console.log('selected', selected);
      // await api.post('/product_group', { selected, productId: product.product_id });
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
                defaultChecked={isChecked(group.group_id)}
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
