import React from 'react';
import Image from 'next/image';
// import axios from 'axios';
// import Link from 'next/link';
import Header from '../../src/components/Header';
import {
  Body, Formulary, TopFormulary, ItemFormulary, BottomFormulary, UnderFields,
} from '../../src/components/BodyForms';
import {
  TitleLogin, SubtitleLogin, TextBox, Submit, ForgotPassword, CreateAccount, Divider,
} from '../../src/components/FormComponents';

const Login = ({ email, password }) => (
  <div>
    <Header />
    <Body>
      <Body.Left>
        <Image src="/images/BannerLogin.jpg" alt="" width="600" height="400" />
      </Body.Left>

      <Divider width="1" display="block" size="500" />

      <Body.Right>
        <Formulary>
          <TopFormulary>
            <TitleLogin>Bem vindo de volta!</TitleLogin>
            <SubtitleLogin>Por favor, entre com seu email e sua senha:</SubtitleLogin>
          </TopFormulary>

          <ItemFormulary>
            <TextBox type="text" placeholder="Email">{email}</TextBox>
            <TextBox type="password" placeholder="Password">{password}</TextBox>
            <ForgotPassword>Esqueceu a senha?</ForgotPassword>
          </ItemFormulary>

          <BottomFormulary>
            <Submit value="submit">Finalizar</Submit>
          </BottomFormulary>
          <UnderFields>
            <CreateAccount>Não tem uma conta?</CreateAccount>
            <CreateAccount.Right>Cadastre-se</CreateAccount.Right>
          </UnderFields>
        </Formulary>
      </Body.Right>
    </Body>
  </div>
);

Login.getInitialProps = async () => {
  const { response } = await fetch('http://localhost:3000/api/login');
  return { email: response, password: response };
};

export default Login;
