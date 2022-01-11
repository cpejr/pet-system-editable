import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import axios from 'axios';
import moment from 'moment';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
// import AdminCards from '../../../src/components/AdminCards';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
// import MySearchDateMonth from '../../../src/components/MySearchDateMonth';
// import MySearchDateYear from '../../../src/components/MySearchDateYear';
import MonthResumeAdmin from '../../../src/components/MonthResumeAdmin';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
@media(max-width:860px){
    flex-direction:column;
}
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:40%;
@media(max-width:860px){
    width:100%;
}
`;
Container.Col1.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:5%;
`;

Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:60%;
@media(max-width:860px){
    width:100%;
    margin-top:4%;
}
`;

Container.Col2.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:10%;
width:80%;
@media(max-width:860px){
    width:100%;
    flex-direction:column;
}
`;

const MonthReport = styled.p`
display:flex;
align-items:center;
justify-content:initial;
width:40%;
font-family:Roboto;
font-size:24px;
@media(max-width:860px){
    font-size:18px;
    justify-content:center;
}
`;

const MonthAndYear = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:60%;
flex-direction:row;
`;

MonthAndYear.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

MonthAndYear.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

Container.Col2.Row2 = styled.div`
display:flex;
width:80%;
@media(max-width:860px){
    width:100%;
    align-items:center;
    justify-content:center;
}
`;

const api = axios.create({ baseURL: 'http://localhost:3000/' });

export default function Admin() {
  // const now = new Date();
  // const [year, setYear] = useState(now.getYear());
  // const [month, setMonth] = useState(now.getMonth());
  const [revenue, setRevenue] = useState(0);
  const [totalStores, setTotalStores] = useState(0);
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    api.get('/api/profileControl', {
      params: {
        month: moment(value).format('M'),
        year: moment(value).format('Y'),
      },
    }).then((response) => {
      setRevenue(response.data.revenue.sum);
      setTotalStores(response.data.total_stores);
    });
  }, [value]);
  return (
    <div>
      <HeaderAdmin />
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          {/**
              <AdminCards />
           */}
          <AdminCardsFix />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <Container.Col2.Row1>
            <MonthReport>Relatório do mês</MonthReport>
            {/* <MonthAndYear>
              <MonthAndYear.Col1>
                <MySearchDateMonth />
              </MonthAndYear.Col1>
              <MonthAndYear.Col2>
                <MySearchDateYear />
              </MonthAndYear.Col2>
            </MonthAndYear> */}
            <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
              <KeyboardDatePicker
                views={['month', 'year']}
                value={value}
                onChange={(newDate) => { setValue(newDate); }}
                variant="inline"
                label="Mês e Ano"
              />
            </MuiPickersUtilsProvider>
          </Container.Col2.Row1>
          <Container.Col2.Row2>
            <MonthResumeAdmin revenue={revenue} totalStores={totalStores} />
          </Container.Col2.Row2>
        </Container.Col2>
      </Container>
    </div>
  );
}
