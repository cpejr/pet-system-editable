import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';

export const Img = styled.img` 
  display:flex;
  align-items:center;
  justify-content:center;
  width: 200px;
  height: 200px;
  margin-bottom:5%;
  margin-top:5%;
  `;
export const UploadContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;
export const CancelSubmit = styled.button`
  height: 40px;
  width: 150px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.darkRed};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5%;
`;

export const ImageSelected = styled.input`
`;

export const Label = styled.label`
  background-color:  ${({ theme }) => theme.colors.mediumGreen};;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
`;

export const CurrencyInput = styled(CurrencyFormat)`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #F2F2F2;
`;
