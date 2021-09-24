import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { Paper, makeStyles } from '@material-ui/core';
import { useAuth } from '../../contexts/AuthContext';

const ContainerDatas = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
  padding-bottom: 5%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: theme.spacing(3),
      backgroundColor: '#609694',
    },
  },
  roote: {
    '& > *': {
      fontfamily: 'Quicksand',
      backgroundColor: '#f6c8ca',
    },
  },
}));

const BoxDatas = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-color: black;
  border-radius: 5px;
  background-color: #609694;
  line-height: 100%;
  border-style: solid;
  border-width: 1px;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 1%;
  color: white;
  justify-content: center;

  font-size: 3rem;

  @media (max-width: 1050px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 560px) {
    width: 80%;
    margin-bottom: 2%;
  }
`;
const RowEdit = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  letter-spacing: 30%;
`;
const Icon = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
`;
const AddressData = styled.p`
  font-size: 1.5rem;
  justify-content: center;
  color: white;
`;

export default function MyDatas() {
  const { user } = useAuth();
  const classes = useStyles();

  function dataNascimentoFormatada(bdate) {
    const data = new Date(bdate);
    const dia = data.getDate().toString();
    const diaF = dia.length === 1 ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = mes.length === 1 ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

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
            <RowEdit>
              <Link
                href="http://localhost:3000/User/Perfil/MyDatasEdit"
                rel="MyDatasEdit"
              >
                <div className={classes.roote}>
                  <Button variant="contained">
                    Editar
                    <Icon />
                  </Button>
                </div>
              </Link>
            </RowEdit>
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
