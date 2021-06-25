import React from 'react';
import styled from 'styled-components';
import api from '../../../../utils/api';

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 27px;
  font-weight: 400;
  margin: 0;

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

export default function ModalAddCategory() {
  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      name: category,
    };
    try {
      if (category != null) {
        const Validate = await api.post('/category/', body);
        console.log(Validate.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Text>Você realmente deseja apagar essa categoria? </Text>
      <Line>
        <Button onClick={handleSubmit}>Confirmar</Button>
      </Line>
    </div>
  );
}
