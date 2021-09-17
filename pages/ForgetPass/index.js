/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Image from 'next/image';
import { notification } from 'antd';
import 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Header from '../../src/components/Header';
import {
  Body, Formulary, TopFormulary, ItemFormulary, BottomFormulary,
} from '../../src/components/BodyForms';
import {
  TitleLogin, SubtitleLogin, TextBox, Submit, ForgotPassword, CreateAccount, Divider,
} from '../../src/components/FormComponents';
import { useAuth } from '../../src/contexts/AuthContext';

const ForgetPass = () => {
  const [email, setEmail] = useState('');
  const { forgottenPassword } = useAuth();

/*eslint-disable*/
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  async function sendResetEmail(event) {
    event.preventDefault();
    try {
      await forgottenPassword(email);
      notification.open({
        message: 'Sucesso!',
        description:
            'Email enviado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
     
    } catch (error) {
      console.log(error);
      notification.open({
        message: 'Erro!',
        description:
            'Erro ao enviar email de redefinição usuário.',
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
        <Image src="/images/BannerLogin.jpg" alt="" width="600" height="400" />
      </Body.Left>

      <Divider width="1" display="block" size="300" />

      <Body.Right>
      <Formulary onSubmit={sendResetEmail}>
        <TopFormulary>
          <TitleLogin>Esqueceu sua senha?</TitleLogin>
          <SubtitleLogin>Por favor, entre com seu email para enviarmos um email de redefinição</SubtitleLogin>
          <ItemFormulary>
            <TextBox type="text" placeholder="Email" onChange={handleEmailChange} value={email}/>
          </ItemFormulary>
          <BottomFormulary>
            <Submit type="submit">Enviar</Submit>
          </BottomFormulary>
        </TopFormulary>
        </Formulary>
      </Body.Right>
    </Body>
  </>
  );
};
export default ForgetPass;
