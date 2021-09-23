import React from 'react';
import styled from 'styled-components';
import Header from '../../../../src/components/Header';
import MyChangePassword from '../../../../src/components/MyChangePassword';
import PerfilMenu from '../../../../src/components/PerfilMenu';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';

const Title = styled.h1`
  display: flex;
  align-items: initial;
  margin-left: 5%;
  margin-top: 2%;
  margin-bottom: 1%;
  font-family: Quicksand;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
  }
`;

const ContainerChangePassword = styled.div`
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

export default function Perfil() {
  return (
    <ContainerChangePassword>
      <Header />
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Alterar Senha" />
      <MyQuack>
        <MyChangePassword />
      </MyQuack>
      <FooterMobile />

    </ContainerChangePassword>
  );
}
