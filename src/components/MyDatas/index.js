import React from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../contexts/AuthContext';

const ContainerDatas = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const Section = styled.button`
  flex-direction: row;
  font-size: 24px;
  background-color: #f8f8f8;
  cursor: pointer;
  outline: none;
  border: none;
`;

const SectionText = styled.button`
  font: 1rem Roboto;
  background-color: #f8f8f8;
  color: #609694;
  cursor: pointer;
  border: none;
  font-family: Roboto;
  outline: none;
  height: 90%;
`;

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
  
  font-size: 1.5rem;

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

export default function MyDatas() {
  const { user } = useAuth();

  function dataNascimentoFormatada(bdate) {
    const data = new Date(bdate);
    const dia = data.getDate().toString();
    const diaF = dia.length == 1 ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
    const mesF = mes.length == 1 ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  if (user) {
    return (
      <ContainerDatas>
        <BoxDatas>
          <p>
            Nome:
            {' '}
            {user.name}
          </p>
          <p>
            Email:
            {' '}
            {user.email}
          </p>
          <p>
            CPF:
            {' '}
            {user.cpf}
          </p>
          <p>
            Data de Nascimento:
            {' '}
            {dataNascimentoFormatada(user.birth_date)}
          </p>
          <p>
            Telefone:
            {' '}
            {user.phone}
          </p>
          <RowEdit>
            <Link
              href="http://localhost:3000/User/Perfil/MyDatasEdit"
              rel="MyDatasEdit"
            >
              <Button>
                <Icon>
                  <Section>
                    <MdEdit />
                  </Section>
                  <SectionText>
                    <p>Editar dados</p>
                  </SectionText>
                </Icon>
              </Button>
            </Link>
          </RowEdit>
        </BoxDatas>
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
