import React from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import Link from "next/link";
import Button from "@material-ui/core/Button";

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
  font: 1.5rem Roboto;
  flex-direction: column;
  width: 65%;
  border-color: black;
  border-radius: 5px;
  align-items: left;
  line-height: 100%;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  @media (max-width: 976px) {
    width: 100%;
    margin-bottom: 2%;
  }
  @media (max-width: 560px) {
    width: 80%;
    font-size: 87.5%;
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
    var data = new Date(bdate),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  if (user) {
    return (
      <ContainerDatas>
        <BoxDatas>
          <RowEdit>
            <Link href="http://localhost:3000/User/Perfil/MyDatasEdit" rel="MyDatasEdit">
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
          <p>
            Nome: {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <p>CPF: {user.cpf}</p>
          <p>Data de Nascimento: {dataNascimentoFormatada(user.birth_date)}</p>
          <p>Telefone: {user.telephone}</p>
        </BoxDatas>
      </ContainerDatas>
    );
  } else {
    return (
      <ContainerDatas>
        <BoxDatas>
          <p>Dados do usuário não encontrados</p>
        </BoxDatas>
      </ContainerDatas>
    );
  }
}
