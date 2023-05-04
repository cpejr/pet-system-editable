import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import axios from 'axios';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
// import AdminCards from '../../../src/components/AdminCards';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
@media(max-width:860px){
    flex-direction:column;
}
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:40%;
@media(max-width:860px){
    width:100%;
}
`;
Container.Col1.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:5%;
`;

Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:60%;
@media(max-width:860px){
    width:100%;
    margin-top:4%;
}
`;

const ContainerComission = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:80%;
  margin-bottom: 5%;
`;

ContainerComission.Field = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 45px;
  font-weight: 400;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 35px;
  font-weight: 400;
  margin: 0;

`;

const Input = styled.input`
  width: 60%;
  height: 35px;
  font-size: 30px;
  margin-left: 5%;
  border-radius: 10px;
  border-color:${({ theme }) => theme.colors.borderBoxColor};
`;

const Button = styled.button`
  cursor: pointer;
  height: 60px;
  width: 200px;
  border-radius: 10px;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;

`;

export default function Admin() {
  const [comission, setComission] = useState('');

  async function handleCommissionChange(event) {
    setComission(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      share: comission,
    };
    try {
      if (comission != null) {
        await api.put('/api/admin', body);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <HeaderAdmin />
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          <AdminCardsFix />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <ContainerComission>
            <Title>Ajustar comissão:</Title>
            <ContainerComission.Field>
              <Text>Porcentagem: </Text>
              <Input type="text" placeholder="00,00 %" value={comission} onChange={() => handleCommissionChange()} />
            </ContainerComission.Field>
            <Button onClick={() => handleSubmit()}>Confirmar</Button>
          </ContainerComission>
        </Container.Col2>
      </Container>
    </div>
  );
}
