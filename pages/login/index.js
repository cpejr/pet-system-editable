import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import axios from 'axios';
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

const Login = ({ email, password }) => (
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
          <TextBox type="text" placeholder="Email">{email}</TextBox>
          <TextBox type="text" placeholder="Senha">{password}</TextBox>
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

Login.getInitialProps = async () => {
  const { response } = await fetch('http://localhost:3000/api/login');
  return { email: response, password: response };
};

export default Login;
