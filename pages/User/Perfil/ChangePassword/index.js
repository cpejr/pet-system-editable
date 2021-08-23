import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../../../src/components/Header';
import MyChangePassword from '../../../../src/components/MyChangePassword';
import MyLogOut from '../../../../src/components/MyLogOut';
import WordsDivider from '../../../../src/components/WordsDivider';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';

const Title = styled.h1`
align-items:initial;
display:flex;
margin-left:5%;
margin-top:2%;
margin-bottom:1%;
font-family: Quicksand;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:2%;
    }
`;

const SubTitle = styled.div`
align-items:initial;
display:flex;
margin-left:8%;
font-family: Roboto;
@media(max-width:560px){
  align-items:center;
  justify-content:center;
  margin:0;
}
`;

const ContainerChangePassword= styled.div`
display:flex;
flex-direction: column;
justify-content:space-around;
align-content:center;
`;

const MyQuack = styled.div`
display:flex;
justify-content:center;
align-content:center;
margin-top:3%;
`;

const Section = styled.button`
display:flex;
font-size:16px;
align-items:center;
justify-content:center;
border:none;
margin-left:1%;
margin-right:1%;
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
border:none;
margin-right:1%;
background-color:${({ theme }) => theme.colors.hoverBackground};
border-radius:5%;
outline:none;
font-family: Roboto;
`;

export default function Perfil() {
  return (
    <ContainerChangePassword>
      <Header />
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
          <Section>Dados pessoais</Section>
        </Link>
        <WordsDivider />
        <Link href="http://localhost:3000/User/Perfil/ChangePassword">
          <Section.Select>Alterar Senha</Section.Select>
        </Link>
        <WordsDivider />
        <Section>
          <MyLogOut />
        </Section>

      </SubTitle>
      <MyQuack>
         <MyChangePassword />
      </MyQuack>
      <FooterMobile />

    </ContainerChangePassword>
  );
}
