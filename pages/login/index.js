import React from 'react';
import styled from 'styled-components';
import Header from '../../src/components/Header';
import Body from '../../src/components/Body';

const Fields = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 100px; 
  font-size: 50px;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const TextBox = styled.input`
    margin-top: 30px;
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
    background-color: #609694;
    color: white;
    border: 0;

`;

export default function Login() {
  return (
    <div>
      <Header>
        <Header.Top>
          <p>Teste</p>
        </Header.Top>
        <Header.Bottom>
          <p>Teste</p>
        </Header.Bottom>
      </Header>
      <Body>
        <Body.Left>
          <p>teste</p>
        </Body.Left>
        <Body.Right>
          <Title>Bem vindo de volta!</Title>
          <Subtitle>Por favor, entre com seu email e sua senha:</Subtitle>
          <Fields>
            <TextBox type="text" placeholder="Email" />
            <TextBox type="text" placeholder="Senha" />
            <Submit>Próximo</Submit>
          </Fields>
        </Body.Right>
      </Body>
    </div>
  );
}
