import React, { useEffect,useState } from 'react';
import ModalEditAddresses from '../ModalEditAddresses';
import ModalAddAddress from '../ModalAddAddress';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import api from "../../utils/api";
import { useAuth } from "../../contexts/AuthContext";

const ContainerAdresses = styled.div`
display:flex;
font: 1rem Roboto;
width:100%;
align-items:center;
flex-direction:column;
justify-content:space-around;
margin-top:2%;
@media(max-width:1075px){
flex-direction:column;
}
`;

const BoxAdress = styled.div`
display:flex;
flex-direction:column;
width:30%;
border-color:black;
border-radius:5px;
background-color: #A6DAD8;
line-height:100%;
border-style: solid;
border-width:1px;
margin-top:2%;
margin-bottom:2%;

@media(max-width:1050px){
display:flex;
align-items:center;
justify-content:center;
width: 100%;
}
@media(max-width:560px){
width:80%;
margin-bottom:2%;
}
`;

const Espaçamento = styled.div`
display:flex;
width:100%;
margin-top:1%;
margin-bottom:1%;
@media(max-width:860px){
        flex-direction:column;
    } 
`;

Espaçamento.Col1 = styled.h3`
display:flex;
width:30%;
font-family:Roboto;
@media(max-width:860px){
        width:100%;
        font-size:16px;
    } 
`;

const ButtonConfirm = styled.button`
display:flex;
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
margin-top:2%;
margin-botton:2%;
transform: translate(0%,-50%);
justify-content: center;
text-align: center;
cursor: pointer;
    }
    @media(max-width:860px){
        width:150px;
    } 
`;

const Icon = styled.div`
width:10%;
display:flex;
justify-content:flex-end;
align-items:center;
`;

const ContainerDatas = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const BoxDatas = styled.div`
  display: flex;
  font: 1.5rem Roboto;
  flex-direction: column;
  width: 65%;
  border-color: black;
  border-radius: 5px;
  align-items: left;
  line-height: 100%;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  @media (max-width: 976px) {
    width: 100%;
    margin-bottom: 2%;
  }
  @media (max-width: 560px) {
    width: 80%;
    font-size: 87.5%;
  }
`;

export default function MyAdresses() {
  const { user } = useAuth();

  if (!user) {
    return (
      <ContainerDatas>
        <BoxDatas>
          <p>Dados do usuário não encontrados</p>
        </BoxDatas>
      </ContainerDatas>
    );
  }
  const [addresses, setAddresses] = useState('');
  
  async function loadAddresses() {
    try {
      const response = await api.get('/addresses/' + user.firebase_id);
      setAddresses(response.data);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    loadAddresses();
  }, []);
  if(addresses){
    return (
      <ContainerAdresses>
        {addresses.map((endereco) =>(
          <BoxAdress>
            <Espaçamento>
              <Espaçamento.Col1>
              Rua:
              </Espaçamento.Col1>
            {endereco.street},{endereco.number}
            </Espaçamento>
            <Espaçamento>
              <Espaçamento.Col1>
              Complemento:
              </Espaçamento.Col1>
              Apartamento 601 Apartamento ?
            </Espaçamento>
            <Espaçamento>
              <Espaçamento.Col1>
              Bairro Cidade Estado:
              </Espaçamento.Col1>
              <p>{endereco.neighbourhood}, {endereco.city} , {endereco.state}</p>
            </Espaçamento>
            <Espaçamento>
              <Espaçamento.Col1>
              Cep:
              </Espaçamento.Col1>
              <p>{endereco.cep}</p>
            </Espaçamento>
            <Espaçamento>
              <Espaçamento.Col1>
              Rua:
              </Espaçamento.Col1>
            {endereco.street},{endereco.number}
            </Espaçamento>
            <Espaçamento>
              <Espaçamento.Col1>
              Icone:
              </Espaçamento.Col1>
              <Icon>
            <ModalEditAddresses address_id={endereco.address_id} />
            </Icon>
            </Espaçamento>
        </BoxAdress>
        ))}
          <ModalAddAddress></ModalAddAddress>
      </ContainerAdresses>
    );
  }
  else{
    return (
      <ContainerDatas>
        <BoxDatas>
          <p>Dados do usuário não encontrados</p>
        </BoxDatas>
      </ContainerDatas>
    );
  }
}
