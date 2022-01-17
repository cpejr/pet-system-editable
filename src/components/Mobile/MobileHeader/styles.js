import styled from 'styled-components';

export const MobileHeaderContainer = styled.div`
display:none;
@media(max-width:800px){
position:fixed;
top:0;
z-index: 10000;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height: 70px;
flex-direction:row;
border-top:solid;
border-width:1px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
background-color: ${({ theme }) => theme.colors.background} ;
}
`;

MobileHeaderContainer.Col1 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
border:solid;
border-bottom:0;
border-color:#F6C8CA;
border-width:medium;
outline:none;
font-family: Roboto;
color:${({ theme }) => theme.colors.mediumGreen};
background-color:#F6C8CA;
`;
MobileHeaderContainer.Col2 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
border:solid;
border-bottom:0;
border-color:#F6C8CA;
border-width:medium;
outline:none;
font-family:Roboto;
color:${({ theme }) => theme.colors.mediumGreen};
background-color:#F6C8CA;
`;
MobileHeaderContainer.Col3 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
border:solid;
border-bottom:0;
border-color:#F6C8CA;
border-width:medium;
outline:none;
font-family: Roboto;
color:${({ theme }) => theme.colors.mediumGreen};
background-color:#F6C8CA;
`;
MobileHeaderContainer.Col4 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
border:solid;
border-bottom:0;
border-color:#F6C8CA;
border-width:medium;
outline:none;
font-family: Roboto;
color:${({ theme }) => theme.colors.mediumGreen};
background-color:#F6C8CA;
`;

export const MobileHeaderSpace = styled.div`
display:none;
@media(max-width:800px){
display:flex;
width:100%;
height: 70px;
border-top:solid;
border-width:1px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
background-color: ${({ theme }) => theme.colors.background} ;
}
`;
