import React, { useState } from 'react';
import styled from 'styled-components';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link';
import axios from 'axios';
import Header from '../../src/components/Header';
import {
  StoreBodyWrapper, StoreBody, StoreFormulary, TopFormulary, ItemFormulary, IEItemFormulary, DividedItemFormulary, BottomFormulary,
} from '../../src/components/BodyForms';
import {
  TitleStore, SubtitleStore, Text, Text2, SubText, TextBox, Submit,
} from '../../src/components/FormComponents';
import MaskedInput from '../../src/components/MasketInput';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

const Img = styled.img` 
  display:flex;
align-items:center;
justify-content:center;
  width: 200px;
  height: 200px;
  margin-bottom:5%;
  margin-top:5%;
  `;
const UploadContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const ImageSelected = styled.input`
`;

const Label = styled.label`
background-color:  ${({ theme }) => theme.colors.mediumGreen};;
color: white;
padding: 0.5rem;
font-family: sans-serif;
border-radius: 0.3rem;
cursor: pointer;
margin-top: 1rem;
`;

export default function Store() {
  // Loja:
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  // const [ie, setIe] = useState('');
  // const [ieState, setIeState] = useState('');
  const [cover_img, setCover_img] = useState({ file: null, url: null });
  const [logo_img, setLogo_img] = useState({ file: null, url: null });

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleCnpjChange(event) {
    setCnpj(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleConfPasswordChange(event) {
    setConfPassword(event.target.value);
  }
  // function handleIeChange(event) {
  //   setIe(event.target.value);
  // }
  // function handleIeStateChange(event) {
  //   setIeState(event.target.value);
  // }
  function handleCover_img(event) {
    setCover_img({
      file: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    });
  }
  function handleLogo_img(event) {
    setLogo_img({
      file: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (companyName?.length < 1) {
      alert('Nome da Empresa vazio!');
      return;
    }
    if (email?.length < 1) {
      alert('Email vazio!');
      return;
    }
    if (phone?.length !== 11) {
      alert('Telefone inválido!');
      return;
    }
    if (cnpj?.length !== 14) {
      alert('CNPJ inválido!');
      return;
    }
    if (password !== confPassword) {
      alert('As senhas precisam ser iguais!');
      return;
    }

    const formData = new FormData();

    formData.append('company_name', companyName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('cnpj', cnpj);
    formData.append('password', password);
    formData.append('status', '1');
    formData.append('cover_img', cover_img.file);
    formData.append('logo_img', logo_img.file);

    try {
      const Validate = await api.post('api/store', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(Validate.data);
      notification.open({
        message: 'Sucesso!',
        description:
          'O registro da loja e do usuário foi concluído com sucesso.',
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
            'Erro ao cadastrar usuário.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }

  // function enableInput() {
  //   document.getElementById('ie').disabled = false;
  //   document.getElementById('ieState').disabled = false;
  // }

  // function disableInput() {
  //   document.getElementById('ie').disabled = true;
  //   document.getElementById('ieState').disabled = true;
  // }

  return (
    <>
      <Header />
      <StoreBodyWrapper>
        <StoreBody>
          <StoreFormulary>
            <TopFormulary>
              <TitleStore>Bora começar a vender?</TitleStore>
              <SubtitleStore>Por favor, preencha as informações referentes à sua loja: </SubtitleStore>
            </TopFormulary>

            <ItemFormulary>
              <Text>Razão Social: *</Text>
              <TextBox type="text" id="birthDate" onChange={handleCompanyNameChange} value={companyName} />
            </ItemFormulary>

            <ItemFormulary>
              <Text>Email: *</Text>
              <TextBox type="text" id="email" onChange={handleEmailChange} value={email} />
            </ItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>DDD + phone: *</Text>
                <MaskedInput name="phone" id="phone" mask="(99)99999-9999" value={phone} onChange={handlePhoneChange} />
              </ItemFormulary>
            </DividedItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>CNPJ: *</Text>
                <MaskedInput name="cnpj" id="cnpj" mask="99.999.999/9999-99" value={cnpj} onChange={handleCnpjChange} />
              </ItemFormulary>
            </DividedItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>Password: *</Text>
                <TextBox type="password" id="password" placeholder="" onChange={handlePasswordChange} value={password} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>Confirma password: *</Text>
                <TextBox type="password" id="confPassword" placeholder="" onChange={handleConfPasswordChange} value={confPassword} />
              </ItemFormulary>
            </DividedItemFormulary>

            {/* <IEItemFormulary>
              <Text>Isento de IE: *</Text>
              <input type="radio" id="yes" name="yes_no" value="yes" onClick={disableInput} />
              <Text2>Sim</Text2>
              <input type="radio" id="no" name="yes_no" value="no" onClick={enableInput} />
              <Text2>Não</Text2>
            </IEItemFormulary> */}

            {/* <DividedItemFormulary>
              <ItemFormulary>
                <Text>IE: *   </Text>
                <TextBox type="text" id="ie" placeholder="" onChange={handleIeChange} value={ie} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>Estado da IE: *</Text>
                <SelectState name="ieState" id="ieState" onChange={handleIeStateChange} value={ieState} />
              </ItemFormulary>
            </DividedItemFormulary> */}

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>Imagem da Loja: *   </Text>
                <UploadContainer>
                  <ImageSelected type="file" id="cover" hidden onChange={handleCover_img} />
                  <Label for="cover">Escolha a imagem</Label>
                  <Img alt="" src={cover_img.url} />
                </UploadContainer>
              </ItemFormulary>
              <ItemFormulary>
                <Text>Logo da Loja: *</Text>
                <UploadContainer>
                  <ImageSelected type="file" id="logo" hidden onChange={handleLogo_img} />
                  <Label for="logo">Escolha a imagem</Label>
                  <Img alt="" src={logo_img.url} />
                </UploadContainer>
              </ItemFormulary>
            </DividedItemFormulary>

            <ItemFormulary>
              <SubText>*Os campos com asterisco são obrigatórios</SubText>
            </ItemFormulary>

            <BottomFormulary>
              <Link href="/Seller/Perfil/Products">
                <Submit value="submit" onClick={handleSubmit}>Finalizar</Submit>
              </Link>
            </BottomFormulary>
          </StoreFormulary>
        </StoreBody>
      </StoreBodyWrapper>
    </>
  );
}
