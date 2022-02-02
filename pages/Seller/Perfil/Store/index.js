import React from 'react';
import {
  PerfilStoreMenu, Title, MyStoreData,
} from '../../../../src/components/index';
import withAuthStore from '../../../../src/components/WithAuth/WithAuthStore';

const Perfil = () => (
  <div>
    <Title>Perfil da loja</Title>
    <PerfilStoreMenu selectedItem="Minha loja" />
    <MyStoreData />
  </div>
);
export default withAuthStore(Perfil);
