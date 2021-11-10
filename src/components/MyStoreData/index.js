import React, { useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import api from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import {
  BoxDatas, ContainerDatas, AddressData,
} from './styles';
import { MyStoreDataEdit } from '../index';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: theme.spacing(3),
      backgroundColor: '#609694',
    },
  },
}));

export default function MyStoreData() {
  const { store, setStore } = useAuth();
  console.log(store, 'front');
  const classes = useStyles();

  async function loadStore() {
    if (store) {
      try {
        const response = await api.get(`/store/${store.firebase_id_store}`);
        setStore(response.data);
      } catch (error) {
      console.error(error); //eslint-disable-line
      }
    }
  }

  function dataNascimentoFormatada(bdate) {
    console.log(bdate);
    const data = new Date(bdate);
    const dia = data.getDate().toString();
    const diaF = dia.length === 1 ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = mes.length === 1 ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  useEffect(() => {
    loadStore();
  }, []);

  if (store) {
    console.log(store);
    return (
      <ContainerDatas>
        <div className={classes.root}>
          <Paper>
            <AddressData>
              Nome:
              {' '}
              {store.company_name}
            </AddressData>
            <AddressData>
              Email:
              {' '}
              {store.email}
            </AddressData>
            <AddressData>
              CNPJ:
              {' '}
              {store.cnpj}
            </AddressData>
            <AddressData>
              Parceira desde:
              {' '}
              {dataNascimentoFormatada(store.created_at)}
            </AddressData>
            <AddressData>
              Telefone:
              {' '}
              {store.phone}
            </AddressData>
            <AddressData>
              Horario de funcionamento:
              {' '}
              {store.opening_time}
              {' '}
              -
              {' '}
              {store.closing_time}
            </AddressData>
            <AddressData>
              Taxa de entrega:
              {' '}
              {store.delivery_price}
            </AddressData>
            <MyStoreDataEdit />
          </Paper>
        </div>
      </ContainerDatas>
    );
  }
  return (
    <ContainerDatas>
      <BoxDatas>
        <p>Dados do usuário não encontrados</p>
      </BoxDatas>
    </ContainerDatas>
  );
}
