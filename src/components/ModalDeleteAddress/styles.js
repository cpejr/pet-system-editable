import styled from 'styled-components';

export const GarbageIcon = styled.button`
  display: flex;
  justify-content: flex-end;
  color: white;
  width: fit-content;
  font-size: 1.5rem;
  height: fit-content;
  background-color: transparent;
  border: none;
`;

export const ContainerModal = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height: 100%;
flex-direction:column;
`;

export const Row = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
margin-left: 10px;
`;

export const TitleModal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
font-weight: bold;
font-size:24px;
@media(max-width:860px){
        width:100%;
        font-size:18px;
    } 
`;

export const Ajust = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction: column;
`;

export const ButtonConfirm = styled.button`
    display:flex;
    height: 55px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.darkGreen};
    border: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.darkGreen};
    border-radius: 5px;
    align-items: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
    :hover{
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.background};
    border: solid;
    border-color: ${({ theme }) => theme.colors.darkGreen};
    }
    @media(max-width:860px){
        width:150px;
    } 
`;

export const ButtonCancel = styled.button`
    display:flex;
    height: 55px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.darkRed};
    border: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.darkRed};
    border-radius: 5px;
    align-items: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
    margin-top: 5%;
    margin-bottom: 5%;
    :hover{
    background-color: ${({ theme }) => theme.colors.darkRed};
    color: ${({ theme }) => theme.colors.background};
    border: solid;
    border-color: ${({ theme }) => theme.colors.darkRed};
    }
    @media(max-width:860px){
        width:150px;
    } 
`;