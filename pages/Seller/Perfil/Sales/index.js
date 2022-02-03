import React, { useState } from 'react';
import MySales from '../../../../src/components/MySales';
import MySearchDateMonth from '../../../../src/components/MySearchDateMonth';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import MySearchDateYear from '../../../../src/components/MySearchDateYear';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';
import { ContainerDate } from './styles';
import withAuthStore from '../../../../src/components/WithAuth/WithAuthStore';
import moment from 'moment';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const Perfil = () => {
  const [value, setValue] = useState(new Date()); 

  return(
    <div>
      <Title>Perfil da loja:</Title>
      <PerfilStoreMenu selectedItem="Minhas vendas" />
      <ContainerDate>
        <ContainerDate.Col1>
          <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
            <KeyboardDatePicker
              views={['month', 'year']}
              value={value}
              onChange={(newDate) => { setValue(newDate); }}
              variant="inline"
              label="Mês e Ano"
              InputProps={{ readOnly: true }}
            />
          </MuiPickersUtilsProvider>
        </ContainerDate.Col1>

        <ContainerDate.Col2 />

        <ContainerDate.Col3>
          <MySearchDateYear setDateYear={setDateYear}/>
        </ContainerDate.Col3>

      </ContainerDate>

      <MySales value={value} />

    </div>
  )
};

export default withAuthStore(Perfil);
