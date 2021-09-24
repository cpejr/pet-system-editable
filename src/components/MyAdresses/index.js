import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalEditAddresses from '../ModalEditAddresses';
import ModalAddAddress from '../ModalAddAddress';
import api from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';

const ContainerAdresses = styled.div`
display:flex;
flex-direction:column;
font: 1rem Quicksand;
width:100%;
align-items:center;
justify-content:space-around;
@media(max-width:1075px){
flex-direction:column;
padding-left: 5%;
}
`;

const BoxAdress = styled.div`
display:flex;
flex-direction:column;
width:30%;
background-color: #609694;
line-height:100%;
border-width:1px;
margin-top:0%;
margin-bottom:2%;
padding: 1%;

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
justify-content:center;
font-size: 1.5rem;
color: white;
font-family:Quicksand;
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

const SomTeste = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
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
      const response = await api.get(`/addresses/${user.firebase_id}`);
      setAddresses(response.data);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    loadAddresses();
  }, []);
  if (addresses) {
    return (
      <SomTeste>
        <ContainerAdresses>
          {addresses.map((endereco) => (
            <BoxAdress>
              <Espaçamento>
                {endereco.street}
                ,
                {' '}
                {endereco.address_num}
              </Espaçamento>
              <Espaçamento>
                {endereco.complement}
              </Espaçamento>
              <Espaçamento>
                {endereco.district}
                ,
                {' '}
                {endereco.city}
                {' '}
                ,
                {' '}
                {endereco.state}
              </Espaçamento>
              <Espaçamento>
                <p>{endereco.zipcode}</p>
              </Espaçamento>
              <Espaçamento>
                <Icon>
                  <ModalEditAddresses address_id={endereco.address_id} />
                </Icon>
              </Espaçamento>
            </BoxAdress>
          ))}
        </ContainerAdresses>
        <ModalAddAddress />
      </SomTeste>
    );
  }

  return (
    <ContainerDatas>
      <BoxDatas>
        <p>Dados do usuário não encontrados</p>
      </BoxDatas>
    </ContainerDatas>
  );
}
