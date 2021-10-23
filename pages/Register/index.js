import { useState } from 'react';
import Link from 'next/link';
import {
  FormControl, FormLabel, FormGroup,
} from 'react-bootstrap';
import Image from 'next/image';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import api from '../../src/utils/api';
import { Body } from '../../src/components/BodyForms';
import WindowDivider from '../../src/components/WindowDivider';
import 'react-toastify/dist/ReactToastify.css';
import {
  WordFormGroup, MyFormGroup, Phone, Pass, Name, NumbersForms, DDD,
  EmailFormControl, PhoneFormControl, DDDFormControl, Subtitle, Register,
  Buttons, FormRegister, Submit, ButtonLogin,
} from './styles';

toast.configure();

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [ddd, setDdd] = useState('');
  const [telephone, setTelephone] = useState('');
  const [date, setDate] = useState(new Date());
  const router = useRouter();
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }
  function handleCpfChange(event) {
    setCpf(event.target.value);
  }
  function handleDddChange(event) {
    setDdd(event.target.value);
  }
  function handleTelephoneChange(event) {
    setTelephone(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const regex = new RegExp('.+@.+..+');
    if (!regex.test(email)) {
      toast('Email inválido!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (password !== confirmPassword) {
      toast('A senha inserida deve ser a mesma', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (cpf?.length !== 11) {
      toast('CPF inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (telephone?.length !== 9) {
      toast('Número inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (ddd?.length !== 2) {
      toast('DDD inválido', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    const body = {
      type: 'buyer',
      name,
      birth_date: date,
      email,
      password,
      cpf,
      phone: ddd + telephone,
    };
    try {
      const Validate = await api.post('/api/user', body);
      console.log(Validate.data);
      toast('Sucesso', { position: toast.POSITION.BOTTOM_RIGHT });
      router.push('/login');
    } catch (error) {
      console.error(error);
      toast('Erro', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  return (
    <>
      <Body>
        <Body.Left>

          <Image src="/images/doguinho.jpg" alt="" width="420" height="363" />
        </Body.Left>
        <WindowDivider />
        <Body.Right>
          <Register>
            <FormRegister>

              <Subtitle>Vamos Começar?</Subtitle>
              <Name>
                <MyFormGroup>
                  <FormLabel>Nome</FormLabel>
                  <EmailFormControl
                    type="text"
                    placeholder="Nome"
                    required
                    value={name}
                    onChange={handleNameChange}
                  />
                </MyFormGroup>
              </Name>

              <MyFormGroup>
                <FormLabel>Data de Nascimento</FormLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    value={date}
                    onChange={(newDate) => { setDate(newDate); }}
                    variant="inline"
                    format="dd/MM/yyyy"
                  />
                </MuiPickersUtilsProvider>

              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>Email</FormLabel>
                <EmailFormControl
                  type="email"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  title="Digite um email válido"
                  value={email}
                  onChange={handleEmailChange}
                />
              </MyFormGroup>
              <Pass>
                <MyFormGroup>
                  <FormLabel>Senha</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Senha"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Deve conter pelo menos um número e uma letra maiúscula e minúscula e pelo menos 8 ou mais caracteres"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </MyFormGroup>
                <WordFormGroup>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Senha"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </WordFormGroup>
              </Pass>
              <NumbersForms>
                <MyFormGroup>
                  <FormLabel>CPF</FormLabel>
                  <FormControl
                    type="number"
                    placeholder="CPF"
                    pattern="[0-9]$"
                    required
                    title="Digite um CPF válido"
                    value={cpf}
                    onChange={handleCpfChange}
                  />
                </MyFormGroup>
                <Phone>
                  <DDD>
                    <MyFormGroup>
                      <FormLabel>DDD</FormLabel>
                      <DDDFormControl
                        type="numbers"
                        placeholder="(00)"
                        pattern="[0-9]$"
                        required
                        value={ddd}
                        onChange={handleDddChange}
                      />
                    </MyFormGroup>
                  </DDD>
                  <MyFormGroup>
                    <FormLabel>Telefone</FormLabel>
                    <PhoneFormControl
                      type="number"
                      placeholder="00000-0000"
                      pattern="[0-9]$"
                      required
                      value={telephone}
                      onChange={handleTelephoneChange}
                    />
                  </MyFormGroup>
                </Phone>
              </NumbersForms>
              <Buttons>
                <Submit onClick={handleSubmit}>Cadastrar</Submit>

                <br />
                <FormGroup>
                  <FormLabel align="center">
                    Você já tem Cadastro?
                    <Link href="/login">
                      <ButtonLogin>Login</ButtonLogin>
                    </Link>
                  </FormLabel>
                </FormGroup>
              </Buttons>
            </FormRegister>

          </Register>
        </Body.Right>

      </Body>
    </>
  );
}
