import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import { useRouter } from 'next/router';

import {
  Button, Form, FormControl, FormLabel, FormGroup,
} from 'react-bootstrap';
import Link from 'next/link';

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Body } from '../BodyForms';
import WindowDivider from '../WindowDivider';

const AddressModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  @media (max-width: 1190px) {
    flex-direction: column;
    overflow: auto;
  }
`;

// AddProductsContainer.Col1 = styled.div`
// display:flex;
// align-items:center;
// justify-content:center;
// width:70%;
// flex-direction:column;
// @media(max-width:1190px){
//   width:100%;
// }
// `;

const DivInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TitleModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 5%;
  @media (max-width: 860px) {
    width: 100%;
    font-size: 18px;
  }
`;

const Espaçamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1%;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

Espaçamento.Col1 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-family: Roboto;
  @media (max-width: 860px) {
    width: 100%;
    font-size: 16px;
  }
`;

const InputNameGroup = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  font-family: Roboto;
  height: 40px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  @media (max-width: 860px) {
    width: 100%;
    font-size: 12px;
  }
`;

const ButtonConfirm = styled.button`
display:flex;
margin-top: 50px;
height: 55px;
width: 200px;
font-family: Roboto;
font-size: 18px;
font-weight: 300;
background-color: ${({ theme }) => theme.colors.darkGreen};
color: white;
border: 0;
border-radius: 5px;
align-items: center;
text-align: center;
transform: translate(0%,-50%);
justify-content: center;
text-align: center;
margin-top:10%;
cursor: pointer;
    }
    @media(max-width:860px){
        width:150px;
    } 
`;

const AddGroup = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.mediumGreen};
  border: 0;
  cursor: pointer;
  outline: none;
  margin-top: 5%;
  margin-bottom: 2%;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

const WordFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;
const SobreFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;

const MyFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Phone = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

const Pass = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
`;
const NumbersForms = styled.div`
  flex-direction: row;
  display: flex;
`;
const DDD = styled.div`
  flex-direction: row;
  display: flex;
  margin-right: 10px;
`;
const EmailFormControl = styled(FormControl)`
  display: flex;
  width: 430px;
`;
const PhoneFormControl = styled(FormControl)`
  display: flex;
  width: 140px;
`;
const DDDFormControl = styled(FormControl)`
  display: flex;
  width: 55px;
  font-size: 15px;
  flex-direction: row;
`;

const Subtitle = styled.p`
  margin-top: 40px;
  display: flex;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 500;
`;

const Register = styled.div`
  border: 1px solid;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FormRegister = styled(Form)``;

const Submit = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 150px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelSubmit = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 150px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.darkRed};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

const ContainerDatas = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const ButtonAdd = styled(Button)`
display:flex;
height: 70px;
width: 250px;
font-family: Quicksand;
font-size: 25px;
font-weight: 300;
background-color: ${({ theme }) => theme.colors.darkGreen};
color: white;
border: 0;
border-radius: 5px;
align-items: center;
text-align: center;
margin-top:2%;
margin-botton:2%;
transform: translate(0%,-50%);
justify-content: center;
text-align: center;
cursor: pointer;
    }
    @media(max-width:860px){
        width:150px;
    } 
`;

const BoxDatas = styled.div`
  display: flex;
  font: 1.5rem Roboto;
  flex-direction: column;
  width: 65%;
  border-color: black;
  border-radius: 5px;
  align-items: left;
  line-height: 100%;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  @media (max-width: 976px) {
    width: 100%;
    margin-bottom: 2%;
  }
  @media (max-width: 560px) {
    width: 80%;
    font-size: 87.5%;
  }
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '65vw',
    height: '60%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalAddProducts() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleState = () => {
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');

  async function handleSubmit() {
    const body = {
      street,
      number,
      neighbourhood,
      city,
      cep,
      state,
    };

    try {
      api.post('/address/', body);
      notification.open({
        message: 'Sucesso!',
        description: 'Endereço criado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.error(error);
      notification.open({
        message: 'Erro!',
        description: 'Erro ao criar endereço.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
    router.push('/User/Perfil/MyDatas');
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AddressModal>
        <Body>
          <WindowDivider />
          <Body.Right>
            <Register>
              <FormRegister>
                <Subtitle>Formulário de endereço</Subtitle>
                <Name>
                  <MyFormGroup>
                    <FormLabel>Rua:</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Rua"
                      required
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </MyFormGroup>
                  <SobreFormGroup>
                    <FormLabel>Numero:</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Numero"
                      required
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </SobreFormGroup>
                </Name>

                <MyFormGroup>
                  <FormLabel>Bairro:</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Bairro"
                    required
                    value={neighbourhood}
                    onChange={(e) => setNeighbourhood(e.target.value)}
                  />
                </MyFormGroup>
                <Pass />
                <NumbersForms>
                  <MyFormGroup>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Cidade"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </MyFormGroup>
                  <Phone>
                    <DDD>
                      <MyFormGroup>
                        <FormLabel>Cep:</FormLabel>
                        <DDDFormControl
                          type="text"
                          placeholder="Cep"
                          required
                          value={cep}
                          onChange={(e) => setCep(e.target.value)}
                        />
                      </MyFormGroup>
                    </DDD>
                    <MyFormGroup>
                      <FormLabel>Estado:</FormLabel>
                      <PhoneFormControl
                        type="text"
                        placeholder="Estado"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </MyFormGroup>
                  </Phone>
                </NumbersForms>
                <Buttons>
                  <Submit onClick={handleSubmit}>Adicionar</Submit>

                  <br />
                  <FormGroup>
                    <FormLabel align="center">
                      <Link href="/User/Perfil/MyDatas" rel="MyDatas">
                        <CancelSubmit>Cancelar</CancelSubmit>
                      </Link>
                    </FormLabel>
                  </FormGroup>
                </Buttons>
              </FormRegister>
            </Register>
          </Body.Right>
        </Body>
      </AddressModal>
    </div>
  );
  return (
    <div>
      <ButtonAdd onClick={handleOpen}>Novo endereço</ButtonAdd>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
