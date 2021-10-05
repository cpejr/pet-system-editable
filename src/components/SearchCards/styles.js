import styled from 'styled-components';

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 1vw;
height: auto;
font-family:Roboto;
`;

export const CardInfo = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
padding: 3%;
width:100%;
font-size:16px;
flex-direction:row;
`;

export const CardDescription = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 50%;
flex-direction:column;
`;

export const CardDescriptionTitle = styled.h3`
display:flex;
align-items:center;
justify-content:flex-start;
width:100%;
margin-top:1%;
margin-bottom:1%;
`;

export const CardDescriptionValues = styled.p`
display:flex;
align-items:center;
justify-content:flex-start;
width:100%;
margin:0;
flex-direction:row;
@media(max-width:880px){
    flex-direction:column;
    align-items:initial;
}
`;
export const CardDescriptionDeliveryPrice = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
width:60%;
font-size:14px;
@media(max-width:560px){
    width:100%;
    color:${({ theme }) => theme.colors.baseGray};
}
`;

export const CardButtons = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:15%;
@media(max-width:560px){
width:30%;
}
`;

export const FavButton = styled.button`
display:none;
@media(max-width:560px){
display:flex;
align-items:center;
justify-content:center;
border:none;
background-color:${({ theme }) => theme.colors.background};
}
`;

export const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:35px;
height:35px;
background-color:${({ theme }) => theme.colors.mediumGray};
border:none;
@media(max-width:560px){
display:none;
}

`;

export const Star = styled.div`
display:none;
@media(max-width:560px){
    display:flex;
    color:${({ theme }) => theme.colors.starYellow};
    margin-left:5%;
}
`;
