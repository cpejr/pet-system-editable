import React from 'react';
import Header from '../../../../src/components/Header';
import MyDatas from '../../../../src/components/MyDatas';
import PerfilMenu from '../../../../src/components/PerfilMenu';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';
import Title from '../../../../src/components/Title';

export default function Perfil() {
  return (
    <div>
      <Header />
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Dados" />
      <Title>Dados Cadastrais</Title>
      <MyDatas />
      <FooterMobile />

    </div>
  );
}
