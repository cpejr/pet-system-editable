import React from 'react';
import MySellerRequest from '../../../../src/components/MySellerRequest';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';

export default function Perfil() {
  return (
    <div>
      <Title>Perfil da loja</Title>
      <PerfilStoreMenu selectedItem="Pedidos" />
      <MySellerRequest />
      <FooterMobile />

    </div>
  );
}
