import React from 'react';
import {
  PerfilStoreMenu, Title, MyStoreData,
} from '../../../../src/components/index';

export default function Perfil() {
  return (
    <div>
      <Title>Perfil da loja</Title>
      <PerfilStoreMenu selectedItem="Minha loja" />
      <MyStoreData />
    </div>
  );
}
