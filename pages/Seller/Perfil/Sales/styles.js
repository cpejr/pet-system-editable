import styled from 'styled-components';

export const SubTitle = styled.div`
align-items:initial;
display:flex;
margin-left:8%;
font-family: Roboto;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0;
    }
`;
export const Section = styled.button`
display:flex;
font-size:16px;
align-items:center;
justify-content:center;
margin-right:1%;
margin-left:1%;
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

export const ContainerDate1 = styled.div`
display:flex;
flex-direction:row;
width:50%;
margin-top:1.5%;
margin-left: 145px;
margin-bottom: 1.5%;
@media(max-width:560px){
  justify-content:center;
  width:45%;
}
`;

export const ContainerDate2 = styled.div`
display:flex;
align-items:center;
margin-left:20px;
width:50%;
@media(max-width:560px){
  justify-content:center;
  width:45%;
}
`;
