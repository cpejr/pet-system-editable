import React, { useState } from 'react';
import Link from 'next/link';
import {
  Form, FormControl, FormLabel, FormGroup,
} from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import { Body } from '../../src/components/BodyForms';
import WindowDivider from '../../src/components/WindowDivider';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

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
width: 430px;
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
margin-top: 250px;
  
`;
const Buttons = styled.div`
display: flex;
align-items: center;
flex-direction: column;
  
`;
const FormRegister = styled(Form)`

`;

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

const ButtonLogin = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
outline: none;
border:0;
background-color: ${({ theme }) => theme.colors.background};
cursor: pointer;
`;

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [ddd, setDdd] = useState('');
  const [telephone, setTelephone] = useState('');
  const [date, setDate] = useState(new Date());
  const router = useRouter();
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }
  function handleCpfChange(event) {
    setCpf(event.target.value);
  }
  function handleDddChange(event) {
    setDdd(event.target.value);
  }
  function handleTelephoneChange(event) {
    setTelephone(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (cpf?.length !== 11) {
      alert('CPF inválido');
      return;
    }
    if (telephone?.length !== 9) {
      alert('Número inválido');
      return;
    }
    if (ddd?.length !== 2) {
      alert('Número inválido');
      return;
    }
    if (password !== confirmPassword) {
      alert('A senha inserida deve ser a mesma');
      return;
    }
    const body = {
      type: 'buyer',
      name: name,
      birth_date: date,
      email,
      password,
      cpf,
      phone: ddd + telephone,
    };
    try {
      const Validate = await api.post('/api/user', body);
      console.log(Validate.data);
      notification.open({
        message: 'Sucesso!',
        description:
            'Cadastro realizado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
      router.push('/login');
    } catch (error) {
      console.error(error);
      notification.open({
        message: 'Erro!',
        description:
            'Erro ao cadastrar usuário.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }

  return (
    <>
      <Header />
      <Body>
        <Body.Left>

          <Image src="/images/doguinho.jpg" alt="" width="420" height="363" />
        </Body.Left>
        <WindowDivider />
        <Body.Right>
          <Register>
            <FormRegister>

              <Subtitle>Vamos Começar?</Subtitle>
              <Name>
                <MyFormGroup>
                  <FormLabel>Nome</FormLabel>
                  <EmailFormControl
                    type="text"
                    placeholder="Nome"
                    required
                    value={name}
                    onChange={handleNameChange}
                  />
                </MyFormGroup>
              </Name>

              <MyFormGroup>
                <FormLabel>Data de Nascimento</FormLabel>
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
                  required
                  title="Digite um email válido"
                  value={email}
                  onChange={handleEmailChange}
                />
              </MyFormGroup>
              <Pass>
                <MyFormGroup>
                  <FormLabel>Senha</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Senha"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Deve conter pelo menos um número e uma letra maiúscula e minúscula e pelo menos 8 ou mais caracteres"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </MyFormGroup>
                <WordFormGroup>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Senha"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
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
                    required
                    title="Digite um CPF válido"
                    value={cpf}
                    onChange={handleCpfChange}
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
                        onChange={handleDddChange}
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
                      value={telephone}
                      onChange={handleTelephoneChange}
                    />
                  </MyFormGroup>
                </Phone>
              </NumbersForms>
              <Buttons>
                <Submit onClick={handleSubmit}>Finalizar</Submit>

                <br />
                <FormGroup>
                  <FormLabel align="center">
                    Você já tem Cadastro?
                    <Link href="/login">
                      <ButtonLogin>Login</ButtonLogin>
                    </Link>
                  </FormLabel>
                </FormGroup>
              </Buttons>
            </FormRegister>

          </Register>
        </Body.Right>

      </Body>
    </>
  );
}
