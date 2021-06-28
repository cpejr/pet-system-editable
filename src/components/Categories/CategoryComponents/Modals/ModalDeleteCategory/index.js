import React from 'react';
import styled from 'styled-components';
import api from '../../../../../utils/api';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: yellow;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 0;
`;

const Fields = styled.div`
  align-items: left;
  // width: 80%;
  //background-color: green;
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

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 150px;
  border-radius: 8px;
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
  font-size: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkRed};
  color: white;
`;

export default function ModalAddCategory({ category, closeModal }) {
  async function handleSubmit() {
    try {
      const Validate = await api.delete(`/category/${category.id}`);
      console.log(Validate.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <Fields>
        <Text>Você realmente deseja apagar esta Categoria?</Text>
      </Fields>
      <Buttons>
        <Button onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          closeModal();
        }}
        >
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
