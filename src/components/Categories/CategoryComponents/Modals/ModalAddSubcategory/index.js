import React, { useState } from 'react';
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

const Input = styled.input`
  margin-top: 2%;
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

export default function ModalAddSubcategory({
  category, catIndex, addSubcategory, closeModal,
}) {
  const [subcategoryName, setSubcategoryName] = useState('');

  async function handleSubcategoryChange(event) {
    setSubcategoryName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const body = {
      name: subcategoryName,
      category_id: category.id,
    };

    try {
      if (subcategoryName) {
        const { data } = await api.post('/subcategory/', body);
        addSubcategory(data, catIndex);
        closeModal();
      }
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  }

  return (
    <Box>
      <Fields>
        <Text>Digite o novo nome da Subcategoria: </Text>
        <Input type="text" value={subcategoryName} onChange={() => handleSubcategoryChange()} />
      </Fields>
      <Buttons>
        <Button onClick={() => handleSubmit()}>
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
