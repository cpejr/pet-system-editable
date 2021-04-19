import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
// import Link from 'next/link';
import Header from '../../src/components/Header';
import {
  Body, Formulary, TopFormulary, ItemFormulary, IEItemFormulary, DividedItemFormulary, BottomFormulary,
} from '../../src/components/BodyForms';
import {
  TitleStore, SubtitleStore, Text, Text2, SubText, TextBox, Select, Submit, Divider,
} from '../../src/components/FormComponents';

export default function Store() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  // const [endereco, setEndereco] = useState();
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [ie, setIe] = useState('');
  const [ieState, setIeState] = useState('');

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleCellphoneChange(event) {
    setCellphone(event.target.value);
  }
  function handleTelephoneChange(event) {
    setTelephone(event.target.value);
  }
  function handleCnpjChange(event) {
    setCnpj(event.target.value);
  }
  function handleCepChange(event) {
    setCep(event.target.value);
  }
  /*
  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }
  */
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleConfPasswordChange(event) {
    setConfPassword(event.target.value);
  }
  function handleIeChange(event) {
    setIe(event.target.value);
  }
  function handleIeStateChange(event) {
    setIeState(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      // Dados do usuario - Teste
      cpf: '12345678',
      birth_date: '2010-05-10',
      first_name: 'Giovanni',
      last_name: 'de Sa',
      type: 'vendedor',
      created_at: '20210405153007',

      // Dados do Formulario da Loja
      company_name: companyName,
      email,
      telephone,
      cellphone,
      cnpj,
      cep,
      password,
      ie,
      ie_state: ieState,

      // Resto dos dados da loja - Teste
      store_id: '5',
      cover_img: 'dasdkasdjalj',
      logo_img: 'httapsdapo',
      // created_at: '20210414111030',
      evaluation: '444444',
      status: 'Aprovado',

    };
    try {
      const Validate = await axios.post('/api/store', body);
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

        <Divider width="1" display="block" size="700" />

        <Body.Right>
          <Formulary>
            <TopFormulary>
              <TitleStore>Bem vindo de volta!</TitleStore>
              <SubtitleStore>Por favor, entre com seu email e sua password:</SubtitleStore>
            </TopFormulary>

            <ItemFormulary>
              <Text>Razão Social: *</Text>
              <TextBox type="text" placeholder="" onChange={handleCompanyNameChange} value={companyName} />
            </ItemFormulary>

            <ItemFormulary>
              <Text>Email: *</Text>
              <TextBox type="text" placeholder="" onChange={handleEmailChange} value={email} />
            </ItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>DDD + cellphone: *</Text>
                <TextBox type="text" placeholder="(31)99999-9999" onChange={handleCellphoneChange} value={cellphone} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>DDD + telephone: *</Text>
                <TextBox type="text" placeholder="(31)99999-9999" onChange={handleTelephoneChange} value={telephone} />
              </ItemFormulary>
            </DividedItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>CNPJ: *</Text>
                <TextBox type="text" placeholder="" onChange={handleCnpjChange} value={cnpj} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>CEP: *</Text>
                <TextBox type="text" placeholder="" onChange={handleCepChange} value={cep} />
              </ItemFormulary>
            </DividedItemFormulary>

            <ItemFormulary>
              <Text>Endereço: *</Text>
              <TextBox type="text" placeholder="" />
            </ItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>password: *</Text>
                <TextBox type="password" placeholder="" onChange={handlePasswordChange} value={password} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>Confirma password: *</Text>
                <TextBox type="password" placeholder="" onChange={handleConfPasswordChange} value={confPassword} />
              </ItemFormulary>
            </DividedItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <DividedItemFormulary>
                  <input type="checkbox" />
                  <SubText>Visualizar password</SubText>
                </DividedItemFormulary>
              </ItemFormulary>
              <ItemFormulary>
                <DividedItemFormulary>
                  <input type="checkbox" />
                  <SubText>Visualizar Confirmar password</SubText>
                </DividedItemFormulary>
              </ItemFormulary>
            </DividedItemFormulary>

            <IEItemFormulary>
              <Text>Isento de IE: *</Text>
              <input type="radio" />
              <Text2>Sim</Text2>
              <input type="radio" />
              <Text2>Não</Text2>
            </IEItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>IE: *   </Text>
                <TextBox type="text" placeholder="" onChange={handleIeChange} value={ie} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>Estado da IE: *</Text>
                <Select name="estado" id="estado" onChange={handleIeStateChange}>
                  <option value={ieState}>MG</option>
                  <option value={ieState}>SP</option>
                  <option value={ieState}>RJ</option>
                </Select>
              </ItemFormulary>
            </DividedItemFormulary>

            <ItemFormulary>
              <SubText>*Os campos com asterisco são obrigatórios</SubText>
            </ItemFormulary>

            <BottomFormulary>
              <Submit value="submit" onClick={handleSubmit}>Finalizar</Submit>
            </BottomFormulary>
          </Formulary>
        </Body.Right>
      </Body>
    </>
  );
}
