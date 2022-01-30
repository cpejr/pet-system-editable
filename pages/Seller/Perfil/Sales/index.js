import React from 'react';
import MySales from '../../../../src/components/MySales';
import MySearchDateMonth from '../../../../src/components/MySearchDateMonth';
import MySearchDateYear from '../../../../src/components/MySearchDateYear';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';
import { ContainerDate } from './styles';
import withAuthStore from '../../../../src/components/WithAuth/WithAuthStore';

const Perfil = () => (
  <div>
    <Title>Perfil da loja:</Title>
    <PerfilStoreMenu selectedItem="Minhas vendas" />
    <ContainerDate>
      <ContainerDate.Col1>
        <MySearchDateMonth />
      </ContainerDate.Col1>

      <ContainerDate.Col2 />

      <ContainerDate.Col3>
        <MySearchDateYear />
      </ContainerDate.Col3>

    </ContainerDate>

    <MySales />

  </div>
);

export default withAuthStore(Perfil);
