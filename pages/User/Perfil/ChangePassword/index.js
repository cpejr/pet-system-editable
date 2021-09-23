import React from 'react';
import { ContainerChangePassword, OutterContainer } from './styles';
import {
  Title, FooterMobile, PerfilMenu, MyChangePassword, Header,
} from '../../../../src/components';

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
