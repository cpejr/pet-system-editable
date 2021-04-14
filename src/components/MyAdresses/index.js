import React from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';

const ContainerAdresses = styled.div`
display:flex;
width:100%;
flex-direction:row;
justify-content:center;
margin-top:2%;
`;

const BoxAdress = styled.div`
display:flex;
flex-direction:column;
width:25%;
border-color:black;
border-radius:5px;
align-items:center;
line-height:20%;
border-style: solid;
border-width:1px;
margin-right:2%;
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
justify-content:flex-end
`;

export default function MyAdresses() {
  return (
    <ContainerAdresses>
      <BoxAdress>
        <p>Rua Engenheiro Alberto Pontes,389</p>
        <p>Apartamento 601</p>
        <p>Buritis, Belo Horizonte</p>
        <RowEdit>
          <p>30492-202</p>
          <Icon>
            <MdEdit />
          </Icon>
        </RowEdit>
      </BoxAdress>
      <BoxAdress>
        <p>Rua Engenheiro Alberto Pontes,389</p>
        <p>Apartamento 601</p>
        <p>Buritis, Belo Horizonte</p>
        <RowEdit>
          <p>30492-202</p>
          <Icon>
            <MdEdit />
          </Icon>
        </RowEdit>
      </BoxAdress>
      <BoxAdress>
        <p>Rua Engenheiro Alberto Pontes,389</p>
        <p>Apartamento 601</p>
        <p>Buritis, Belo Horizonte</p>
        <RowEdit>
          <p>30492-202</p>
          <Icon>
            <MdEdit />
          </Icon>
        </RowEdit>
      </BoxAdress>
    </ContainerAdresses>
  );
}
