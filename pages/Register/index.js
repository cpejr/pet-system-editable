import React, { useState } from 'react';
import Link from 'next/link';
import {
  Form, FormControl, Button, FormLabel, FormGroup, Row, Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../src/components/Header';
import Body from '../../src/components/Body';

const MyFormGroup = styled(FormGroup)`
display : flex;
flex-direction: column;
align-items: flex-start;

`;

const Name = styled.div`
display:flex;
flex-direction:row;
`;

const MyFormControl = styled(FormControl)`
display: flex;

`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-top: 30px;
  display: flex;
`;
const Birth = styled.div`
  
`;
const Register = styled.div`
  
`;
const FormRegister = styled(Form)`

`;

export default function Signup() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [ddd, setddd] = useState('');
  const [telephone, setTelephone] = useState('');
  const [date, setDate] = useState(new Date());

  function handleEmailChange(event) {

  }
  return (
    <>
      <Header />
      <Body>
        <Body.Left>

          <Image src="/images/doguinho.jpg" alt="" width="420" height="363" />
        </Body.Left>

        <Body.Right>
          <Register>
            <FormRegister>

              <Subtitle>Vamos Começar?</Subtitle>
              <Name>
                <MyFormGroup>
                  <FormLabel>Nome</FormLabel>
                  <MyFormControl
                    type="text"
                    placeholder="Nome"
                    required="true"
                  />
                </MyFormGroup>
                <MyFormGroup>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Sobrenome"
                    required="true"
                  />
                </MyFormGroup>
              </Name>

              <MyFormGroup>
                <label>Data de Nascimento</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    value={date}
                    onChange={(newDate) => { setDate(newDate); }}
                    variant="inline"
                    format="dd/MM/yyyy"
                  />
                </MuiPickersUtilsProvider>

              </MyFormGroup>

              <MyFormGroup>
                <FormLabel>CPF</FormLabel>
                <FormControl
                  type="number"
                  placeholder="CPF"
                  pattern="[0-9]$"
                  required="true"
                  title="Digite um email válido"
                />
              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required="true"
                  title="Digite um email válido"
                />
              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>Senha</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Senha"
                  required="true"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Deve conter pelo menos um número e uma letra maiúscula e minúscula e pelo menos 8 ou mais caracteres"
                />
              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>Confirmar Senha</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Senha"
                  required="true"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>DDD</FormLabel>
                <FormControl
                  type="number"
                  placeholder="(00)"
                  pattern="[0-9]$"
                  required="true"
                  title="Digite um email válido"
                />
              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>Telefone</FormLabel>
                <FormControl
                  type="number"
                  placeholder="00000-0000"
                  pattern="[0-9]$"
                  required="true"
                  title="Digite um email válido"
                />
              </MyFormGroup>

              <Button type="submit" variant="primary">Finalizar</Button>

              <br />
              <FormGroup>
                <FormLabel align="center">
                  Você já tem Cadarstro?
                  <Link href="/"><a>Login</a></Link>
                </FormLabel>
              </FormGroup>
            </FormRegister>
          </Register>
        </Body.Right>

      </Body>
    </>
  );
}
