import React from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { useAuth } from '../../contexts/AuthContext';

const ContainerDatas = styled.div`
display:flex;
width:100%;
align-items:center;
flex-direction:row;
justify-content:center;
margin-top:2%;
@media(max-width:560px){
  flex-direction:column;
}
`;

const BoxDatas = styled.div`
display:flex;
flex-direction:column;
width:25%;
border-color:black;
border-radius:5px;
align-items:center;
line-height:20%;
border-style: solid;
border-width:1px;
border-radius:5px;
@media(max-width:976px){
width:45%;
margin-bottom:2%;
}
@media(max-width:560px){
  width:80%;
}
`;
const RowEdit = styled.div`
display:flex;
flex-direction:row;
width:100%; 
align-items:center;
justify-content:center;
letter-spacing:30%;
`;
const Icon = styled.div`
width:10%;
display:flex;
justify-content:flex-end;
`;
export default function MyDatas() {
  const { user } = useAuth();

  function dataNascimentoFormatada(bdate){
    var data = new Date(bdate),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

  return (
    <ContainerDatas>
      <BoxDatas>
        <p>Nome: {user.first_name}</p>
        <p>Email: {user.email}</p>
        <p>CPF: {user.cpf}</p>
        <p>Data de Nascimento: {dataNascimentoFormatada(user.birth_date)}</p>
        <RowEdit>
          <p>Telefone: {user.telephone}</p>
          <Icon>
            <MdEdit />
          </Icon>
        </RowEdit>
      </BoxDatas>
    </ContainerDatas>
  );
}
