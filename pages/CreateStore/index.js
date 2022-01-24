import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';
import 'antd/dist/antd.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import WorkingDays from '../../src/components/WorkingDays';
import {
  StoreBodyWrapper, StoreBody, StoreFormulary, TopFormulary, ItemFormulary,
  DividedItemFormulary, BottomFormulary,
} from '../../src/components/BodyForms';
import {
  Img, UploadContainer, ImageSelected, Label, CurrencyInput,
} from './styles';
import {
  TitleStore, SubtitleStore, Text, SubText, TextBox, Submit,
} from '../../src/components/FormComponents';
import MaskedInput from '../../src/components/MasketInput';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({ baseURL: 'http://localhost:3000/' });
toast.configure();

export default function Store() {
  const steps = ['Dados da loja', 'Endereço e Entrega', 'Horário de funcionamento'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedOne, setCompletedOne] = React.useState(false);
  const [completedTwo, setCompletedTwo] = React.useState(false);

  const matches = useMediaQuery('(max-width:400px)');

  const stepperProps = {
    orientation: matches ? 'vertical' : 'horizontal',
    style: matches ? {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0000',
    } : { backgroundColor: '#0000' },
  };

  const handleNext = () => {
    if (companyName?.length < 1) {
      toast('Nome da Empresa vazio!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (email?.length < 1) {
      toast('Email vazio!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    const regex = new RegExp('.+@.+\..+');
    if (!regex.test(email)) {
      toast('Email inválido!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (phone?.length !== 10) {
      toast('Telefone inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (cellphone?.length !== 11) {
      toast('Telefone inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (cnpj?.length !== 14) {
      toast('CNPJ inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (password !== confPassword) {
      toast('As senhas precisam ser iguais!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (!cover_img.file) {
      toast('Insira uma capa!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (!logo_img.file) {
      toast('Insira uma logo!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
    setCompletedOne(true);
  };

  const handleNextTwo = () => {
    const shippingTaxRegex = new RegExp('([0-9])+');
    if (!shippingTaxRegex.test(shippingTax)) {
      toast('Insira uma taxa válida!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (deliveryTime?.length < 1) {
      toast('Insira um tempo de entrega!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (street?.length < 1) {
      toast('Rua inválida', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (addressNum?.length < 1) {
      toast('Número inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (district?.length < 1) {
      toast('Bairro inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (zipcode?.length !== 8) {
      toast('CEP inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (city?.length < 1) {
      toast('Cidade inválida', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (state?.length < 1) {
      toast('Estado inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
    setCompletedTwo(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    if (step === 1 && completedOne !== true) {
      toast('Preencha todos os campos antes de prosseguir.', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (step === 2 && completedTwo !== true) {
      toast('Preencha todos os campos antes de prosseguir.', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    setActiveStep(step);
  };

  // Loja:
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [street, setStreet] = useState('');
  const [addressNum, setAddressNum] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [shippingTax, setShippingTax] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
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
  function handleCellphoneChange(event) {
    setCellphone(event.target.value);
  }
  function handleStreetChange(event) {
    setStreet(event.target.value);
  }
  function handleAddressNumChange(event) {
    setAddressNum(event.target.value);
  }
  function handleComplementChange(event) {
    setComplement(event.target.value);
  }
  function handleDistrictChange(event) {
    setDistrict(event.target.value);
  }
  function handleZipcodeChange(event) {
    setZipcode(event.target.value);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleStateChange(event) {
    setState(event.target.value);
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
  function handleShippingTaxChange(event) {
    setShippingTax(event.target.value);
  }
  function handleDeliveryTimeChange(event) {
    setDeliveryTime(event.target.value);
  }
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
  const inform = [
    companyName,
    email,
    phone,
    cellphone,
    cnpj,
    password,
    cover_img.file,
    logo_img.file,
    shippingTax,
    deliveryTime,
  ];
  const address = [
    zipcode,
    state,
    city,
    street,
    district,
    addressNum,
    complement,
  ];

  return (
    <>
      <Box>
        <Stepper {...stepperProps} nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 0 && (
                <StoreBodyWrapper>
                  <StoreBody>
                    <StoreFormulary>
                      <TopFormulary>
                        <TitleStore>Bora começar a vender?</TitleStore>
                        <SubtitleStore>
                          Por favor, preencha as informações referentes
                          à sua loja:
                          {' '}
                        </SubtitleStore>
                      </TopFormulary>

                      <ItemFormulary>
                        <Text>Razão Social: *</Text>
                        <TextBox type="text" id="birthDate" onChange={handleCompanyNameChange} value={companyName} />
                      </ItemFormulary>

                      <DividedItemFormulary>

                        <ItemFormulary>
                          <Text>Email: *</Text>
                          <TextBox type="text" id="email" onChange={handleEmailChange} value={email} />
                        </ItemFormulary>
                        <ItemFormulary>
                          <Text>CNPJ: *</Text>
                          <MaskedInput name="cnpj" id="cnpj" mask="99.999.999/9999-99" value={cnpj} onChange={handleCnpjChange} />
                        </ItemFormulary>

                      </DividedItemFormulary>

                      <DividedItemFormulary>
                        <ItemFormulary>
                          <Text>DDD + telefone: *</Text>
                          <MaskedInput name="phone" id="phone" mask="(99)9999-9999" value={phone} onChange={handlePhoneChange} />
                        </ItemFormulary>

                        <ItemFormulary>
                          <Text>DDD + celular: *</Text>
                          <MaskedInput name="cellphone" id="cellphone" mask="(99)99999-9999" value={cellphone} onChange={handleCellphoneChange} />
                        </ItemFormulary>
                      </DividedItemFormulary>

                      <DividedItemFormulary>
                        <ItemFormulary>
                          <Text>Senha: *</Text>
                          <TextBox type="password" id="password" placeholder="" onChange={handlePasswordChange} value={password} />
                        </ItemFormulary>
                        <ItemFormulary>
                          <Text>Confirmar senha: *</Text>
                          <TextBox type="password" id="confPassword" placeholder="" onChange={handleConfPasswordChange} value={confPassword} />
                        </ItemFormulary>
                      </DividedItemFormulary>

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
                        <Submit value="submit" onClick={handleNext} sx={{ mr: 1 }}>Continuar</Submit>
                      </BottomFormulary>
                    </StoreFormulary>
                  </StoreBody>
                </StoreBodyWrapper>
              )}
              {activeStep === 1 && (
                <StoreBodyWrapper>
                  <StoreBody>
                    <StoreFormulary>
                      <TopFormulary>
                        <TitleStore>Endereço e Entrega</TitleStore>
                        <SubtitleStore>
                          Por favor, preencha as informações referentes ao
                          endereço e à entrega da loja:
                          {' '}
                        </SubtitleStore>
                      </TopFormulary>
                      {/* Rua: */}
                      <ItemFormulary>
                        <Text>Rua: *</Text>
                        <TextBox type="text" id="street" onChange={handleStreetChange} value={street} />
                      </ItemFormulary>

                      {/* Número: Complemento: */}
                      <DividedItemFormulary>
                        <ItemFormulary>
                          <Text>Número: *</Text>
                          <MaskedInput name="addressNum" id="addressNum" value={addressNum} onChange={handleAddressNumChange} />
                        </ItemFormulary>

                        <ItemFormulary>
                          <Text>Complemento:</Text>
                          <TextBox type="text" id="complement" value={complement} onChange={handleComplementChange} />
                        </ItemFormulary>
                      </DividedItemFormulary>
                      {/* Bairro: CEP: */}
                      <DividedItemFormulary>
                        <ItemFormulary>
                          <Text>Bairro: *</Text>
                          <TextBox type="text" id="district" value={district} onChange={handleDistrictChange} />
                        </ItemFormulary>

                        <ItemFormulary>
                          <Text>CEP: *</Text>
                          <MaskedInput name="cep" id="cep" mask="99999-999" value={zipcode} onChange={handleZipcodeChange} />
                        </ItemFormulary>
                      </DividedItemFormulary>
                      {/* Cidade: Estado: */}
                      <DividedItemFormulary>
                        <ItemFormulary>
                          <Text>Cidade: *</Text>
                          <TextBox type="text" id="city" value={city} onChange={handleCityChange} />
                        </ItemFormulary>

                        <ItemFormulary>
                          <Text>Estado: *</Text>
                          <TextBox type="text" id="state" value={state} onChange={handleStateChange} />
                        </ItemFormulary>
                      </DividedItemFormulary>

                      <DividedItemFormulary>
                        <ItemFormulary>
                          <Text>Taxa de envio: *</Text>
                          <CurrencyInput name="shippingTax" decimalSeparator="," decimalScale="2" allowNegative={false} prefix="R$" value={shippingTax} onChange={handleShippingTaxChange} />
                        </ItemFormulary>

                        <ItemFormulary>
                          <Text>Tempo de entrega em minutos: *</Text>
                          <MaskedInput name="delivery_time" id="delivery_time" value={deliveryTime} onChange={handleDeliveryTimeChange} />
                        </ItemFormulary>
                      </DividedItemFormulary>

                      <ItemFormulary>
                        <SubText>*Os campos com asterisco são obrigatórios</SubText>
                      </ItemFormulary>

                      <DividedItemFormulary>
                        <ItemFormulary>
                          <BottomFormulary>
                            <Submit value="submit" onClick={handleBack} sx={{ mr: 1 }}>Voltar</Submit>
                          </BottomFormulary>
                        </ItemFormulary>
                        <ItemFormulary>
                          <BottomFormulary>
                            <Submit value="submit" onClick={handleNextTwo} sx={{ mr: 1 }}>Continuar</Submit>
                          </BottomFormulary>
                        </ItemFormulary>
                      </DividedItemFormulary>
                    </StoreFormulary>
                  </StoreBody>
                </StoreBodyWrapper>
              )}
              {activeStep === 2 && (
                <>
                  <WorkingDays form={inform} add={address} />
                  <BottomFormulary>
                    <Submit value="submit" onClick={handleBack} sx={{ mr: 1 }}>Voltar</Submit>
                  </BottomFormulary>
                </>
              )}
            </Typography>
          </>
        </div>
      </Box>
    </>
  );
}
