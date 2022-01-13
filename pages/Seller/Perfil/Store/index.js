import React from 'react';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';
import {
  PerfilStoreMenu, Title, MyStoreData,
} from '../../../../src/components/index';

export default function Perfil() {
  return (
    <div>
      <Title>Perfil da loja</Title>
      <PerfilStoreMenu selectedItem="Minha loja" />
      <MyStoreData />
      <FooterMobile />
    </div>
  );
}
