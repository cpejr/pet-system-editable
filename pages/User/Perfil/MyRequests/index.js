import React from 'react';
import {
  Title, PerfilMenu, MyListFinalizedOrders, MyListOrders,
} from '../../../../src/components';
import withAuthUser from '../../../../src/components/WithAuth/WithAuthUser';

const Perfil = () => (
  <div>
    <Title>Meu Perfil</Title>
    <PerfilMenu selectedItem="Meus Pedidos" />
    <Title>Pedido Atual</Title>
    <MyListOrders />
    <Title>Pedidos Anteriores</Title>
    <MyListFinalizedOrders />
  </div>
);

export default withAuthUser(Perfil);
