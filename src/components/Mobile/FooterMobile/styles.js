import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FooterContainer = styled.div`
display:none;
@media(max-width:800px){
display:flex;
align-items:center;
justify-content:center;
width:100%;
position:fixed;
flex-direction:row;
border-top:solid;
border-width:1px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
background-color: ${({ theme }) => theme.colors.background} ;
position:fixed;
bottom:0;
}
`;

FooterContainer.Col1 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
margin-top:1%;
border:none;
outline:none;
font-family: Roboto;
color:${({ theme }) => theme.colors.grayIcons};
background-color:#F8F8F8;
`;
FooterContainer.Col2 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
margin-top:1%;
border:none;
outline:none;
font-family: Roboto;
color:${({ theme }) => theme.colors.grayIcons};
background-color:#F8F8F8;
`;
FooterContainer.Col3 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
margin-top:1%;
border:none;
outline:none;
font-family: Roboto;
color:${({ theme }) => theme.colors.grayIcons};
background-color:#F8F8F8;
`;
FooterContainer.Col4 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
margin-top:1%;
border:none;
outline:none;
font-family: Roboto;
color:${({ theme }) => theme.colors.grayIcons};
background-color:#F8F8F8;
`;
