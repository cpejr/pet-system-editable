import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-family: Roboto;
flex-direction: column;
margin-top: 2%;
`;

export const ProductContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width: 100%;
flex-direction: row;
@media(max-width:880px){
    flex-direction: column;
    align-items: center;
}
`;

ProductContainer.Col1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
margin: 0;
`;

ProductContainer.Col2 = styled.div`
display: flex;
align-items: initial;
justify-content: center;
width: 40%;
flex-direction: column;
@media(max-width:880px){
    width: 70%;
}
`;

export const ProductTitle = styled.h2`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin: 0;
@media(max-width:880px){
    margin-top: 5%;
}
`;

export const Price = styled.h3`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 0;
`;

export const Delivery = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 0;
`;

export const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: row;
margin-top: 10%;
@media(max-width:880px){
    flex-direction: column;
}
`;

ButtonsContainer.Col = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
flex-direction: column;
@media(max-width:880px){
   width: 100%;
   margin-bottom: 2%;
}
`;

export const Button = styled.button`
height: 50px;
width: 80%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color: white;
border: 0;
border-radius: 5px;
cursor:pointer;
outline:none;
`;

export const AddCarButton = styled.button`
height: 50px;
width: 80%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.mediumGreen};
border: solid;
border-width: 1px;
border-color: ${({ theme }) => theme.colors.mediumGreen};
border-radius: 5px;
cursor:pointer;
outline:none;
`;

export const Store = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction:column;
width: 100%;
`;

Store.Title = styled.h3`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
`;

Store.Text = styled.button`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
color:${({ theme }) => theme.colors.mediumGray} ;
border:none;
background-color: ${({ theme }) => theme.colors.background};
cursor:pointer;
margin: 0;
font-size: 16px;
font-family:Roboto;
padding: 0;
`;

export const Description = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 62%;
flex-direction:column;
@media(max-width:880px){
    width: 70%;
    margin-bottom: 15%;
}
`;

Description.Title = styled.h3`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 0;
`;

Description.Text = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
color:${({ theme }) => theme.colors.mediumGray} ;
`;

export const BackPage = styled.div`
display:none;
@media(max-width:800px){
display: flex;
align-items: center;
justify-content: center;
width: 40%;
flex-direction: row;
margin-top: 5%;
}
`;

export const BackButton = styled.button`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
color:black ;
border:none;
background-color: ${({ theme }) => theme.colors.background};
cursor:pointer;
margin: 0;
font-size: 24px;
font-family:Roboto;
font-weight:bold;
padding: 0;
`;
