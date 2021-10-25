import React from 'react';
import { ContainerChangePassword, OutterContainer } from './styles';
import {
  Title, FooterMobile, PerfilMenu, MyChangePassword,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <ContainerChangePassword>
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Alterar Senha" />
      <OutterContainer>
        <MyChangePassword />
      </OutterContainer>
      <FooterMobile />

    </ContainerChangePassword>
  );
}
