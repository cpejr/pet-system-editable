import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: row;
font-family: Roboto;
@media(max-width:700px){
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
  @media(max-width:800px){
  margin-bottom: 20%;
  }
`;

ServiceContainer.Col = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
flex-direction: column;
@media(max-width:1074px){
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  }
`;

ServiceContainer.Col2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
flex-direction: column;
@media(max-width:1074px){
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  }
 
`;

const Services = styled.h3`
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 70%;
font-weight: 400;
@media(max-width:1074px){
  display:flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  }
`;

Services.Contact = styled.h4`
display: flex;
align-items: flex-start;
justify-content: flex-start;
font-weight: bold;

`;

export default function StoreServices(props) {
  const { store } = props;
  return (
    <div>
      <ServiceContainer>
        <ServiceContainer.Col>
          <Services>
            •Tosa
          </Services>
          <Services>
            •Banho
          </Services>
          <Services>
            •Limpeza
          </Services>
          <Services>
            •Vacinação
          </Services>
        </ServiceContainer.Col>
        {store && (
          <ServiceContainer.Col2>
            <Services>
              <Services.Contact>
                • Telefone:
                {' '}
              </Services.Contact>
              {store.telephone}
            </Services>
            <Services>
              <Services.Contact>
                • Celular:
                {' '}
              </Services.Contact>
              {store.cellphone}
            </Services>
            <Services>
              <Services.Contact>
                • Email:
                {' '}
              </Services.Contact>
              {store.email}
            </Services>
            <Services>
              <Services.Contact>
                • Horário de funcionamento:
                {' '}
              </Services.Contact>
              10:00h - 18:30h
            </Services>
          </ServiceContainer.Col2>
        )}
      </ServiceContainer>
    </div>
  );
}
