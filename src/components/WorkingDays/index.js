import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Header from '../Header';
import {
  StoreBodyWrapper, StoreBody, StoreFormulary, TopFormulary, ItemFormulary,
  DividedItemFormulary, BottomFormulary,
} from '../BodyForms';
import {
  Img, UploadContainer, ImageSelected, Label, CurrencyInput,
} from './styles';
import {
  TitleStore, SubtitleStore, Text, SubText, TextBox, Submit,
} from '../FormComponents';
import WeekDays from '../../utils/WeekDays';
import MaskedInput from '../MasketInput';
import StoreStatus from '../StoreStatus';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({ baseURL: 'http://localhost:3000/' });
toast.configure();

export default function StoreCreate({ detail }) {
  console.log('🚀 ~ file: index.js ~ line 29 ~ StoreCreate ~ info', detail);
  const [openingTimeSeg, setOpeningTimeSeg] = useState('');
  const [closingTimeSeg, setClosingTimeSeg] = useState('');
  const [openingTimeTer, setOpeningTimeTer] = useState('');
  const [closingTimeTer, setClosingTimeTer] = useState('');
  const [openingTimeQua, setOpeningTimeQua] = useState('');
  const [closingTimeQua, setClosingTimeQua] = useState('');
  const [openingTimeQui, setOpeningTimeQui] = useState('');
  const [closingTimeQui, setClosingTimeQui] = useState('');
  const [openingTimeSex, setOpeningTimeSex] = useState('');
  const [closingTimeSex, setClosingTimeSex] = useState('');
  const [openingTimeSab, setOpeningTimeSab] = useState('');
  const [closingTimeSab, setClosingTimeSab] = useState('');
  const [openingTimeDom, setOpeningTimeDom] = useState('');
  const [closingTimeDom, setClosingTimeDom] = useState('');
  const [situationSeg, setSituationSeg] = useState('');
  const [situationTer, setSituationTer] = useState('');
  const [situationQua, setSituationQua] = useState('');
  const [situationQui, setSituationQui] = useState('');
  const [situationSex, setSituationSex] = useState('');
  const [situationSab, setSituationSab] = useState('');
  const [situationDom, setSituationDom] = useState('');

  function addStr(str, index, stringToAdd) {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }
  function handleOpeningTimeChangeSeg(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setOpeningTimeSeg(aux2);
  }
  function handleClosingTimeChangeSeg(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setClosingTimeSeg(aux2);
  }
  function handleOpeningTimeChangeTer(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setOpeningTimeTer(aux2);
  }
  function handleClosingTimeChangeTer(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setClosingTimeTer(aux2);
  }
  function handleOpeningTimeChangeQua(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setOpeningTimeQua(aux2);
  }
  function handleClosingTimeChangeQua(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setClosingTimeQua(aux2);
  }
  function handleOpeningTimeChangeQui(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setOpeningTimeQui(aux2);
  }
  function handleClosingTimeChangeQui(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setClosingTimeQui(aux2);
  }
  function handleOpeningTimeChangeSex(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setOpeningTimeSex(aux2);
  }
  function handleClosingTimeChangeSex(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setClosingTimeSex(aux2);
  }
  function handleOpeningTimeChangeSab(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setOpeningTimeSab(aux2);
  }
  function handleClosingTimeChangeSab(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setClosingTimeSab(aux2);
  }
  function handleOpeningTimeChangeDom(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setOpeningTimeDom(aux2);
  }
  function handleClosingTimeChangeDom(event) {
    const aux = `${event.target.value}`;
    const aux2 = addStr(aux, 2, ':');
    setClosingTimeDom(aux2);
  }
  const handleChangeSeg = (event) => {
    setSituationSeg(event.target.value);
  };
  const handleChangeTer = (event) => {
    setSituationTer(event.target.value);
  };
  const handleChangeQua = (event) => {
    setSituationQua(event.target.value);
  };
  const handleChangeQui = (event) => {
    setSituationQui(event.target.value);
  };
  const handleChangeSex = (event) => {
    setSituationSex(event.target.value);
  };
  const handleChangeSab = (event) => {
    setSituationSab(event.target.value);
  };
  const handleChangeDom = (event) => {
    setSituationDom(event.target.value);
  };
  const opening = {
    openingTimeSeg,
    openingTimeTer,
    openingTimeQua,
    openingTimeQui,
    openingTimeSex,
    openingTimeSab,
    openingTimeDom,
  };
  const closing = {
    closingTimeSeg,
    closingTimeTer,
    closingTimeQua,
    closingTimeQui,
    closingTimeSex,
    closingTimeSab,
    closingTimeDom,
  };
  const situation = {
    situationSeg,
    situationTer,
    situationQua,
    situationQui,
    situationSex,
    situationSab,
    situationDom,
  };
  const options = [
    'Aberto',
    'Fechado',
  ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  console.log('🚀 ~ file: index.js ~ line 117 ~ Store ~ opening', opening);
  console.log('🚀 ~ file: index.js ~ line 117 ~ Store ~ opening', closing);
  console.log('🚀 ~ file: index.js ~ line 117 ~ Store ~ opening', situation);

  async function handleSubmit(event) {
    event.preventDefault();
    if (openingTime === closingTime) {
      toast('Horários de abertura e encerramento precisam ser diferentes!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (parseInt(openingTime.substring(0, 2), 10) > 23 || parseInt(closingTime.substring(0, 2), 10) > 23 || parseInt(openingTime.substring(3, 5), 10) > 59 || parseInt(closingTime.substring(3, 5), 10) > 59) {
      toast('Favor inserir horários entre 00:00 e 23:59!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    const formatShippingTax = parseFloat(shippingTax.replace(',', '.').split('R$')[1]);
    const formData = new FormData();

    formData.append('opening_time', openingTime);
    formData.append('closing_time', closingTime);

    try {
      await api.post('api/store', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast('Sucesso!', { position: toast.POSITION.BOTTOM_RIGHT });
    } catch (error) {
      toast('Erro ao cadastrar usuário.', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  return (
    <>
      <StoreBodyWrapper>
        <StoreBody>
          <StoreFormulary>
            <TopFormulary>
              <TitleStore>Horários de Funcionamento</TitleStore>
              <SubtitleStore>
                Por favor, preencha as informações referentes
                aos dias e horários de funcionamento de sua loja:
                {' '}
              </SubtitleStore>
            </TopFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>Dia *</Text>
              </ItemFormulary>

              <ItemFormulary>
                <Text>Status *</Text>
              </ItemFormulary>

              <ItemFormulary>
                <Text>Abertura *</Text>
              </ItemFormulary>

              <ItemFormulary>
                <Text>Fechamento *</Text>
              </ItemFormulary>
            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" id="email" value="Segunda" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  labelId="demo-mutiple-option-label"
                  id="demo-mutiple-option"
                  value={situationSeg}
                  onChange={handleChangeSeg}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="opening_time" id="opening_time" mask="99:99" value={openingTimeSeg} onChange={handleOpeningTimeChangeSeg} />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="closing_time" id="closing_time" mask="99:99" value={closingTimeSeg} onChange={handleClosingTimeChangeSeg} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" id="email" value="Terça" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  labelId="demo-mutiple-option-label"
                  id="demo-mutiple-option"
                  value={situationTer}
                  onChange={handleChangeTer}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="opening_time" id="opening_time" mask="99:99" value={openingTimeTer} onChange={handleOpeningTimeChangeTer} />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="closing_time" id="closing_time" mask="99:99" value={closingTimeTer} onChange={handleClosingTimeChangeTer} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" id="email" value="Quarta" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  labelId="demo-mutiple-option-label"
                  id="demo-mutiple-option"
                  value={situationQua}
                  onChange={handleChangeQua}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="opening_time" id="opening_time" mask="99:99" value={openingTimeQua} onChange={handleOpeningTimeChangeQua} />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="closing_time" id="closing_time" mask="99:99" value={closingTimeQua} onChange={handleClosingTimeChangeQua} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" id="email" value="Quinta" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  labelId="demo-mutiple-option-label"
                  id="demo-mutiple-option"
                  value={situationQui}
                  onChange={handleChangeQui}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="opening_time" id="opening_time" mask="99:99" value={openingTimeQui} onChange={handleOpeningTimeChangeQui} />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="closing_time" id="closing_time" mask="99:99" value={closingTimeQui} onChange={handleClosingTimeChangeQui} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" id="email" value="Sexta" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  labelId="demo-mutiple-option-label"
                  id="demo-mutiple-option"
                  value={situationSex}
                  onChange={handleChangeSex}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="opening_time" id="opening_time" mask="99:99" value={openingTimeSex} onChange={handleOpeningTimeChangeSex} />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="closing_time" id="closing_time" mask="99:99" value={closingTimeSex} onChange={handleClosingTimeChangeSex} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" id="email" value="Sábado" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  labelId="demo-mutiple-option-label"
                  id="demo-mutiple-option"
                  value={situationSab}
                  onChange={handleChangeSab}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="opening_time" id="opening_time" mask="99:99" value={openingTimeSab} onChange={handleOpeningTimeChangeSab} />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="closing_time" id="closing_time" mask="99:99" value={closingTimeSab} onChange={handleClosingTimeChangeSab} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" id="email" value="Domingo" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  labelId="demo-mutiple-option-label"
                  id="demo-mutiple-option"
                  value={situationDom}
                  onChange={handleChangeDom}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="opening_time" id="opening_time" mask="99:99" value={openingTimeDom} onChange={handleOpeningTimeChangeDom} />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="closing_time" id="closing_time" mask="99:99" value={closingTimeDom} onChange={handleClosingTimeChangeDom} />
              </ItemFormulary>

            </DividedItemFormulary>

            <ItemFormulary>
              <SubText>*Os campos com asterisco são obrigatórios</SubText>
            </ItemFormulary>

            <BottomFormulary>
              <Link href="/Seller/Perfil/Products">
                <Submit value="submit" onClick={handleSubmit}>Finalizar</Submit>
              </Link>
            </BottomFormulary>
          </StoreFormulary>
        </StoreBody>
      </StoreBodyWrapper>
    </>
  );
}
export async function getServerSideProps({ query }) {
  const { detail } = query;
  return { props: { detail } };
}
