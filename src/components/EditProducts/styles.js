import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';

export const CategoryContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;
CategoryContainer.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row4 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row4.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row4.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row5 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row5.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row5.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row6 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row6.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row6.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row7 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
cursor: pointer;
`;

CategoryContainer.Row7.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row7.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

export const EditProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2%;
  @media (max-width: 1190px) {
    flex-direction: column;
    overflow: auto;
  }
`;

EditProductsContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  flex-direction: column;
  @media (max-width: 1190px) {
    width: 100%;
  }
`;

export const DivInput = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
export const EditTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;

export const NameProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
export const NameProductInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-bottom: 2%;
  margin-top: 1%;
  font-family: Roboto;
`;

export const CategoryProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
export const PriceAndDiscont = styled.div`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2%;
`;
PriceAndDiscont.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;
PriceAndDiscont.Col1.Row1 = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
PriceAndDiscont.Col1.Row2 = styled(CurrencyFormat)`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 60%;
  height: 40px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-top: 1%;
  font-family: Roboto;
`;

PriceAndDiscont.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;

PriceAndDiscont.Col2.Row1 = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;

PriceAndDiscont.Col2.Row2 = styled.input`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 60%;
  height: 40px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-top: 1%;
  font-family: Roboto;
`;

export const DescriptionProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  margin: 0;
  font-family: Roboto;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
export const DescriptionInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 250px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderBoxColor};
  border-width: 1px;
  margin-top: 1%;
  font-family: Roboto;
`;

EditProductsContainer.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  flex-direction: column;
  @media (max-width: 1190px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SelectImage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Roboto;
  margin: 0;
  @media (max-width: 1190px) {
    justify-content: center;
    margin-top: 5%;
  }
`;
export const ButtonCancel = styled.button`
  height: 55px;
  width: 200px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.strongRed};
  color: white;
  border: 0;
  border-radius: 5px;
  transform: translate(0%, -50%);
  margin-top: 15%;
  cursor: pointer;
`;
export const ButtonConfirm = styled.button`
  display: flex;
  margin-top: 50px;
  height: 55px;
  width: 200px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
  border: 0;
  border-radius: 5px;
  align-items: center;
  text-align: center;
  transform: translate(0%, -50%);
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  cursor: pointer;
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 5%;
  margin-top: 5%;
`;
export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageSelected = styled.input``;

export const Label = styled.label`
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
`;
