import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../../../utils/api';

const Line = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  margin-left: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 27px;
  font-weight: 400;
  margin: 0;

`;

const Input = styled.input`
  width: 60%;
  height: 35px;
  font-size: 27px;
  border-radius: 10px;
  border-color:${({ theme }) => theme.colors.borderBoxColor};
`;

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 600;
  margin-left: 5%;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;

`;

export default function ModalEditCategory() {
  const [category, setCategory] = useState('');

  async function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      name: category,
    };
    try {
      if (category != null) {
        const Validate = await api.put('/category/', body);
        console.log(Validate.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Text>Digite o novo nome da Categoria a ser alterada: </Text>
      <Line>
        <Input type="text" value={category} onChange={handleCategoryChange} />
        <Button onClick={handleSubmit}>Confirmar</Button>
      </Line>
    </div>
  );
}
