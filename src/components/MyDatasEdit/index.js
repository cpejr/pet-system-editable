import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import Link from "next/link";
import { Form, FormControl, FormLabel, FormGroup } from "react-bootstrap";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import "bootstrap/dist/css/bootstrap.min.css";
import { notification } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { Body } from "../../../src/components/BodyForms";
import WindowDivider from "../../../src/components/WindowDivider";
import api from "../../utils/api";
import Title from "../../../src/components/Title";

const WordFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;
const SobreFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;

const MyFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2%;
  margin-right: 2%;
`;

const Phone = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-right: 2%;
`;

const Pass = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  padding: 1%;
`;
const NumbersForms = styled.div`
  flex-direction: row;
  display: flex;
  padding: 1%;
`;
const DDD = styled.div`
  flex-direction: row;
  display: flex;
  margin-right: 10px;
`;
const EmailFormControl = styled(FormControl)`
  display: flex;
  width: 430px;
`;
const PhoneFormControl = styled(FormControl)`
  display: flex;
  width: 140px;
`;
const DDDFormControl = styled(FormControl)`
  display: flex;
  width: 55px;
  font-size: 15px;
  flex-direction: row;
`;

const Subtitle = styled.p`
  margin-top: 40px;
  display: flex;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 500;
`;

const Register = styled.div`
  border: 1px solid;
  padding-bottom: 5%;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5%;
`;
const FormRegister = styled(Form)``;

const Submit = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 150px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelSubmit = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 150px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.darkRed};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

const ContainerDatas = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
  padding-bottom: 5%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
//padding-bottom: 5%;
ContainerDatas.BoxDatas = styled.div`
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

export default function MyDatasEdit() {
  const { user, validateSession, setUser } = useAuth();

  if (!user) {
    return (
      <ContainerDatas>
        <ContainerDatas.BoxDatas>
          <p>Dados do usuário não encontrados</p>
        </ContainerDatas.BoxDatas>
      </ContainerDatas>
    );
  }

  const [name, setName] = useState(user.name);
  const [cpf, setCpf] = useState(user.cpf);
  const [ddd, setDdd] = useState(user.phone.substring(0, 2));
  const [phone, setPhone] = useState(user.phone.substring(2));
  const [date, setDate] = useState(user.birth_date);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    if (cpf?.length !== 11) {
      alert("CPF inválido");
      return;
    }
    if (phone?.length !== 9) {
      alert("Número inválido");
      return;
    }
    if (ddd?.length !== 2) {
      alert("Número inválido");
      return;
    }
    const body = {
      name: name,
      birth_date: date,
      cpf: cpf,
      phone: ddd + phone,
    };
    try {
      api.put("/user/" + user.firebase_id, body).then((response) => {
        setUser(response.data);
      });
      notification.open({
        message: "Sucesso!",
        description: "Alteraçao realizada com sucesso.",
        className: "ant-notification",
        top: "100px",
        style: {
          width: 600,
        },
      });
      router.push("/User/Perfil/MyDatas");
    } catch (error) {
      console.error(error);
      notification.open({
        message: "Erro!",
        description: "Erro ao atualizar dados.",
        className: "ant-notification",
        top: "100px",
        style: {
          width: 600,
        },
      });
    }
    validateSession;
  }

  if (user) {
    return (
      <Body>
        <WindowDivider />
        <Body.Right>
          <Register>
            <FormRegister>
              <Title>Formulário de edição</Title>
              <Name>
                <MyFormGroup>
                  <FormLabel>Nome</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Nome"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </MyFormGroup>
              </Name>

              <MyFormGroup>
                <FormLabel>Data de Nascimento</FormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    value={date}
                    onChange={(newDate) => {
                      setDate(newDate);
                    }}
                    variant="inline"
                    format="dd/MM/yyyy"
                  />
                </MuiPickersUtilsProvider>
              </MyFormGroup>
              <NumbersForms>
                <MyFormGroup>
                  <FormLabel>CPF</FormLabel>
                  <FormControl
                    type="number"
                    placeholder="CPF"
                    pattern="[0-9]$"
                    required
                    title="Digite um CPF válido"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </MyFormGroup>
                <Phone>
                  <DDD>
                    <MyFormGroup>
                      <FormLabel>DDD</FormLabel>
                      <DDDFormControl
                        type="numbers"
                        placeholder="(00)"
                        pattern="[0-9]$"
                        required
                        value={ddd}
                        onChange={(e) => setDdd(e.target.value)}
                      />
                    </MyFormGroup>
                  </DDD>
                  <MyFormGroup>
                    <FormLabel>Telefone</FormLabel>
                    <PhoneFormControl
                      type="number"
                      placeholder="00000-0000"
                      pattern="[0-9]$"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </MyFormGroup>
                </Phone>
              </NumbersForms>
              <Buttons>
                <Link href="/User/Perfil/MyDatas" rel="MyDatas">
                  <CancelSubmit>Cancelar</CancelSubmit>
                </Link>
                <Submit onClick={handleSubmit}>Finalizar</Submit>
              </Buttons>
            </FormRegister>
          </Register>
        </Body.Right>
      </Body>
    );
  } else {
    return (
      <ContainerDatas>
        <ContainerDatas.BoxDatas>
          <p>Dados do usuário não encontrados</p>
        </ContainerDatas.BoxDatas>
      </ContainerDatas>
    );
  }
}
