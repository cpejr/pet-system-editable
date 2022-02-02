import React, { useEffect, useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import moment from 'moment';
import api from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import {
  BoxDatas, ContainerDatas, AddressData, AddressDataRow, Column, DeliveryText,
} from './styles';
import MyStoreDataEdit from '../MyStoreDataEdit/index';

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
  const regionShippingTax = store?.shipping_tax.split(',');
  const regionShippingTime = store?.delivery_time.split(',');
  const openingTime = store?.opening_time.split(',');
  const closingTime = store?.closing_time.split(',');
  const situation = store?.working_days.split(',');
  const [today, setToday] = useState();
  const date = new Date();
  const day = moment(date).format('dddd');
  useEffect(() => {
    if (day) {
      switch (day) {
        case 'Monday':
          setToday(0);
          break;

        case 'Tuesday':
          setToday(1);
          break;

        case 'Wednesday':
          setToday(2);
          break;

        case 'Thursday':
          setToday(3);
          break;

        case 'Friday':
          setToday(4);
          break;

        case 'Saturday':
          setToday(5);
          break;

        default:
          setToday(6);
          break;
      }
    }
  }, [day]);
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
              {situation[today]}
              {' '}
              {openingTime[today]}
              {' '}
              -
              {' '}
              {closingTime[today]}
            </AddressData>
            <AddressDataRow>
              <Column>
                Região de entrega:
                <DeliveryText>Barreiro:</DeliveryText>
                <DeliveryText>Centro-Sul:</DeliveryText>
                <DeliveryText>Leste:</DeliveryText>
                <DeliveryText>Nordeste:</DeliveryText>
                <DeliveryText>Noroeste:</DeliveryText>
                <DeliveryText>Norte:</DeliveryText>
                <DeliveryText>Oeste:</DeliveryText>
                <DeliveryText>Pampulha:</DeliveryText>
                <DeliveryText>Venda Nova:</DeliveryText>
              </Column>
              <Column>
                Taxa de entrega:
                <DeliveryText>{regionShippingTax[0]}</DeliveryText>
                <DeliveryText>{regionShippingTax[1]}</DeliveryText>
                <DeliveryText>{regionShippingTax[2]}</DeliveryText>
                <DeliveryText>{regionShippingTax[3]}</DeliveryText>
                <DeliveryText>{regionShippingTax[4]}</DeliveryText>
                <DeliveryText>{regionShippingTax[5]}</DeliveryText>
                <DeliveryText>{regionShippingTax[6]}</DeliveryText>
                <DeliveryText>{regionShippingTax[7]}</DeliveryText>
                <DeliveryText>{regionShippingTax[8]}</DeliveryText>
              </Column>
              <Column>
                Tempo de entrega:
                <DeliveryText>{regionShippingTime[0]}</DeliveryText>
                <DeliveryText>{regionShippingTime[1]}</DeliveryText>
                <DeliveryText>{regionShippingTime[2]}</DeliveryText>
                <DeliveryText>{regionShippingTime[3]}</DeliveryText>
                <DeliveryText>{regionShippingTime[4]}</DeliveryText>
                <DeliveryText>{regionShippingTime[5]}</DeliveryText>
                <DeliveryText>{regionShippingTime[6]}</DeliveryText>
                <DeliveryText>{regionShippingTime[7]}</DeliveryText>
                <DeliveryText>{regionShippingTime[8]}</DeliveryText>
              </Column>

            </AddressDataRow>
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
