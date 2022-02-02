import React from 'react';
import 'antd/dist/antd.css';
import { toast } from 'react-toastify';
import {
  StoreBodyWrapper, StoreBody, StoreFormulary, TopFormulary, ItemFormulary,
  DividedItemFormulary,
} from '../BodyForms';
import {
  TitleStore, SubtitleStore, Text, SubText, TextBox,
} from '../FormComponents';
import MaskedInput from '../MasketInput';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function StoreCreate({ dados, handleChange, handleChangeMoney }) {
  return (
    <>
      <StoreBodyWrapper>
        <StoreBody>
          <StoreFormulary>
            <TopFormulary>
              <TitleStore>Regiões de Entrega</TitleStore>
              <SubtitleStore>
                Por favor, preencha as informações referentes
                as regiões de entrega de sua loja:
                {' '}
              </SubtitleStore>
            </TopFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <Text>Região</Text>
              </ItemFormulary>

              <ItemFormulary>
                <Text>Taxa de entrega *</Text>
              </ItemFormulary>

              <ItemFormulary>
                <Text>Tempo estimado (minutos) *</Text>
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Barreiro" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="BarreiroTax" id="BarreiroTax" mask="R$ 99,99" value={dados.barreiroTax} onChange={(e) => handleChangeMoney(e, 'barreiroTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="barreiroTime" id="barreiroTime" value={dados.barreiroTime} onChange={(e) => handleChange(e, 'barreiroTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Centro-Sul" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="centroSulTax" id="centroSulTax" mask="R$ 99,99" value={dados.centroSulTax} onChange={(e) => handleChangeMoney(e, 'centroSulTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="centroSulTime" id="centroSulTime" mask="99:99" value={dados.centroSulTime} onChange={(e) => handleChange(e, 'centroSulTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>
              <ItemFormulary>
                <TextBox type="text" value="Leste" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="lesteTax" id="lesteTax" mask="R$ 99,99" value={dados.lesteTax} onChange={(e) => handleChangeMoney(e, 'lesteTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="lesteTime" id="lesteTime" mask="99:99" value={dados.lesteTime} onChange={(e) => handleChange(e, 'lesteTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Nordeste" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="nordesteTax" id="nordesteTax" mask="R$ 99,99" value={dados.nordesteTax} onChange={(e) => handleChangeMoney(e, 'nordesteTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="nordesteTime" id="nordesteTime" mask="99:99" value={dados.nordesteTime} onChange={(e) => handleChange(e, 'nordesteTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Noroeste" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="noroesteTax" id="noroesteTax" mask="R$ 99,99" value={dados.noroesteTax} onChange={(e) => handleChangeMoney(e, 'noroesteTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="noroesteTime" id="noroesteTime" mask="99:99" value={dados.noroesteTime} onChange={(e) => handleChange(e, 'noroesteTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Norte" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="norteTax" id="norteTax" mask="R$ 99,99" value={dados.norteTax} onChange={(e) => handleChangeMoney(e, 'norteTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="norteTime" id="norteTime" mask="99:99" value={dados.norteTime} onChange={(e) => handleChange(e, 'norteTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Oeste" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="oesteTax" id="oesteTax" mask="R$ 99,99" value={dados.oesteTax} onChange={(e) => handleChangeMoney(e, 'oesteTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="oesteTime" id="oesteTime" mask="99:99" value={dados.oesteTime} onChange={(e) => handleChange(e, 'oesteTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Pampulha" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="pampulhaTax" id="pampulhaTax" mask="R$ 99,99" value={dados.pampulhaTax} onChange={(e) => handleChangeMoney(e, 'pampulhaTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="pampulhaTime" id="pampulhaTime" mask="99:99" value={dados.pampulhaTime} onChange={(e) => handleChange(e, 'pampulhaTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <DividedItemFormulary>

              <ItemFormulary>
                <TextBox type="text" value="Venda Nova" />
              </ItemFormulary>

              <ItemFormulary>
                <MaskedInput name="vendaNovaTax" id="vendaNovaTax" mask="R$ 99,99" value={dados.vendaNovaTax} onChange={(e) => handleChangeMoney(e, 'vendaNovaTax')} />
              </ItemFormulary>

              <ItemFormulary>
                <TextBox name="vendaNovaTime" id="vendaNovaTime" mask="99:99" value={dados.vendaNovaTime} onChange={(e) => handleChange(e, 'vendaNovaTime')} />
              </ItemFormulary>

            </DividedItemFormulary>

            <ItemFormulary>
              <SubText>*Os campos com asterisco são obrigatórios</SubText>
            </ItemFormulary>
          </StoreFormulary>
        </StoreBody>
      </StoreBodyWrapper>
    </>
  );
}
