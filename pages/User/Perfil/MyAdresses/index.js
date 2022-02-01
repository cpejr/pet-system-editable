import React from 'react';
import {
  MyAdresses, PerfilMenu, Title,
} from '../../../../src/components';
import withAuthUser from '../../../../src/components/WithAuth/WithAuthUser';

const Perfil = () => (
  <div>
    <Title>Meu Perfil</Title>
    <PerfilMenu selectedItem="Meus Endereços" />
    <Title>Endereços</Title>
    <MyAdresses />
  </div>
);

export default withAuthUser(Perfil);
