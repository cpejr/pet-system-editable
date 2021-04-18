import React, { useState } from 'react';
import Link from 'next/link';
import {
  Form, FormControl, Button, FormLabel, FormGroup,
} from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../src/components/Header';
import Body from '../../src/components/Body';

const WordFormGroup = styled(FormGroup)`
display : flex;
flex-direction: column;
align-items: flex-start;
margin-left: 30px;
`;
const SobreFormGroup = styled(FormGroup)`
display : flex;
flex-direction: column;
align-items: flex-start;
margin-left: 30px;
`;

const MyFormGroup = styled(FormGroup)`
display : flex;
flex-direction: column;
align-items: flex-start;
`;

const Phone = styled.div`
display : flex;
flex-direction:row ;
margin-left:30px;
`;

const Pass = styled.div`
display : flex;
flex-direction:row ;
`;

const Name = styled.div`
display:flex;
flex-direction:row;
`;
const NumbersForms = styled.div`
flex-direction:row ;
display: flex;
  
`;
const DDD = styled.div`
flex-direction:row ;
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
  
`;
const FormRegister = styled(Form)`

`;
const RegisterButton = styled(Button)`
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
        <hr width="0" display="block" size="600" />
        <Body.Right>
          <Register>
            <FormRegister>

              <Subtitle>Vamos Começar?</Subtitle>
              <Name>
                <MyFormGroup>
                  <FormLabel>Nome</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Nome"
                    required="true"
                  />
                </MyFormGroup>
                <SobreFormGroup>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Sobrenome"
                    required="true"
                  />
                </SobreFormGroup>
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
                <FormLabel>Email</FormLabel>
                <EmailFormControl
                  type="email"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required="true"
                  title="Digite um email válido"
                />
              </MyFormGroup>
              <Pass>
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
                <WordFormGroup>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Senha"
                    required="true"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  />
                </WordFormGroup>
              </Pass>
              <NumbersForms>
                <MyFormGroup>
                  <FormLabel>CPF</FormLabel>
                  <FormControl
                    type="number"
                    placeholder="CPF"
                    pattern="[0-9]$"
                    required="true"
                    title="Digite um CPF válido"
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
                        required="true"
                        title="Digite um email válido"
                      />
                    </MyFormGroup>
                  </DDD>
                  <MyFormGroup>
                    <FormLabel>Telefone</FormLabel>
                    <PhoneFormControl
                      type="number"
                      placeholder="00000-0000"
                      pattern="[0-9]$"
                      required="true"
                      title="Digite um email válido"
                    />
                  </MyFormGroup>
                </Phone>
              </NumbersForms>
              <RegisterButton type="submit" variant="primary">Finalizar</RegisterButton>

              <br />
              <FormGroup>
                <FormLabel align="center">
                  Você já tem Cadastro?
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
