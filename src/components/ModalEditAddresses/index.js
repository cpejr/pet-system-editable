import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { notification } from 'antd';
import {
  FormControl, FormLabel,
} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import WindowDivider from '../WindowDivider';
import api from '../../utils/api';
import Title from '../Title';
import {
  AddressModal, Buttons, CancelSubmit,
  FormRegister, MyFormGroup, Name, Register, SobreFormGroup, Submit, Body,
} from './styles';

const Espaçamento = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin-bottom:1%;
@media(max-width:860px){
        flex-direction:column;
    } 
`;

Espaçamento.Col1 = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:30%;
font-family:Quicksand;
@media(max-width:860px){
        width:100%;
        font-size:16px;
    } 
`;

export default function ModalEditAddresses(addressId) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit() {
    if (zipcode?.length !== 8) {
      alert('CEP inválido');
      return;
    }
    if (address_num?.length > 4 || address_num?.length <= 0) {
      alert('Número inválido');
      return;
    }
    const body = {
      address_id: addressId.address_id,
      street,
      address_num,
      district,
      city,
      zipcode,
      state,
    };
    try {
      api.put('/address/', body);
      notification.open({
        message: 'Sucesso!',
        description: 'Alteraçao realizada com sucesso.',
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
        description: 'Erro ao atualizar dados.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
    router.push('/User/Perfil/MyAdresses');
  }

  const [street, setStreet] = useState();
  const [address_num, setNumber] = useState();
  const [district, setDistrict] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipcode] = useState();
  const [state, setState] = useState();
  const [complement, setComplement] = useState();

  async function loadAddress() {
    try {
      const response = await api.get(`/address/${addressId.address_id}`);
      setStreet(response.data.street);
      setNumber(response.data.address_num);
      setDistrict(response.data.district);
      setCity(response.data.city);
      setZipcode(response.data.zipcode);
      setState(response.data.state);
      setComplement(response.data.complement);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    loadAddress();
  }, []);

  const body = (
    <AddressModal>
      <Body>
        <WindowDivider />
        <Register>
          <FormRegister>
            <Title>Editar endereço</Title>
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
                  onChange={(e) => setNeighbourhood(e.target.value)}
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
                placeholder="Complemento"
                required
                value={complement}
                onChange={(e) => setCity(e.target.value)}
              />
            </MyFormGroup>
            <Buttons>
              <CancelSubmit onClick={handleClose}>Cancelar</CancelSubmit>
              <Submit onClick={handleSubmit}>Atualizar</Submit>
            </Buttons>
          </FormRegister>
        </Register>
      </Body>
    </AddressModal>
  );
  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Editar</Button>
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
