import React from 'react';
import {
  MyAdresses, PerfilMenu, Title, FooterMobile,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <div>
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Endereços" />
      <Title>Endereços</Title>
      <MyAdresses />
      <FooterMobile />

    </div>
  );
}
