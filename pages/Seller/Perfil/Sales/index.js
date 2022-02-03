import React, { useState } from 'react';
import MySales from '../../../../src/components/MySales';
import MySearchDateMonth from '../../../../src/components/MySearchDateMonth';
import MySearchDateYear from '../../../../src/components/MySearchDateYear';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';
import { ContainerDate } from './styles';
import withAuthStore from '../../../../src/components/WithAuth/WithAuthStore';

const Perfil = () => {
  const [dateMonth, setDateMonth] = useState();
  const [dateYear, setYear] = useState();

  <div>
    <Title>Perfil da loja:</Title>
    <PerfilStoreMenu selectedItem="Minhas vendas" />
    <ContainerDate>
      <ContainerDate.Col1>
        <MySearchDateMonth setDateMonth={setDateMonth} />
      </ContainerDate.Col1>

      <ContainerDate.Col2 />

      <ContainerDate.Col3>
        <MySearchDateYear setDateYear={setDateYear}/>
      </ContainerDate.Col3>

    </ContainerDate>

    <MySales month={dateMonth} year={dateYear} />

  </div>
};

export default withAuthStore(Perfil);
