import React from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom:0;
  right:0;
  left: 0;
  background: rgba(0,0,0,0.2);
  z-index: 999;
  `;
const ContainerAlign = styled.div`
    position: absolute;
    height: fit-content;
    width: 70%;
    top: 3%;
    bottom: 3%;
    left: 0;
    right: 0;
    margin: auto;
    padding: 3em 2rem;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
    `;

const Title = styled.p`
      margin-top: 1.2em;
      margin-bottom: 1.5em;
      font-size: 1.8em;
      color: #121212;
      font-weight: bold;
      text-decoration: underline;
      `;

const ContainerFailedLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `;

const Text = styled.div`
    font-size: 1.2em;
    margin-bottom: 1em;
    text-align: justify;
    @media (max-width: 420px){
      font-size: 0.8em;
      `;

const ButtonAlign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5em;
    `;

const Button = styled.button`
    display: flex;
    background: black;
    color:white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    `;

export default function ModalFailedLogin({ close, content }) {

  return (
    <Container>
      <ContainerAlign>
        <ContainerFailedLogin>
          <Title>Aviso</Title>
          <Text>
            <b>Devido a sucessivas tentativas de login falhas essa conta foi bloqueada temporariamente,
              tente novamente em ${content}</b>
          </Text>
          <ButtonAlign>
            <Button onClick={close}>Entendi</Button >
          </ButtonAlign>
        </ContainerFailedLogin>
      </ContainerAlign>
    </Container>
  );
}
