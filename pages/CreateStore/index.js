import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'antd/dist/antd.css';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import WorkingDays from '../../src/components/WorkingDays';
import Header from '../../src/components/Header';
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
  const steps = ['Dados da loja', 'Entrega', 'Horário de funcionamento'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep = isLastStep() && !allStepsCompleted()
      ? // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  // Loja:
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [shippingTax, setShippingTax] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  // const [ie, setIe] = useState('');
  // const [ieState, setIeState] = useState('');
  const [cover_img, setCover_img] = useState({ file: null, url: null });
  const [logo_img, setLogo_img] = useState({ file: null, url: null });

  function addStr(str, index, stringToAdd) {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }

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
    const shippingTaxRegex = new RegExp('([0-9])+');
    if (!shippingTaxRegex.test(shippingTax)) {
      toast('Insira uma taxa válida!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    // if (openingTime === closingTime) {
    //   toast('Horários de abertura e encerramento precisam ser diferentes!', { position: toast.POSITION.BOTTOM_RIGHT });
    //   return;
    // }
    // if (parseInt(openingTime.substring(0, 2), 10) > 23 || parseInt(closingTime.substring(0, 2), 10) > 23 || parseInt(openingTime.substring(3, 5), 10) > 59 || parseInt(closingTime.substring(3, 5), 10) > 59) {
    //   toast('Favor inserir horários entre 00:00 e 23:59!', { position: toast.POSITION.BOTTOM_RIGHT });
    //   return;
    // }
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
    const formatShippingTax = parseFloat(shippingTax.replace(',', '.').split('R$')[1]);
    const inform = [
      companyName,
      email,
      phone,
      cellphone,
      cnpj,
      password,
      cover_img.file,
      logo_img.file,
      deliveryTime,
    ];
    const formData = new FormData();

    formData.append('company_name', companyName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('cellphone', cellphone);
    formData.append('cnpj', cnpj);
    formData.append('password', password);
    formData.append('status', '0');
    formData.append('cover_img', cover_img.file);
    formData.append('logo_img', logo_img.file);
    formData.append('shipping_tax', (formatShippingTax)); // a variável armazena como inteiro. a divisão é pra separar os centavos
    formData.append('delivery_time', deliveryTime);
    // formData.append('opening_time', openingTime);
    // formData.append('closing_time', closingTime);

    // try {
    //   await api.post('api/store', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   toast('Sucesso!', { position: toast.POSITION.BOTTOM_RIGHT });
    // } catch (error) {
    //   toast('Erro ao cadastrar usuário.', { position: toast.POSITION.BOTTOM_RIGHT });
    // }
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
      <Box>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
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
                          {/* <Link href="/Seller/Perfil/Products"> */}
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
                          <TitleStore>Entrega</TitleStore>
                          <SubtitleStore>
                            Por favor, preencha as informações referentes
                            à entrega da loja:
                            {' '}
                          </SubtitleStore>
                        </TopFormulary>
                        <ItemFormulary>
                          <Text>Taxa de envio: *</Text>
                          <CurrencyInput name="shippingTax" decimalSeparator="," decimalScale="2" allowNegative={false} prefix="R$" value={shippingTax} onChange={handleShippingTaxChange} />
                        </ItemFormulary>

                        <ItemFormulary>
                          <Text>Tempo de entrega em minutos: *</Text>
                          <MaskedInput name="delivery_time" id="delivery_time" value={deliveryTime} onChange={handleDeliveryTimeChange} />
                        </ItemFormulary>
                        <BottomFormulary>
                          <Submit value="submit" onClick={handleNext} sx={{ mr: 1 }}>Continuar</Submit>
                        </BottomFormulary>
                      </StoreFormulary>
                    </StoreBody>
                  </StoreBodyWrapper>
                )}
                {activeStep === 2 && (
                  <WorkingDays form={inform} />
                )}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                {/* <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  VOLTAR
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  PRÓXIMO
                </Button> */}
                {/* {activeStep !== steps.length
                  && (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step
                      {' '}
                      {activeStep + 1}
                      {' '}
                      already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))} */}
              </Box>
            </>
          )}
        </div>
      </Box>
    </>
  );
}
