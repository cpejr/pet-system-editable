import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import moment from 'moment';
import { toast } from 'react-toastify';
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
import ModalFailedLogin from '../../src/components/ModalFailedLogin';
import api from '../../src/utils/api';

moment.locale('pt-br');

toast.configure();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');

  const {
    login, user, store, isLoading,
  } = useAuth();
  /*eslint-disable*/
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user || store) {
      router.push('/Home');
    }
    if (!isLoading && !user && !store) {
      router.push('/login');
    }
  }, [isLoading, user, store]);

  if (isLoading || user || store) {
    return <FullPageLoader />;
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  const handleClickClose = () => {
    setShowModal(false);
  };

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const res = await api.get('attempts/' + email);
      if (res.data.attempts === 0) {
        const body = {
          lock_time: moment().add(5, 'minutes'),
          attempts: res.data.attempts + 1,
        };
        await api.put('attempts/' + email, body);
        console.log(body);
      } else {
        switch (res.data.attempts) {
          case 1: {
            const body = {
              attempts: res.data.attempts + 1,
            };
            await api.put('attempts/' + email, body)
          }
          case 2: {
            const body = {
              attempts: res.data.attempts + 1,
            };
            await api.put('attempts/' + email, body)
          }
          default: {
            const body = {
              attempts: res.data.attempts + 1,
            };
          }
        }
      }
      if (res.data.attempts === 3 && moment() <= moment(res.data.lock_time)) {
        const body = {
          lock_time: moment().add(5, 'minutes'),
        };
        await api.put('attempts/' + email, body);
        setShowModal(true);
        const time = moment(res.data.lock_time).fromNow();
        setContent(time);
      }
      if (res.data.attempts === 3 && moment() > moment(res.data.lock_time)) {
        const body = {
          lock_time: moment().add(5, 'minutes'),
          attempts: 0,
        };
        await api.put('attempts/' + email, body);
      }
      login(email, password).then((response) => {
        if (response === 'Loja em espera') {
          toast('Sua solicitação para se tornar um parceiro ainda não foi avaliada', { position: toast.POSITION.BOTTOM_RIGHT });
        }
      });
    } catch (error) {
      console.error(error); //eslint-disable-line
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
          {showModal && (
            <ModalFailedLogin
              content={content}
              close={handleClickClose}
            />
          )}
        </Body.Right>
      </Body>
    </>
  );
};

export default Login;
