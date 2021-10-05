import React from 'react';
import {
  Title, PerfilMenu, FooterMobile, MyListFinalizedOrders, MyListOrders, Header,
} from '../../../../src/components';

export default function Perfil() {
  return (
    <div>
      <Header />
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
