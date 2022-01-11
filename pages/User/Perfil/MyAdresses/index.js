import React from 'react';
import {
  MyAdresses, PerfilMenu, Title,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <div>
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Endereços" />
      <Title>Endereços</Title>
      <MyAdresses />

    </div>
  );
}
