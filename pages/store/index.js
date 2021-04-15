import React from 'react';
import Image from 'next/image';
// import axios from 'axios';
// import Link from 'next/link';
import Header from '../../src/components/Header';
import {
  Body, Formulary, TopFormulary, ItemFormulary, IEItemFormulary, DividedItemFormulary, BottomFormulary,
} from '../../src/components/BodyForms';
import {
  TitleStore, SubtitleStore, Text, Text2, SubText, TextBox, Select, Submit, Divider,
} from '../../src/components/FormComponents';

const Store = ({ email }) => (
  <div>
    <Header />
    <Body>
      <Body.Left>
        <Image src="/images/BannerLogin.jpg" alt="" width="600" height="400" />
      </Body.Left>

      <Divider width="1" display="block" size="700" />

      <Body.Right>
        <Formulary>
          <TopFormulary>
            <TitleStore>Bem vindo de volta!</TitleStore>
            <SubtitleStore>Por favor, entre com seu email e sua senha:</SubtitleStore>
          </TopFormulary>

          <ItemFormulary>
            <Text>Razão Social: *</Text>
            <TextBox type="text" placeholder="">{email}</TextBox>
          </ItemFormulary>

          <ItemFormulary>
            <Text>Email: *</Text>
            <TextBox type="text" placeholder="">{email}</TextBox>
          </ItemFormulary>

          <DividedItemFormulary>
            <ItemFormulary>
              <Text>DDD + Celular: *</Text>
              <TextBox type="text" placeholder="(31)99999-9999">{}</TextBox>
            </ItemFormulary>
            <ItemFormulary>
              <Text>DDD + Telefone: *</Text>
              <TextBox type="text" placeholder="(31)99999-9999">{}</TextBox>
            </ItemFormulary>
          </DividedItemFormulary>

          <DividedItemFormulary>
            <ItemFormulary>
              <Text>CNPJ: *</Text>
              <TextBox type="text" placeholder="">{}</TextBox>
            </ItemFormulary>
            <ItemFormulary>
              <Text>CEP: *</Text>
              <TextBox type="text" placeholder="">{}</TextBox>
            </ItemFormulary>
          </DividedItemFormulary>

          <ItemFormulary>
            <Text>Endereço: *</Text>
            <TextBox type="text" placeholder="">{}</TextBox>
          </ItemFormulary>

          <DividedItemFormulary>
            <ItemFormulary>
              <Text>Senha: *</Text>
              <TextBox type="password" placeholder="">{}</TextBox>
            </ItemFormulary>
            <ItemFormulary>
              <Text>Confirma Senha: *</Text>
              <TextBox type="password" placeholder="">{}</TextBox>
            </ItemFormulary>
          </DividedItemFormulary>

          <DividedItemFormulary>
            <ItemFormulary>
              <DividedItemFormulary>
                <input type="checkbox" />
                <SubText>Visualizar senha</SubText>
              </DividedItemFormulary>
            </ItemFormulary>
            <ItemFormulary>
              <DividedItemFormulary>
                <input type="checkbox" />
                <SubText>Visualizar Confirmar senha</SubText>
              </DividedItemFormulary>
            </ItemFormulary>
          </DividedItemFormulary>

          <IEItemFormulary>
            <Text>Isento de IE: *</Text>
            <input type="radio" />
            <Text2>Sim</Text2>
            <input type="radio" />
            <Text2>Não</Text2>
          </IEItemFormulary>

          <DividedItemFormulary>
            <ItemFormulary>
              <Text>IE: *   </Text>
              <TextBox type="text" placeholder="">{email}</TextBox>
            </ItemFormulary>
            <ItemFormulary>
              <Text>Estado da IE: *</Text>
              <Select name="estado" id="estado">
                <option value="MG">MG</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
              </Select>
            </ItemFormulary>
          </DividedItemFormulary>

          <ItemFormulary>
            <SubText>*Os campos com asterisco são obrigatórios</SubText>
          </ItemFormulary>

          <BottomFormulary>
            <Submit value="submit">Finalizar</Submit>
          </BottomFormulary>
        </Formulary>
      </Body.Right>
    </Body>
  </div>
);

Store.getInitialProps = async () => {
  const { response } = await fetch('http://localhost:3000/api/login');
  return { email: response, password: response };
};

export default Store;
