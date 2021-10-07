import styled from 'styled-components';

export const ContainerCategory = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: row;
font-family: Roboto;
@media (max-width: 700px) {
  display: none;
}
`;

ContainerCategory.Col = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 10%;
`;

export const SearchContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width: 100%;
flex-direction: row;
margin-top: 2%;
margin-bottom: 2%;
`;

SearchContainer.Col1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 25%;
flex-direction: column;
@media (max-width: 880px) {
  width: 40%;
}
@media (max-width: 560px) {
  display: none;
}
`;
SearchContainer.Col2 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-content: center;
width: 75%;
flex-direction: column;
@media (max-width: 560px) {
  width: 100%;
}
`;
export const Submit = styled.button`
height: 40px;
width: 50%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color: white;
border: 0;
border-radius: 5px;
cursor: pointer;
outline: none;
@media (max-width: 560px) {
  display: none;
}
`;
