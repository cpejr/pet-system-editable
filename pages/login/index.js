import React from 'react';
import styled from 'styled-components';
import Header from '../../src/components/Header';
import Body from '../../src/components/Body';

/*
import ImageBanner from '../../src/images/BannerLogin.jpg';

const Image = styled.img`

`;
*/
const Fields = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const FieldsPassword = styled.div`
  display:flex;
  justify-content: e;
`;

const UnderFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ItemBottomHeader = styled.p`
  font-family: Poiret One;
  font-size: 20px;
  color: white;
  margin: 9px;
`;

const Title = styled.h1`
  margin-top: 150px; 
  font-size: 58px;
  font-weight: 700;
  font-family: Roboto;
`;

const Subtitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 100;
`;

const TextBox = styled.input`
    margin-top: 15px;
    height: 30px;
    width: 500px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: #F2F2F2;
`;

const Submit = styled.button`
    margin-top: 30px;
    height: 40px;
    width: 150px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    background-color: #609694;
    color: white;
    border: 0;
    border-radius: 5px;

`;

const ForgotPassword = styled.p`
  font-family: Roboto;
  justify-content: right;
  margin-top: 5px;
  font-weight: 700;
  color: #AA4545;
`;

const CreateAccount = styled.p`
  font-family: Roboto;
  margin-top: 5px;
  font-weight: 700;
`;

CreateAccount.Right = styled.p` 
  font-family: Roboto;
  margin-top: 5px;
  margin-left: 5px;
  font-weight: 700;
  color: #AA4545;
`;

export default function Login() {
  return (
    <div>
      <Header>
        <Header.Top>
          <p>Teste</p>
        </Header.Top>
        <Header.Bottom>
          <ItemBottomHeader>Ração</ItemBottomHeader>
          <ItemBottomHeader>Brinquedos</ItemBottomHeader>
          <ItemBottomHeader>Vasilhas</ItemBottomHeader>
          <ItemBottomHeader>Casinhas</ItemBottomHeader>
          <ItemBottomHeader>Petiscos</ItemBottomHeader>
          <ItemBottomHeader>Shampoo</ItemBottomHeader>
          <ItemBottomHeader>Perfumes</ItemBottomHeader>
          <ItemBottomHeader>Banho</ItemBottomHeader>
          <ItemBottomHeader>Tosa</ItemBottomHeader>
          <ItemBottomHeader>Outros serviços</ItemBottomHeader>
        </Header.Bottom>
      </Header>

      <Body>
        <Body.Left>
          <p>Teste</p>
        </Body.Left>

        <hr width="1" display="block" size="600" />

        <Body.Right>
          <Title>Bem vindo de volta!</Title>
          <Subtitle>Por favor, entre com seu email e sua senha:</Subtitle>

          <Fields>
            <TextBox type="text" placeholder="Email" />
            <TextBox type="text" placeholder="Senha" />
          </Fields>

          <FieldsPassword>
            <ForgotPassword>Esqueceu a senha?</ForgotPassword>
          </FieldsPassword>
          <Submit>Próximo</Submit>
          <UnderFields>
            <CreateAccount>Não tem uma conta?</CreateAccount>
            <CreateAccount.Right>Cadastre-se</CreateAccount.Right>
          </UnderFields>
        </Body.Right>
      </Body>

    </div>
  );
}
