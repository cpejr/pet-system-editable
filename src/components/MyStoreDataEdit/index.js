import React, { useState } from 'react';
import { FormControl, FormLabel } from 'react-bootstrap';
import 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useAuth } from '../../contexts/AuthContext';
import { Body } from '../BodyForms';
import WindowDivider from '../WindowDivider';
import api from '../../utils/api';
import Title from '../Title';
import {
  Edit, MyFormGroup, Name, NumbersForms, DDD, PhoneFormControl,
  DDDFormControl, TimeFormControl, Register, Buttons, FormRegister,
  Submit, CancelSubmit,
} from './styles';

export default function MyStoreDataEdit() {
  const { store, setStore } = useAuth();
  const [open, setOpen] = useState(false);
  const [company_name, setName] = useState(store.company_name);
  const [ddd, setDdd] = useState(store.phone.substring(0, 2));
  const [phone, setPhone] = useState(store.phone.substring(2));
  const [opening_time, setOpenTime] = useState(store.opening_time);
  const [closing_time, setCloseTime] = useState(store.closing_time);
  const [shipping_tax, setShippingTax] = useState(store.shipping_tax);
  const [delivery_time, setDeliveryTime] = useState(store.delivery_time);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(event) {
    setOpen(false);
    event.preventDefault();
    if (phone?.length !== 9) {
      alert('Número inválido');
      return;
    }
    if (ddd?.length !== 2) {
      alert('Número inválido');
      return;
    }
    const body = {
      firebase_id_store: store.firebase_id_store,
      company_name,
      phone: ddd + phone,
      opening_time,
      closing_time,
      shipping_tax,
      delivery_time,
    };
    try {
      api.put(`/store/${store.firebase_id_store}`, body).then((response) => {
        setStore(response.data.store);
      });
      notification.open({
        message: 'Sucesso!',
        description: 'Alteraçao realizada com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
      router.push('/Seller/Perfil/Store');
    } catch (error) {
      console.error('erro aqui', error);
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
  }

  const corpo = (
    <Body>
      <WindowDivider />
      <Body.Right>
        <Register>
          <FormRegister>
            <Title>Formulário de edição</Title>
            <Name>
              <MyFormGroup>
                <FormLabel>Nome</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Nome"
                  required
                  value={company_name}
                  onChange={(e) => setName(e.target.value)}
                />
              </MyFormGroup>
            </Name>
            <NumbersForms>
              <DDD>
                <MyFormGroup>
                  <FormLabel>DDD</FormLabel>
                  <DDDFormControl
                    type="numbers"
                    placeholder="(00)"
                    pattern="[0-9]$"
                    required
                    value={ddd}
                    onChange={(e) => setDdd(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </MyFormGroup>
            </NumbersForms>
            <NumbersForms>
              <MyFormGroup>
                <FormLabel>Abertura</FormLabel>
                <TimeFormControl
                  type="numbers"
                  placeholder="00:00"
                  required
                  value={opening_time}
                  onChange={(e) => setOpenTime(e.target.value)}
                />
              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>Fechamento</FormLabel>
                <TimeFormControl
                  type="numbers"
                  placeholder="00:00"
                  required
                  value={closing_time}
                  onChange={(e) => setCloseTime(e.target.value)}
                />
              </MyFormGroup>
            </NumbersForms>
            <NumbersForms>
              <MyFormGroup>
                <FormLabel>Taxa de Entrega:</FormLabel>
                <TimeFormControl
                  type="numbers"
                  placeholder="0,00"
                  required
                  value={shipping_tax}
                  onChange={(e) => setShippingTax(e.target.value)}
                />
              </MyFormGroup>
              <MyFormGroup>
                <FormLabel>Tempo de Entrega</FormLabel>
                <TimeFormControl
                  type="numbers"
                  placeholder="00:00"
                  required
                  value={delivery_time}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                />
              </MyFormGroup>

            </NumbersForms>

            <Buttons>
              <CancelSubmit onClick={handleClose}>Cancelar</CancelSubmit>
              <Submit onClick={handleSubmit}>Atualizar</Submit>
            </Buttons>
          </FormRegister>
        </Register>
      </Body.Right>
    </Body>
  );
  return (
    <Edit>
      <Button onClick={handleOpen} variant="contained">Editar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {corpo}
      </Modal>
    </Edit>
  );
}
