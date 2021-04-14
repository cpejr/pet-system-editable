import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Header from '../../src/components/Header';
import Body from '../../src/components/Body';

const Fields = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const UnderFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.h1`
  margin-top: 150px; 
  font-size: 58px;
  font-weight: 700;
  font-family: Roboto;
`;

const Subtitle = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 100;
`;

const TextBox = styled.input`
    margin-top: 15px;
    height: 30px;
    width: 400px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.baseGray};
    background: #F2F2F2;
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

`;

const ForgotPassword = styled.p`
  font-family: Roboto;
  justify-content: right;
  margin-top: 5px;
  margin-left: 250px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mediumRed};
`;

const CreateAccount = styled.p`
  font-family: Roboto;
  margin-top: 5px;
  font-weight: 700;
  font-size: 15px;
`;

CreateAccount.Right = styled.p` 
  font-family: Roboto;
  margin-top: 5px;
  margin-left: 5px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mediumRed};
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const resp = await axios.post('http://localhost:3000/api/login', { email, password });

      localStorage.setItem('accessToken', resp.data.accessToken);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Header />

      <Body>
        <Body.Left>
          <Image src="/images/BannerLogin.jpg" alt="" width="600" height="400" />
        </Body.Left>

        <hr width="1" display="block" size="600" />

        <Body.Right>
          <Title>Bem vindo de volta!</Title>
          <Subtitle>Por favor, entre com seu email e sua senha:</Subtitle>

          <Fields>
            <form onSubmit={handleSubmit}>
              <TextBox
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <TextBox
                type="password"
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="submit">Enviar</button>
            </form>
            <ForgotPassword>Esqueceu a senha?</ForgotPassword>
          </Fields>
          <Link href="http://localhost:3000/api/login">
            <Submit onClick="location.href='http://localhost:3000/api/login'">Próximo</Submit>
          </Link>
          <UnderFields>
            <CreateAccount>Não tem uma conta?</CreateAccount>
            <CreateAccount.Right>Cadastre-se</CreateAccount.Right>
          </UnderFields>
        </Body.Right>
      </Body>

    </div>
  );
};

export default Login;
