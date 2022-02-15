import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  StoreBodyWrapper, StoreBody, StoreFormulary, TopFormulary, ItemFormulary,
  DividedItemFormulary, BottomFormulary,
} from '../BodyForms';
import {
  TitleStore, SubtitleStore, Text, SubText, TextBox, Submit,
} from '../FormComponents';
import MaskedInput from '../MasketInput';
import 'react-toastify/dist/ReactToastify.css';
import { CancelSubmit, Buttons } from './styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    maxWidth: 300,
    width: '90%',
    marginTop: '10px',
    marginBottom: '10px',
    height: '25px',
    borderRadius: '5px',
    border: '1px solid #AAABB0',
    background: '#F2F2F2',
    padding: '1px 2px',
    fontFamily: 'Roboto',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
    padding: '5px',
  },
}));

export default function StoreCreate({
  openingTimes, closingTimes, situationStore, setOpening, setClosing, setSituation, handleNext, handleBack,
}) {
  const classes = useStyles();
  const [openingTimeSeg, setOpeningTimeSeg] = useState(openingTimes[0]);
  const [closingTimeSeg, setClosingTimeSeg] = useState(closingTimes[0]);
  const [openingTimeTer, setOpeningTimeTer] = useState(openingTimes[1]);
  const [closingTimeTer, setClosingTimeTer] = useState(closingTimes[1]);
  const [openingTimeQua, setOpeningTimeQua] = useState(openingTimes[2]);
  const [closingTimeQua, setClosingTimeQua] = useState(closingTimes[2]);
  const [openingTimeQui, setOpeningTimeQui] = useState(openingTimes[3]);
  const [closingTimeQui, setClosingTimeQui] = useState(closingTimes[3]);
  const [openingTimeSex, setOpeningTimeSex] = useState(openingTimes[4]);
  const [closingTimeSex, setClosingTimeSex] = useState(closingTimes[4]);
  const [openingTimeSab, setOpeningTimeSab] = useState(openingTimes[5]);
  const [closingTimeSab, setClosingTimeSab] = useState(closingTimes[5]);
  const [openingTimeDom, setOpeningTimeDom] = useState(openingTimes[6]);
  const [closingTimeDom, setClosingTimeDom] = useState(closingTimes[6]);
  const [situationSeg, setSituationSeg] = useState(situationStore[0]);
  const [situationTer, setSituationTer] = useState(situationStore[1]);
  const [situationQua, setSituationQua] = useState(situationStore[2]);
  const [situationQui, setSituationQui] = useState(situationStore[3]);
  const [situationSex, setSituationSex] = useState(situationStore[4]);
  const [situationSab, setSituationSab] = useState(situationStore[5]);
  const [situationDom, setSituationDom] = useState(situationStore[6]);

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
    if (event.target.value === 'Fechado') {
      setOpeningTimeSeg('00:00');
      setClosingTimeSeg('00:00');
    }
  };
  const handleChangeTer = (event) => {
    setSituationTer(event.target.value);
    if (event.target.value === 'Fechado') {
      setOpeningTimeTer('00:00');
      setClosingTimeTer('00:00');
    }
  };
  const handleChangeQua = (event) => {
    setSituationQua(event.target.value);
    if (event.target.value === 'Fechado') {
      setOpeningTimeQua('00:00');
      setClosingTimeQua('00:00');
    }
  };
  const handleChangeQui = (event) => {
    setSituationQui(event.target.value);
    if (event.target.value === 'Fechado') {
      setOpeningTimeQui('00:00');
      setClosingTimeQui('00:00');
    }
  };
  const handleChangeSex = (event) => {
    setSituationSex(event.target.value);
    if (event.target.value === 'Fechado') {
      setOpeningTimeSex('00:00');
      setClosingTimeSex('00:00');
    }
  };
  const handleChangeSab = (event) => {
    setSituationSab(event.target.value);
    if (event.target.value === 'Fechado') {
      setOpeningTimeSab('00:00');
      setClosingTimeSab('00:00');
    }
  };
  const handleChangeDom = (event) => {
    setSituationDom(event.target.value);
    if (event.target.value === 'Fechado') {
      setOpeningTimeDom('00:00');
      setClosingTimeDom('00:00');
    }
  };

  const opening = [
    openingTimeSeg,
    openingTimeTer,
    openingTimeQua,
    openingTimeQui,
    openingTimeSex,
    openingTimeSab,
    openingTimeDom,
  ];
  const closing = [
    closingTimeSeg,
    closingTimeTer,
    closingTimeQua,
    closingTimeQui,
    closingTimeSex,
    closingTimeSab,
    closingTimeDom,
  ];
  const situation = [
    situationSeg,
    situationTer,
    situationQua,
    situationQui,
    situationSex,
    situationSab,
    situationDom,
  ];

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

  async function handleSubmit(event) {
    event.preventDefault();
    if (situationSeg === '' || situationTer === '' || situationQua === ''
      || situationQui === '' || situationSex === ''
      || situationSab === '' || situationDom === '') {
      toast('Defina o Status de funcionamento para todos os dias da semana!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if ((openingTimeSeg === closingTimeSeg && situationSeg === 'Aberto') || (openingTimeTer === closingTimeTer && situationTer === 'Aberto')
      || (openingTimeQua === closingTimeQua && situationQua === 'Aberto') || (openingTimeQui === closingTimeQui && situationQui === 'Aberto')
      || (openingTimeSex === closingTimeSex && situationSex === 'Aberto') || (openingTimeSab === closingTimeSab && situationSab === 'Aberto')
      || (openingTimeDom === closingTimeDom && situationDom === 'Aberto')) {
      toast('Horários de abertura e encerramento precisam ser diferentes nos dias com Status "Aberto"!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    if (parseInt(openingTimeSeg.substring(0, 2), 10) > 23 || parseInt(closingTimeSeg.substring(0, 2), 10) > 23 || parseInt(openingTimeSeg.substring(3, 5), 10) > 59 || parseInt(closingTimeSeg.substring(3, 5), 10) > 59
      || parseInt(openingTimeTer.substring(0, 2), 10) > 23 || parseInt(closingTimeTer.substring(0, 2), 10) > 23 || parseInt(openingTimeTer.substring(3, 5), 10) > 59 || parseInt(closingTimeTer.substring(3, 5), 10) > 59
      || parseInt(openingTimeQua.substring(0, 2), 10) > 23 || parseInt(closingTimeQua.substring(0, 2), 10) > 23 || parseInt(openingTimeQua.substring(3, 5), 10) > 59 || parseInt(closingTimeQua.substring(3, 5), 10) > 59
      || parseInt(openingTimeQui.substring(0, 2), 10) > 23 || parseInt(closingTimeQui.substring(0, 2), 10) > 23 || parseInt(openingTimeQui.substring(3, 5), 10) > 59 || parseInt(closingTimeQui.substring(3, 5), 10) > 59
      || parseInt(openingTimeSex.substring(0, 2), 10) > 23 || parseInt(closingTimeSex.substring(0, 2), 10) > 23 || parseInt(openingTimeSex.substring(3, 5), 10) > 59 || parseInt(closingTimeSex.substring(3, 5), 10) > 59
      || parseInt(openingTimeSab.substring(0, 2), 10) > 23 || parseInt(closingTimeSab.substring(0, 2), 10) > 23 || parseInt(openingTimeSab.substring(3, 5), 10) > 59 || parseInt(closingTimeSab.substring(3, 5), 10) > 59
      || parseInt(openingTimeDom.substring(0, 2), 10) > 23 || parseInt(closingTimeDom.substring(0, 2), 10) > 23 || parseInt(openingTimeDom.substring(3, 5), 10) > 59 || parseInt(closingTimeDom.substring(3, 5), 10) > 59) {
      toast('Favor inserir horários entre 00:00 e 23:59!', { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
    setOpening(opening);
    setClosing(closing);
    setSituation(situation);
    handleNext(2);
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
                <Text>Dia</Text>
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
                <TextBox type="text" value="Segunda" />
              </ItemFormulary>

              <ItemFormulary>

                <Select
                  className={classes.formControl}
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
                <TextBox type="text" value="Terça" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  className={classes.formControl}
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
                <TextBox type="text" value="Quarta" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  className={classes.formControl}
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
                <TextBox type="text" value="Quinta" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  className={classes.formControl}
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
                <TextBox type="text" value="Sexta" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  className={classes.formControl}
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
                <TextBox type="text" value="Sábado" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  className={classes.formControl}
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
                <TextBox type="text" value="Domingo" />
              </ItemFormulary>

              <ItemFormulary>
                <Select
                  className={classes.formControl}
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

            <Buttons>
              <CancelSubmit onClick={() => handleBack(0)}>Voltar</CancelSubmit>
              <Submit value="submit" onClick={handleSubmit}>Proximo</Submit>
            </Buttons>
          </StoreFormulary>
        </StoreBody>
      </StoreBodyWrapper>
    </>
  );
}
