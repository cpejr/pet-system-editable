import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { notification } from 'antd';

import {
  FormControl, FormLabel,
} from 'react-bootstrap';
import Title from '../Title';
import api from '../../utils/api';

import 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import WindowDivider from '../WindowDivider';
import {
  AddressModal, ButtonAdd, Buttons, CancelSubmit,
  FormRegister, MyFormGroup, Name, Register, SobreFormGroup, Submit, Body,
} from './styles';

export default function ModalAddProducts({ loadAddresses }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [street, setStreet] = useState('');
  const [address_num, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');

  async function handleSubmit() {
    const body = {
      street,
      address_num,
      district,
      city,
      zipcode,
      state,
      complement,
    };
    try {
      await api.post('/address/', body);
      setOpen(false);
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
    loadAddresses();
  }

  const body = (
    <AddressModal>
      <Body>
        <WindowDivider />
        <Register>
          <FormRegister>
            <Title>Cadastrar endereço</Title>
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
                  value={address_num}
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
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </MyFormGroup>
              <SobreFormGroup>
                <FormLabel>Cep:</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Cep"
                  required
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
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
            <MyFormGroup>
              <FormLabel>Complemento</FormLabel>
              <FormControl
                type="text"
                placeholder="Complement"
                required
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </MyFormGroup>
            <Buttons>
              <CancelSubmit onClick={handleClose}>Cancelar</CancelSubmit>
              <Submit onClick={() => handleSubmit()}>Adicionar</Submit>
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
