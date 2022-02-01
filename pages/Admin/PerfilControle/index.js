import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import moment from 'moment';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import MonthResumeAdmin from '../../../src/components/MonthResumeAdmin';
import api from '../../../src/utils/api';
import withAuthAdmin from '../../../src/components/WithAuth/WithAuthAdmin';

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
width:100%;
@media(max-width:860px){
    width:100%;
    flex-direction:column;
}

`;

Container.Col2.Row1.Col2 = styled.div`
display:flex;
margin-bottom: 3%;
@media(max-width:860px){
  margin-bottom: 0%
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
align-items:center;
justify-content:center;
display:flex;
width:80%;
@media(max-width:860px){
    width:100%;
    margin-bottom: 10%;
}
@media(max-width:310px){
  width:100%;
  margin-bottom: 10%;
}
`;

const Admin = () => {
  const [revenue, setRevenue] = useState(0);
  const [totalStores, setTotalStores] = useState(0);
  const [averageShare, setAverageShare] = useState(0);
  const [profit, setProfit] = useState(0);
  const [value, setValue] = useState(new Date());
  
  useEffect(() => {
    api.get('/profileControl', {
      params: {
        month: moment(value).format('M'),
        year: moment(value).format('Y'),
      },
    }).then((response) => {
      setRevenue(response.data.revenue.sum);
      setTotalStores(response.data.total_stores);
      setProfit(response.data.profit.sum);
      setAverageShare(response.data.averageShare);
    }).catch((error) => {
      alert('Erro ao tentar obter dados do perfil de controle');
    });
  }, [value]);

  return (
    <div>
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          <AdminCardsFix />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <Container.Col2.Row1>
            <MonthReport>Relatório do mês</MonthReport>
            <Container.Col2.Row1.Col2>
              <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
                <KeyboardDatePicker
                  views={['month', 'year']}
                  value={value}
                  onChange={(newDate) => { setValue(newDate); }}
                  variant="inline"
                  label="Mês e Ano"
                  InputProps={{ readOnly: true }}
                />
              </MuiPickersUtilsProvider>
            </Container.Col2.Row1.Col2>
          </Container.Col2.Row1>
          <Container.Col2.Row2>
            <MonthResumeAdmin revenue={revenue} totalStores={totalStores} averageShare={averageShare} profit={profit} />
          </Container.Col2.Row2>
        </Container.Col2>
      </Container>
    </div>
  );
};
export default withAuthAdmin(Admin);
