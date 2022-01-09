import React from 'react';
import { ContainerChangePassword, OutterContainer } from './styles';
import {
  Title, PerfilMenu, MyChangePassword,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <ContainerChangePassword>
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Alterar Senha" />
      <OutterContainer>
        <MyChangePassword />
      </OutterContainer>

    </ContainerChangePassword>
  );
}
