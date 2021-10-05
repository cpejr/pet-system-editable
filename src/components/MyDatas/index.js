import React, { useEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import api from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import {
  BoxDatas, ContainerDatas, AddressData,
} from './styles';
import MyDatasEdit from '../MyDatasEdit';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: theme.spacing(3),
      backgroundColor: '#609694',
    },
  },
}));

export default function MyDatas() {
  const { user, setUser } = useAuth();
  const classes = useStyles();

  async function loadUser() {
    try {
      const response = await api.get(`/user/${user.firebase_id}`);
      setUser(response.data);
    } catch (error) {
      console.error(error); //eslint-disable-line
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
    loadUser();
  }, []);

  if (user) {
    return (
      <ContainerDatas>
        <div className={classes.root}>
          <Paper>
            <AddressData>
              Nome:
              {' '}
              {user.name}
            </AddressData>
            <AddressData>
              Email:
              {' '}
              {user.email}
            </AddressData>
            <AddressData>
              CPF:
              {' '}
              {user.cpf}
            </AddressData>
            <AddressData>
              Data de Nascimento:
              {' '}
              {dataNascimentoFormatada(user.birth_date)}
            </AddressData>
            <AddressData>
              Telefone:
              {' '}
              {user.phone}
            </AddressData>
            <MyDatasEdit />
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
