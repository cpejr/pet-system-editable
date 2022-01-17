import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Body,
  Formulary,
  TopFormulary,
  ItemFormulary,
  BottomFormulary,
} from '../../src/components/BodyForms';
import {
  TitleLogin,
  SubtitleLogin,
  TextBox,
  Submit,
  ForgotPassword,
  CreateAccount,
  Divider,
} from '../../src/components/FormComponents';
import { useAuth } from '../../src/contexts/AuthContext';
import FullPageLoader from '../../src/components/FullPageLoader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, user, store, isLoading } = useAuth();
  /*eslint-disable*/
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user || store) {
      router.push('/Home');
    }
  }, [isLoading, user, store]);

  if(isLoading || user || store) {
    return <FullPageLoader />;
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if(!user && !store){
      try {
        await login(email, password);
      } catch (error) {
        console.log(error); //eslint-disable-line
      }
    }
  }


  return (
    <>
      <Body>
        <Body.Left>
          <Image
            src="/images/BannerLogin.jpg"
            alt=""
            width="600"
            height="400"
          />
        </Body.Left>
        <Divider width="1" display="block" size="300" />
        <Body.Right>
          <Formulary onSubmit={handleSubmit}>
            <TopFormulary>
              <TitleLogin>Bem vindo de volta!</TitleLogin>
              <SubtitleLogin>
                Por favor, entre com seu email e sua senha:
              </SubtitleLogin>
            </TopFormulary>
            <ItemFormulary>
              <TextBox
                type="text"
                placeholder="Email"
                onChange={handleEmailChange}
                value={email}
              />
            </ItemFormulary>
            <ItemFormulary>
              <TextBox
                type="password"
                placeholder="Senha"
                onChange={handlePasswordChange}
                value={password}
              />
            </ItemFormulary>
            <ItemFormulary>
              <Link href="/ForgetPass">
                <ForgotPassword>Esqueceu a senha?</ForgotPassword>
              </Link>
            </ItemFormulary>
            <BottomFormulary>
              <Submit type="submit">Entrar</Submit>
            </BottomFormulary>
            <BottomFormulary>
              <CreateAccount>Não tem uma conta?</CreateAccount>
              <Link href="/Register">
                <CreateAccount.Right>Cadastre-se</CreateAccount.Right>
              </Link>
            </BottomFormulary>
            <BottomFormulary>
              <CreateAccount>Quer se tornar um parceiro?</CreateAccount>
              <Link href="/CreateStore">
                <CreateAccount.Right>Registre-se</CreateAccount.Right>
              </Link>
            </BottomFormulary>
          </Formulary>
        </Body.Right>
      </Body>
    </>
  );
};

export default Login;
