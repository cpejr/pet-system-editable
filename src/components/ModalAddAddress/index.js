import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { notification } from 'antd';
import { useRouter } from 'next/router';

import {
  FormControl, FormLabel,
} from 'react-bootstrap';
import Link from 'next/link';
import Title from '../Title';
import api from '../../utils/api';

import 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import WindowDivider from '../WindowDivider';
import {
  AddressModal, ButtonAdd, Buttons, CancelSubmit, DDD, DDDFormControl,
  FormRegister, MyFormGroup, Name, NumbersForms, Pass, Phone,
  PhoneFormControl, Register, SobreFormGroup, Submit, Subtitle, Body,
} from './styles';

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
    display: 'flex',
    position: 'absolute',
    width: '439px',
    height: 'fit-content',
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
    <AddressModal>
      <Body>
        <WindowDivider />
        <Register>
          <FormRegister>
            <Title>Formulário de endereço</Title>
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
            <Name>
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
              <SobreFormGroup>
                <FormLabel>Cep:</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Cep"
                  required
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </SobreFormGroup>
            </Name>
            <Name>
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
              <SobreFormGroup>
                <FormLabel>Estado:</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Estado"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </SobreFormGroup>
            </Name>
            <Buttons>
              <CancelSubmit onClick={handleClose}>Cancelar</CancelSubmit>
              <Submit onClick={handleSubmit}>Adicionar</Submit>
            </Buttons>
          </FormRegister>
        </Register>
      </Body>
    </AddressModal>
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
