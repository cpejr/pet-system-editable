import styled from 'styled-components';

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
justify-items: center;
width:50%;
background-color: whitesmoke;
border-color: black;
border-style: solid;
border-width: 1px;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.4);
box-sizing: border-box;
flex-direction:column;
padding-bottom: 2%;
`;

export const ConfirmButton = styled.div`
display:flex;
align-items:center;
`;

export const Submit = styled.button`
display:flex;
align-items:center;
justify-content:center;
    height: 40px;
    width: 150px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    outline:none;
`;

export const Caixa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

`;
