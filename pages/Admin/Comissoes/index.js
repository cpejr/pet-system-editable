import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import api from '../../../src/utils/api';
// import AdminCards from '../../../src/components/AdminCards';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import { toast } from 'react-toastify';

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
margin-top:5%;
margin-bottom:5%;
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
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 1%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 4%;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 300;
  margin: 0;

`;

const Input = styled.input`
  height: 25px;
  font-size: 20px;
  margin-left: 2%;
  display: flex;
  justify-content: center;
  width: 25%;
  border-radius: 10px;
  border-color:${({ theme }) => theme.colors.borderBoxColor};
`;

const Button = styled.button`
  cursor: pointer;
  height: 45px;
  width: 150px;
  border-radius: 10px;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
  margin-top:5%;
`;

toast.configure();

export default function Admin() {
  const [comission, setComission] = useState(0);


  async function getComission () {
    try {
      const response = await api.get('api/admin');
      setComission(response.data.share);
    } catch (error) {
      alert("Erro ao tentar obter comissão atual");
    }
  }

  useEffect(() => {
    getComission()
  }, [])

  async function handleCommissionChange(event) {
    setComission(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      share: comission,
    };
    try {
      await api.put('api/admin', body);
      toast('Comissão alterada com sucesso!', { position: toast.POSITION.BOTTOM_RIGHT });
    } catch (error) {
      console.log(error);
      toast('Erro ao alterar comissão.', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  return (
    <div>
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
              <Text>Comissão atual: {comission}%</Text>
            </ContainerComission.Field>
            <ContainerComission.Field>
              <Text>Alterar para: </Text>
              <Input type="text" placeholder="00.00" onChange={handleCommissionChange} />
            </ContainerComission.Field>  
            <Button onClick={handleSubmit}>Confirmar</Button>
          </ContainerComission>
        </Container.Col2>
      </Container>
    </div>
  );
}
