import React from 'react';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;
const Title = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
margin-bottom:2%;
`;

const ContainerDatas = styled.div`
display:flex;
width:100%;
flex-direction:row;
justify-content:center;
margin-top:2%;
`;
const ContainerAdress = styled.div`
display:flex;
width:100%;
align-items:center;
flex-direction:column;
justify-content:center;
margin-top:2%;
`;

const BoxDatas = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:80%;
border-color:black;
border-radius:20px;
line-height:20%;
border-style: solid;
border-width:1px;
`;

const BoxAdress = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:80%;
border-color:black;
border-radius:20px;
line-height:20%;
border-style: solid;
border-width:1px;
margin-bottom:5%;
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

export default function MyDatasMobile() {
  return (
    <div>
      <Container>
        <Title>Informações:</Title>
        <ContainerDatas>
          <BoxDatas>
            <p> Igor Amoras</p>
            <p>igoramoras@cpejr.com.br</p>
            <p>096.###.###-##</p>
            <p>02/02/01</p>
            <RowEdit>
              <p>(31) 99240-4607</p>
              <Icon>
                <MdEdit />
              </Icon>
            </RowEdit>
          </BoxDatas>
        </ContainerDatas>
        <Title>Endereços:</Title>
        <ContainerAdress>
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
        </ContainerAdress>

      </Container>
    </div>
  );
}
