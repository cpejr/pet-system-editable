/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Image from 'next/image';
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

const ForgetPass = () => (
  <>
    <Header />

    <Body>
      <Body.Left>
        <Image src="/images/BannerLogin.jpg" alt="" width="600" height="400" />
      </Body.Left>

      <Divider width="1" display="block" size="300" />

      <Body.Right>
        <TopFormulary>
          <TitleLogin>Esqueceu sua senha?</TitleLogin>
          <SubtitleLogin>Por favor, entre com seu email para enviarmos um email de redefinição</SubtitleLogin>
        </TopFormulary>
      </Body.Right>
    </Body>
  </>
);

export default ForgetPass;
