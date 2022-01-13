import React from 'react';
import {
  Title, FooterMobile, PerfilMenu, MyDatas,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <div>
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Dados" />
      <Title>Informações Pessoais</Title>
      <MyDatas />
      <FooterMobile />
    </div>
  );
}
