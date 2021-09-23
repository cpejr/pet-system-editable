import React from 'react';
import { ContainerChangePassword, OutterContainer } from './styles';
import Header from '../../../../src/components/Header';
import MyChangePassword from '../../../../src/components/MyChangePassword';
import PerfilMenu from '../../../../src/components/PerfilMenu';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';
import Title from '../../../../src/components/Title';

export default function Perfil() {
  return (
    <ContainerChangePassword>
      <Header />
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Alterar Senha" />
      <OutterContainer>
        <MyChangePassword />
      </OutterContainer>
      <FooterMobile />

    </ContainerChangePassword>
  );
}
