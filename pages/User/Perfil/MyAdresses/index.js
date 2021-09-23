import React from 'react';
import Header from '../../../../src/components/Header';
import MyAdresses from '../../../../src/components/MyAdresses';
import PerfilMenu from '../../../../src/components/PerfilMenu';
import Title from '../../../../src/components/Title';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';

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
