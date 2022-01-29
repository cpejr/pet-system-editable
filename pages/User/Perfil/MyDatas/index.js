import React from 'react';
import {
  Title, PerfilMenu, MyDatas,
} from '../../../../src/components';
import withAuthUser from '../../../../src/components/WithAuth/WithAuthUser';

const Perfil = () => (
  <div>
    <Title>Meu Perfil</Title>
    <PerfilMenu selectedItem="Meus Dados" />
    <Title>Informações Pessoais</Title>
    <MyDatas />
  </div>
);

export default withAuthUser(Perfil);
