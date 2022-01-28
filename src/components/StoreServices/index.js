import styled from 'styled-components';
import InputMask from 'react-input-mask';
import moment from 'moment';
import { useEffect, useState } from 'react';

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  font-family: Roboto;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    margin-bottom: 20%;
  }
`;

ServiceContainer.Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
  @media (max-width: 1074px) {
    display: flex;
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
  @media (max-width: 1074px) {
    display: flex;
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
  @media (max-width: 1074px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

Services.Contact = styled.h4`
  display: flex;
  width: auto;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: bold;
`;

export default function StoreServices({ store }) {
  const openingTime = store.opening_time.split(',');
  const closingTime = store.closing_time.split(',');
  const situation = store.working_days.split(',');
  const [today, setToday] = useState();
  const data = new Date();
  const day = moment(data).format('dddd');
  useEffect(() => {
    if (day) {
      switch (day) {
        case 'Monday':
          setToday(0);
          break;

        case 'Tuesday':
          setToday(1);
          break;

        case 'Wednesday':
          setToday(2);
          break;

        case 'Thursday':
          setToday(3);
          break;

        case 'Friday':
          setToday(4);
          break;

        case 'Saturday':
          setToday(5);
          break;

        default:
          setToday(6);
          break;
      }
    }
  }, [day]);
  return (
    <div>
      <ServiceContainer>
        <ServiceContainer.Col>
          <Services>•Tosa</Services>
          <Services>•Banho</Services>
          <Services>•Limpeza</Services>
          <Services>•Vacinação</Services>
        </ServiceContainer.Col>
        {store && (
          <ServiceContainer.Col2>
            <Services>
              <Services.Contact>• Telefone:</Services.Contact>
              <InputMask
                name={store.phone}
                mask="(99)9999-9999"
                value={store.phone}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  width: 'auto',
                }}
              />
            </Services>
            <Services>
              <Services.Contact>• Celular:</Services.Contact>
              <InputMask
                name={store.cellphone}
                mask="(99)99999-9999"
                value={store.cellphone}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  width: 'auto',
                }}
              />
            </Services>
            <Services>
              <Services.Contact>• Email:</Services.Contact>
              {store.email}
            </Services>
            <Services>
              <Services.Contact>• Horário de funcionamento:</Services.Contact>
              {openingTime[today]}
              h -
              {' '}
              {closingTime[today]}
              h
            </Services>
          </ServiceContainer.Col2>
        )}
      </ServiceContainer>
    </div>
  );
}
