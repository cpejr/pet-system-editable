import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import Header from '../../../../src/components/Header';
import MyDatas from '../../../../src/components/MyDatas';
import MyLogOut from '../../../../src/components/MyLogOut';
import WordsDivider from '../../../../src/components/WordsDivider';

const Title = styled.h1`
align-items:initial;
display:flex;
margin-left:5%;
margin-top:2%;
margin-bottom:1%;
font-family: Roboto;
`;

const SubTitle = styled.div`
align-items:initial;
display:flex;
margin-left:8%;
font-family: Roboto;
`;
const Section = styled.button`
display:flex;
font-size:16px;
align-items:center;
justify-content:center;
margin-left:1%;
margin-right:1%;
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
export default function Perfil() {
  return (
    <div>
      <Header />
      <createGlobalStyle>

        <Title>Meu Perfil:</Title>

        <SubTitle>
          <Link href="http://localhost:3000/User/Perfil/MyRequests">
            <Section>Meus pedidos</Section>
          </Link>
          <WordsDivider />
          <Link href="http://localhost:3000/User/Perfil/MyAdresses">
            <Section>Meus endereços</Section>
          </Link>
          <WordsDivider />
          <Link href="http://localhost:3000/User/Perfil/MyDatas">
            <Section.Select>Dados pessoais</Section.Select>
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
        <MyDatas />
      </createGlobalStyle>

    </div>
  );
}
