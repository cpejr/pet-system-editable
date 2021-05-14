import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../src/components/Header';
import {
  StoreBodyWrapper, StoreBody, StoreFormulary, TopFormulary, ItemFormulary, IEItemFormulary, DividedItemFormulary, BottomFormulary,
} from '../../src/components/BodyForms';
import {
  TitleStore, SubtitleStore, Text, Text2, SubText, TextBox, Submit,
} from '../../src/components/FormComponents';
import MaskedInput from '../../src/components/MasketInput';

export default function Store() {
  // Usuario:
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  // Loja:
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [ie, setIe] = useState('');
  const [ieState, setIeState] = useState('');

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleCpfChange(event) {
    setCpf(event.target.value);
  }
  function handleBirthDateChange(event) {
    setBirthDate(event.target.value);
  }
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
    if (firstName?.length < 1) {
      alert('Nome vazio!');
      return;
    }
    if (lastName?.length < 1) {
      alert('Sobrenome vazio!');
      return;
    }
    if (cpf?.length !== 11) {
      alert('CPF inválido!');
      return;
    }
    if (birthDate?.length !== 8) {
      alert('Data de nascimento inválida!');
      return;
    }
    if (companyName?.length < 1) {
      alert('Nome da Empresa vazio!');
      return;
    }
    if (email?.length < 1) {
      alert('Email vazio!');
      return;
    }
    if (cellphone?.length !== 11) {
      alert('Celular inválido!');
      return;
    }
    if (telephone?.length !== 11) {
      alert('Telefone inválido!');
      return;
    }
    if (cnpj?.length !== 14) {
      alert('CNPJ inválido!');
      return;
    }
    if (cep?.length !== 8) {
      alert('CEP inválido!');
      return;
    }
    if (password !== confPassword) {
      alert('As senhas precisam ser iguais!');
      return;
    }

    const body = {
      // Dados do usuario
      first_name: firstName,
      last_name: lastName,
      cpf,
      birth_date: birthDate,
      type: 'vendedor',
      // Dados do Formulario da Loja
      company_name: companyName,
      email,
      telephone, // Tambem e guardado no usuario
      cellphone,
      cnpj,
      cep,
      password,
      ie,
      ie_state: ieState,

      // Resto dos dados da loja - Teste
      cover_img: 'teste',
      logo_img: 'teste',
      evaluation: '10',
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
      <StoreBodyWrapper>
        <StoreBody>
          <StoreFormulary>
            <TopFormulary>
              <TitleStore>Bora começar a vender?</TitleStore>
              <SubtitleStore>Por favor, preenchar as informações referentes ao usuário: </SubtitleStore>
            </TopFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>Nome: *</Text>
                <TextBox type="text" onChange={handleFirstNameChange} value={firstName} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>Sobrenomes: *</Text>
                <TextBox type="text" onChange={handleLastNameChange} value={lastName} />
              </ItemFormulary>
            </DividedItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>CPF: *</Text>
                <MaskedInput name="cpf" mask="999.999.999-99" value={cpf} onChange={handleCpfChange} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>Data de Nascimento:</Text>
                <MaskedInput name="birthDate" mask="99/99/9999" value={birthDate} onChange={handleBirthDateChange} />
              </ItemFormulary>
            </DividedItemFormulary>

            <SubtitleStore>Agora, entre com as informações da sua loja:</SubtitleStore>

            <ItemFormulary>
              <Text>Razão Social: *</Text>
              <TextBox type="text" onChange={handleCompanyNameChange} value={companyName} />
            </ItemFormulary>

            <ItemFormulary>
              <Text>Email: *</Text>
              <TextBox type="text" onChange={handleEmailChange} value={email} />
            </ItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>DDD + cellphone: *</Text>
                <MaskedInput name="cellphone" mask="(99)99999-9999" value={cellphone} onChange={handleCellphoneChange} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>DDD + telephone: *</Text>
                <MaskedInput name="telephone" mask="(99)99999-9999" value={telephone} onChange={handleTelephoneChange} />
              </ItemFormulary>
            </DividedItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>CNPJ: *</Text>
                <MaskedInput name="cnpj" mask="99.999.999/9999-99" value={cnpj} onChange={handleCnpjChange} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>CEP: *</Text>
                <MaskedInput name="cep" mask="99.999.999" value={cep} onChange={handleCepChange} />
              </ItemFormulary>
            </DividedItemFormulary>

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

            <IEItemFormulary>
              <Text>Isento de IE: *</Text>
              <input type="radio" id="yes" name="yes_no" value="yes" />
              <Text2>Sim</Text2>
              <input type="radio" id="no" name="yes_no" value="no" />
              <Text2>Não</Text2>
            </IEItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>IE: *   </Text>
                <TextBox type="text" placeholder="" onChange={handleIeChange} value={ie} />
              </ItemFormulary>
              <ItemFormulary>
                <Text>Estado da IE: *</Text>
                <TextBox type="text" placeholder="" onChange={handleIeStateChange} value={ieState} />
              </ItemFormulary>
            </DividedItemFormulary>

            <ItemFormulary>
              <SubText>*Os campos com asterisco são obrigatórios</SubText>
            </ItemFormulary>

            <BottomFormulary>
              <Submit value="submit" onClick={handleSubmit}>Finalizar</Submit>
            </BottomFormulary>
          </StoreFormulary>
        </StoreBody>
      </StoreBodyWrapper>
    </>
  );
}
