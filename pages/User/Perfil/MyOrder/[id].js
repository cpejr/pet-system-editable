import React from 'react';
import styled from 'styled-components';
import Header from '../../../../src/components/Header';
import MyIndividualOrder from '../../../../src/components/MyIndividualOrder';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';
import api from "../../../../src/utils/api";

const Title = styled.h1`
align-items:initial;
display:flex;
margin-left:5%;
margin-top:2%;
margin-bottom:1%;
font-family: Roboto;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:2%;
    }
`;

const Section = styled.button`
display:flex;
font-size:16px;
align-items:center;
justify-content:center;
margin-left:1%;
margin-right:1%;
border:none;
background-color:${({ theme }) => theme.colors.background};
cursor: pointer;
font-family: Roboto;
outline:none;
`;

Section.Select = styled.button`
flex-direction:row;
font-size:16px;
align-items:center;
margin-left:1%;
margin-right:1%;
border:none;
background-color:${({ theme }) => theme.colors.hoverBackground};
border-radius:5%;
outline:none;
font-family: Roboto;
`;

export default function Perfil(props) {
    const {order} = props;
  return (
    <div>
      <Header />

      <Title>Editar meus dados:</Title>
      
      <MyIndividualOrder order = {order} />
      <FooterMobile />
    </div>
  );
}

export async function getServerSideProps(context) {
    const {id} = context.query;
    const response = await api.get(`order/${id}`);
    const order = response.data;
    return { props: { order }};
  }
  