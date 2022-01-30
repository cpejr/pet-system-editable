import React from 'react';
import MySellerRequest from '../../../../src/components/MySellerRequest';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';

export default function Perfil() {
  return (
    <div>
      <Title>Perfil da loja</Title>
      <PerfilStoreMenu selectedItem="Pedidos" />
      <MySellerRequest />

    </div>
  );
}
