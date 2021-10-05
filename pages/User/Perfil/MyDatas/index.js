import React from 'react';
import {
  Title, FooterMobile, PerfilMenu, MyDatas, Header,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <div>
      <Header />
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Dados" />
      <Title>Informações Pessoais</Title>
      <MyDatas />
      <FooterMobile />
    </div>
  );
}
