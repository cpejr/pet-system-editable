import React, { useState } from 'react';
import {
  FormControl, FormLabel, FormGroup, Row, Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Upload from './Upload';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

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

const Title = styled.h1`
font-size:20px;
display:flex;
align-items: center;
margin-top: 40px;
`;

export default function AddProducts() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');

  function handleProductNameChange(event) {
    setProductName(event.target.value);
  }
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  function handleDiscountChange(event) {
    setDiscount(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      product_id: 'dog',
      store_id: '6',
      product_name: 'ração d',
      price: 12,
      discount: 5,
      description: 'cachorro',
      img: 'djdiss',
      created_at: 'djudhuj',

    };
    try {
      console.log(body);
      const Validate = await api.post('/api/product', body);
      console.log(Validate.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div>

      <Styles>
        <FormContainer>
          <FormContainer.Col1>
            <Title> Cadastro de Produto </Title>

            <FormGroup>
              <FormLabel>Nome do Produto</FormLabel>
              <FormControl
                type="text"
                required
                value={productName}
                onChange={handleProductNameChange}
              />
            </FormGroup>
            <Row>
              <Col>
                <FormLabel>Preço:</FormLabel>
                <FormControl
                  type="numbers"
                  placeholder="R$ 000,00"
                  required
                  value={price}
                  onChange={handlePriceChange}
                />
              </Col>
              <Col>
                <FormLabel>Desconto:</FormLabel>
                <FormControl
                  type="numbers"
                  placeholder="00,00%"
                  required
                  value={discount}
                  onChange={handleDiscountChange}
                />
              </Col>
            </Row>

            <FormLabel>
              Descrição do Produto:
            </FormLabel>
            <FormControlDescription
              as="textarea"
              type="text"
              required
              value={description}
              onChange={handleDescriptionChange}
            />
          </FormContainer.Col1>
          <FormContainer.Col2>

            <Upload />

            <ButtonCancell variant="primary" type="submit">
              Cancelar Cadastro
            </ButtonCancell>

            <Button variant="primary" type="button" onClick={handleSubmit}>
              Confirmar Cadastro
            </Button>
          </FormContainer.Col2>
        </FormContainer>

      </Styles>
    </div>
  );
}
