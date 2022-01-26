import React, { useState } from 'react';
import styled from 'styled-components';
import { notification } from 'antd';
import { toast } from 'react-toastify';
import api from '../../../../../utils/api';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 0;

`;

const Fields = styled.div`
  align-items: left;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Text = styled.p`
  justify-content: left;
  font-size: 24px;
  margin: 0;
`;

const Input = styled.input`
  margin-top: 3%;
  width: 100%;
  height: 30px;
  font-size: 20px;
  border-radius: 7px;
  border-color:${({ theme }) => theme.colors.borderBoxColor};
`;

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 150px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
`;

Button.Cancel = styled.button`
  cursor: pointer;
  height: 40px;
  width: 150px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkRed};
  color: white;
`;

const ImageSelected = styled.input`
`;

const UploadContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const SelectImage = styled.p`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  font-family: Roboto;
  margin-top: 15px;
  @media(max-width:1190px){
  justify-content:center;
}
`;

const Img = styled.img` 
  display:flex;
  align-items:center;
  justify-content:center;
  width: 200px;
  height: 200px;
  margin-bottom:5%;
  margin-top:8%;
  `;

const Label = styled.label`
  background-color:  ${({ theme }) => theme.colors.mediumGreen};;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1px;
`;

export default function ModalAddCategory({ addCategory, closeModal, att, setAtt }) {
  const [categoryName, setCategoryName] = useState('');
  const [photo, setPhoto] = useState({ file: null, url: null });

  function handleChange(event) {
    setPhoto({
      file: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    });
  }

  async function handleCategoryChange(event) {
    setCategoryName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (categoryName.length === 0) {
      toast('Insira um nome para a categoria!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (!photo.file) {
      toast('Insira uma imagem!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    
    const formData = new FormData();

    formData.append('name', categoryName);
    if (photo.file) {
      formData.append('img', photo.file);
    }
    try {
      if (categoryName) {
        const { data } = await api.post('/category/', formData);
        data.id = data.category_id;
        delete data.category_id;
        closeModal();
        setAtt(!att);
        addCategory(data);
        notification.open({
          message: 'Sucesso!',
          description: 'Categoria criada com sucesso!',
          className: 'ant-notification',
          top: '100px',
          style: {
            width: 600,
          },
        });
      }
    } catch (error) {
      console.log(error); // eslint-disable-line
      notification.open({
        message: 'Erro!',
        description: 'Erro ao criar categoria.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }

  return (
    <Box>
      <Fields>
        <Text>Digite o nome da Categoria a ser criada: </Text>
        <Input type="text" value={categoryName} onChange={handleCategoryChange} />
      </Fields>
      <SelectImage>Selecionar imagem</SelectImage>
      <UploadContainer>
        <ImageSelected type="file" id="upload" hidden onChange={handleChange} />
        <Label for="upload">Escolha a imagem</Label>
        <Img alt="" src={photo.url} />
      </UploadContainer>
      <Buttons>
        <Button onClick={handleSubmit}>
          Confirmar
        </Button>
        <Button.Cancel onClick={(e) => {
          e.preventDefault();
          closeModal();
        }}
        >
          Cancelar
        </Button.Cancel>
      </Buttons>
    </Box>
  );
}
