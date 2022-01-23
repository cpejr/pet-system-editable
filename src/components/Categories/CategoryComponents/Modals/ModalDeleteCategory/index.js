import React, {useEffect} from 'react';
import styled from 'styled-components';
import api from '../../../../../utils/api';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2%;
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
  margin-left: 10px;
`;

export default function ModalDeleteCategory({
  category, catIndex, deleteCategory, closeModal,
}) {
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.delete(`/category/${category.category_id}`);
      deleteCategory(catIndex);
      closeModal();
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  }

  return (
    <Box>
      <Fields>
        <Text>Você realmente deseja apagar esta Categoria?</Text>
      </Fields>
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
