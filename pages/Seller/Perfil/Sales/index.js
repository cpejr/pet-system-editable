import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MySales from '../../../../src/components/MySales';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';
import { ContainerDate1 } from '../../../../src/styles/sellerPerfilSalesStyles';
import withAuthStore from '../../../../src/components/WithAuth/WithAuthStore';

const Perfil = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Title>Perfil da loja:</Title>
      <PerfilStoreMenu selectedItem="Minhas vendas" />
      <ContainerDate1>
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
      </ContainerDate1>

      <MySales value={value} />

    </div>
  );
};

export default withAuthStore(Perfil);
