import { useState, useEffect } from 'react';
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
import RegionsDelivery from '../RegionsDelivery';
import WorkingDaysEdit from '../WorkingDaysEdit';
import {
  Edit, MyFormGroup, Name, NumbersForms, DDD, PhoneFormControl,
  DDDFormControl, TimeFormControl, Register, Buttons, FormRegister,
  Submit, CancelSubmit,
} from './styles';

export default function MyStoreDataEdit() {
  const { store, setStore } = useAuth();
  const regionShippingTax = store ? store?.shipping_tax.split(',') : null;
  const regionShippingTime = store ? store?.delivery_time.split(',') : null;
  const [open, setOpen] = useState(false);
  const [company_name, setName] = useState(store.company_name);
  const [ddd, setDdd] = useState(store.phone.substring(0, 2));
  const [phone, setPhone] = useState(store.phone.substring(2));
  const openingTimes = store ? store?.opening_time.split(':') : null;
  const closingTimes = store ? store?.closing_time.split(':') : null;
  const situationStore = store ? store?.working_days.split(',') : null;
  const [page, setPage] = useState(0);
  const [opening, setOpening] = useState(store?.opening_time);
  const [closing, setClosing] = useState(store?.closing_time);
  const [situation, setSituation] = useState(store?.working_days);
  const router = useRouter();

  const RegionsState = {
    barreiroTax: regionShippingTax[0],
    barreiroTime: regionShippingTime[0],
    centroSulTax: regionShippingTax[1],
    centroSulTime: regionShippingTime[1],
    lesteTax: regionShippingTax[2],
    lesteTime: regionShippingTime[2],
    nordesteTax: regionShippingTax[3],
    nordesteTime: regionShippingTime[3],
    noroesteTax: regionShippingTax[4],
    noroesteTime: regionShippingTime[4],
    norteTax: regionShippingTax[5],
    norteTime: regionShippingTime[5],
    oesteTax: regionShippingTax[6],
    oesteTime: regionShippingTime[6],
    pampulhaTax: regionShippingTax[7],
    pampulhaTime: regionShippingTime[7],
    vendaNovaTax: regionShippingTax[8],
    vendaNovaTime: regionShippingTime[8],
  };
  const [dados, setDados] = useState(RegionsState);

  const deliveryTax = [
    dados?.barreiroTax,
    dados?.centroSulTax,
    dados?.lesteTax,
    dados?.nordesteTax,
    dados?.noroesteTax,
    dados?.norteTax,
    dados?.oesteTax,
    dados?.pampulhaTax,
    dados?.vendaNovaTax,
  ];

  const deliveryTime = [
    dados?.barreiroTime,
    dados?.centroSulTime,
    dados?.lesteTime,
    dados?.nordesteTime,
    dados?.noroesteTime,
    dados?.norteTime,
    dados?.oesteTime,
    dados?.pampulhaTime,
    dados?.vendaNovaTime,
  ];

  function addStr(str, index, stringToAdd) {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }

  function handleChange(event, field) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setDados({ ...dados, [field]: event.target.value });
    }
  }
  function handleChangeMoney(event, field) {
    let aux = `${event.target.value}`;
    if (aux.length >= 2) {
      const aux2 = addStr(aux, 2, '.');
      setDados({ ...dados, [field]: aux2 });
    } else {
      if (aux === '') aux = '0';
      setDados({ ...dados, [field]: aux });
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = (handlePage) => {
    setPage(handlePage);
  };

  const handleBack = (handlePage) => {
    setPage(handlePage);
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
      opening_time: String(opening),
      closing_time: String(closing),
      situation: String(situation),
      shipping_tax: String(deliveryTax),
      delivery_time: String(deliveryTime),
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
            {page === 0 && (
              <>
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
                <Buttons>
                  <CancelSubmit onClick={handleClose}>Cancelar</CancelSubmit>
                  <Submit onClick={() => handleNext(1)}>Próximo</Submit>
                </Buttons>
              </>
            )}
            {page === 1 && (
              <>
                <MyFormGroup>
                  {openingTimes && closingTimes && situation && (
                  <WorkingDaysEdit
                    openingTimes={openingTimes}
                    closingTimes={closingTimes}
                    situationStore={situationStore}
                    setOpening={setOpening}
                    setClosing={setClosing}
                    setSituation={setSituation}
                  />
                  )}
                </MyFormGroup>
                <Buttons>
                  <CancelSubmit onClick={() => handleBack(0)}>Voltar</CancelSubmit>
                  <Submit onClick={() => handleNext(2)}>Próximo</Submit>
                </Buttons>
              </>
            )}
            {page === 2 && (
              <>
                <MyFormGroup>
                  <RegionsDelivery
                    dados={dados}
                    handleChange={handleChange}
                    handleChangeMoney={handleChangeMoney}
                  />
                </MyFormGroup>
                <Buttons>
                  <CancelSubmit onClick={() => handleBack(1)}>Voltar</CancelSubmit>
                  <Submit onClick={handleSubmit}>Atualizar</Submit>
                </Buttons>
              </>
            )}
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
