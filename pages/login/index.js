import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Header from '../../src/components/Header';
import {
  Body, Formulary, TopFormulary, ItemFormulary, BottomFormulary,
} from '../../src/components/BodyForms';
import {
  TitleLogin, SubtitleLogin, TextBox, Submit, ForgotPassword, CreateAccount, Divider,
} from '../../src/components/FormComponents';

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
    event.preventDefault();
    const body = {
      email, password,
    };
    try {
      const Validate = await axios.post('http://localhost:3000/api/login', body);
      console.log(Validate.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />

      <Body>
        <Body.Left>
          <Image src="/images/BannerLogin.jpg" alt="" width="600" height="400" />
        </Body.Left>

        <Divider width="1" display="block" size="300" />

        <Body.Right>
          <Formulary onSubmit={handleSubmit}>
            <TopFormulary>
              <TitleLogin>Bem vindo de volta!</TitleLogin>
              <SubtitleLogin>Por favor, entre com seu email e sua senha:</SubtitleLogin>
            </TopFormulary>
            <ItemFormulary>
              <TextBox type="text" placeholder="Email" onChange={handleEmailChange} value={email} />
            </ItemFormulary>
            <ItemFormulary>
              <TextBox type="password" placeholder="Senha" onChange={handlePasswordChange} value={password} />
            </ItemFormulary>

            <ItemFormulary>
              <ForgotPassword>Esqueceu a senha?</ForgotPassword>
            </ItemFormulary>
            <BottomFormulary>
              <Submit type="submit">Finalizar</Submit>
            </BottomFormulary>
            <BottomFormulary>
              <CreateAccount>Não tem uma conta?</CreateAccount>
              <CreateAccount.Right>Cadastre-se</CreateAccount.Right>
            </BottomFormulary>
          </Formulary>
        </Body.Right>
      </Body>

    </>
  );
};

export default Login;
