import React, { useState } from 'react';
import {
  FormControl, FormLabel, FormFile, FormGroup, Row, Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Styles = styled.div`
width: 100%;
display: flex;
align-items:center;
justify-content: center;
  
`;

const FormContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 60%;
flex-direction: row;


 
`;
FormContainer.Col1 = styled.div`
display: flex;
width: 70%;
flex-direction: column;
`;
FormContainer.Col2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 30%;
flex-direction: column;
margin-left:30px;
`;

const Button = styled.button`
    display:flex;
    margin-top: 50px;
    height: 55px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
`;
const FormControlDescription = styled(FormControl)`
     height: 200px;
     display: flex;
`;

const ButtonCancell = styled(Button)`
    display:flex;
    align-items: center;
    flex-direction:row;
    margin-top: 150px;
    height: 55px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.mediumRed};
    color: white;
    border: 0;
    border-radius: 5px;
    justify-content: center;
`;

const File = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
margin-top:80px;
`;

const Title = styled.h1`
font-size:20px;
display:flex;
align-items: center;
margin-top: 40px;
`;

export default function AddProducts() {
  return (

    <div>

      <Styles>
        <FormContainer>
          <FormContainer.Col1>
            <Title> Cadastro de Produto </Title>

            <FormGroup>
              <FormLabel>Nome do Produto</FormLabel>
              <FormControl type="text" />
            </FormGroup>
            <Row>
              <Col>
                <FormLabel>Preço:</FormLabel>
                <FormControl type="numbers" placeholder="R$ 000,00" />
              </Col>
              <Col>
                <FormLabel>Desconto:</FormLabel>
                <FormControl type="numbers" placeholder="00,00%" />
              </Col>
            </Row>

            <FormLabel>
              Descrição do Produto:
            </FormLabel>
            <FormControlDescription as="textarea" type="text" />
          </FormContainer.Col1>
          <FormContainer.Col2>

            <File>
              <FormFile id="formcheck-api-regular">
                <FormFile.Label>Selecionar Imagem</FormFile.Label>
                <FormFile.Input />
              </FormFile>
            </File>
            <ButtonCancell variant="primary" type="submit">
              Cancelar Cadastro
            </ButtonCancell>

            <Button variant="primary" type="submit">
              Confirmar Cadastro
            </Button>
          </FormContainer.Col2>
        </FormContainer>

      </Styles>
    </div>
  );
}
