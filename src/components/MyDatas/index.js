import React from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';

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
  return (
    <ContainerDatas>
      <BoxDatas>
        <p>Nome: Igor Amoras</p>
        <p>Email: igoramoras@cpejr.com.br</p>
        <p>CPF: 096.###.###-##</p>
        <p>02/02/01</p>
        <RowEdit>
          <p>(31) 99240-4607</p>
          <Icon>
            <MdEdit />
          </Icon>
        </RowEdit>
      </BoxDatas>
    </ContainerDatas>
  );
}
