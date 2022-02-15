import React from 'react';
import { ContainerChangePassword, OutterContainer } from '../../../../src/styles/userPerfilChangePasswordStyles';
import {
  Title, PerfilMenu, MyChangePassword,
} from '../../../../src/components';
import withAuthUser from '../../../../src/components/WithAuth/WithAuthUser';

const Perfil = () => (
  <ContainerChangePassword>
    <Title>Meu Perfil</Title>
    <PerfilMenu selectedItem="Alterar Senha" />
    <OutterContainer>
      <MyChangePassword />
    </OutterContainer>

  </ContainerChangePassword>
);

export default withAuthUser(Perfil);
