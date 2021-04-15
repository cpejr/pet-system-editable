import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import Header from '../../../../src/components/Header';
import MyRequest from '../../../../src/components/MyRequest';
import MyLogOut from '../../../../src/components/MyLogOut';
import WordsDivider from '../../../../src/components/WordsDivider';

const Title = styled.h1`
display:flex;
align-items:initial;
margin-left:5%;
margin-top:2%;
margin-bottom:1%;
font-family: Roboto;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:2%;
    }
`;

const SubTitle = styled.div`
display:flex;
align-items:initial;
margin-left:8%;
font-family: Roboto;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0;
    }
`;
const Section = styled.button`
display:flex;
font-size:16px;
align-items:center;
justify-content:center;
margin-right:1%;
margin-left:1%;
border:none;
background-color:${({ theme }) => theme.colors.background};
cursor: pointer;
font-family: Roboto;
outline:none;
`;

Section.Select = styled.button`
flex-direction:row;
font-size:16px;
align-items:center;
margin-left:1%;
margin-right:1%;
border:none;
background-color:${({ theme }) => theme.colors.hoverBackground};
border-radius:5%;
outline:none;
font-family: Roboto;
`;
const ActualType = styled.h2`
display:flex;
align-items:initial;
margin-left:5%;
font-family: Roboto;
@media(max-width:560px){
font-size:18px;
margin-top:10%;
    }
`;
const OldType = styled.h2`
display:flex;
align-items:initial;
margin-left:5%;
margin-top:3%;
font-family: Roboto;
@media(max-width:560px){
font-size:18px;
margin-top:10%;
    }
`;

export default function Perfil() {
  return (
    <div>
      <Header />
      <createGlobalStyle>

        <Title>Meu Perfil:</Title>

        <SubTitle>
          <Link href="http://localhost:3000/User/Perfil/MyRequests">
            <Section.Select>Meus pedidos</Section.Select>
          </Link>
          <WordsDivider />
          <Link href="http://localhost:3000/User/Perfil/MyAdresses">
            <Section>Meus endereços</Section>
          </Link>
          <WordsDivider />
          <Link href="http://localhost:3000/User/Perfil/MyDatas">
            <Section>Dados pessoais</Section>
          </Link>
          <WordsDivider />
          <Link href="http://localhost:3000/User/Perfil/ChangePassword">
            <Section>Alterar Senha</Section>
          </Link>
          <WordsDivider />
          <Section>
            <MyLogOut />
          </Section>
        </SubTitle>
        <ActualType>Pedido Atual</ActualType>
        <MyRequest />
        <OldType>Pedidos Anteriores</OldType>
        <MyRequest />

      </createGlobalStyle>

    </div>
  );
}
