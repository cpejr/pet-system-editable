import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useRouter } from 'next/router';
import {
  StoreBodyWrapper, StoreBody, StoreFormulary, TopFormulary, ItemFormulary,
  DividedItemFormulary, BottomFormulary,
} from '../BodyForms';
import {
  TitleStore, SubtitleStore, Text, SubText, TextBox, Submit,
} from '../FormComponents';
import MaskedInput from '../MasketInput';
import 'react-toastify/dist/ReactToastify.css';

export default function StoreCreate({ info, opening, closing, Situation }) {
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

            <BottomFormulary>
              <Submit value="submit" onClick={handleSubmit}>Finalizar</Submit>
            </BottomFormulary>
          </StoreFormulary>
        </StoreBody>
      </StoreBodyWrapper>
    </>
  );
}
