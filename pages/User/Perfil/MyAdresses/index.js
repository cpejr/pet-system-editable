import React from 'react';
import styled from 'styled-components';
import Header from '../../../../src/components/Header';
import MyAdresses from '../../../../src/components/MyAdresses';
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

export default function Perfil() {
  return (
    <div>
      <Header />
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Endereços" />
      <Title>Endereços</Title>
      <MyAdresses />
      <FooterMobile />

    </div>
  );
}
