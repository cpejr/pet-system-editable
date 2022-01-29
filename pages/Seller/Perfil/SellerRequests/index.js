import React from 'react';
import MySellerRequest from '../../../../src/components/MySellerRequest';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';
import withAuthStore from '../../../../src/components/WithAuth/WithAuthStore';

const Perfil = () => (
  <div>
    <Title>Perfil da loja</Title>
    <PerfilStoreMenu selectedItem="Pedidos" />
    <MySellerRequest />

  </div>
);

export default withAuthStore(Perfil);
