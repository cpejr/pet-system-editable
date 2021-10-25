import React from 'react';
import {
  Title, PerfilMenu, FooterMobile, MyListFinalizedOrders, MyListOrders,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <div>
      <Title>Meu Perfil</Title>
      <PerfilMenu selectedItem="Meus Pedidos" />
      <Title>Pedido Atual</Title>
      <MyListOrders />
      <Title>Pedidos Anteriores</Title>
      <MyListFinalizedOrders />
      <FooterMobile />
    </div>
  );
}
