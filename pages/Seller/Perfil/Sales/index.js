import React from 'react';
import MySales from '../../../../src/components/MySales';
import MySearchDateMonth from '../../../../src/components/MySearchDateMonth';
import MySearchDateYear from '../../../../src/components/MySearchDateYear';
import { Title, PerfilStoreMenu, FooterMobile } from '../../../../src/components/index';
import { ContainerDate } from '../../../../src/styles/perfilSellerSalesStyles';

export default function Perfil() {
  return (
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
      <FooterMobile />

    </div>
  );
}
