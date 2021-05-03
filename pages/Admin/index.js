import React from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import HeaderAdmin from '../../src/components/HeaderAdmin';
import AdminCards from '../../src/components/AdminCards';
import WindowDividerAdmin from '../../src/components/WindowDividerAdmin';
import MySearchDateMonth from '../../src/components/MySearchDateMonth';
import MySearchDateYear from '../../src/components/MySearchDateYear';
import MonthResumeAdmin from '../../src/components/MonthResumeAdmin';

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
@media(max-width:860px){
    margin-right:5%;
}

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
export default function Admin() {
  return (
    <div>
      <HeaderAdmin />
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          <AdminCards />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <Container.Col2.Row1>
            <MonthReport>Relatório do mês</MonthReport>
            <MonthAndYear>
              <MonthAndYear.Col1>
                <MySearchDateMonth />
              </MonthAndYear.Col1>
              <MonthAndYear.Col2>
                <MySearchDateYear />
              </MonthAndYear.Col2>
            </MonthAndYear>
          </Container.Col2.Row1>
          <Container.Col2.Row2>
            <MonthResumeAdmin />
          </Container.Col2.Row2>
        </Container.Col2>
      </Container>
    </div>
  );
}
