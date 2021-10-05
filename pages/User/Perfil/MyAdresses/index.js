import React from 'react';
import {
  Header, MyAdresses, PerfilMenu, Title, FooterMobile,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <div>
      <Header />
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Endereços" />
      <Title>Endereços</Title>
      <MyAdresses />
      <FooterMobile />

    </div>
  );
}
