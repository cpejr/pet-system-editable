import styled from 'styled-components';

export const TitleLogin = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 3remD;
  font-weight: 700;
  font-family: Roboto;
`;

export const TitleStore = styled.h1`
  margin-bottom: 0px;
  font-size: 2.3rem;
  font-weight: 700;
  font-family: Roboto;
`;

export const SubtitleLogin = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 100;
`;

export const SubtitleStore = styled.h1`
  margin-bottom: 10px;
  font-size: 1.3em;
  font-weight: 100;
  font-family: Roboto;
`;

export const Text = styled.p`
  margin-top: 0px;
  margin-right: 10px; // Campo Isento de IE* form Store
  font-family: Roboto;
  font-size: 1rem;
  margin-bottom: 0px;
`;

export const Text2 = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Roboto;
  font-size: 15px;
  margin-bottom: 0px;
  font-weight: bold;
`;

export const SubText = styled.p`
  font-family: Roboto;
  margin-top: 3px;
  margin-left: 5px;
  font-size: 0.7rem;
  margin-bottom: 0px;
`;

export const TextBox = styled.input`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #F2F2F2;
`;

export const Select = styled.select`
  width: 90%;
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #F2F2F2;
`;

export const Submit = styled.button`
    margin-top: 30px;
    height: 40px;
    width: 150px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;

`;

export const ForgotPassword = styled.p`
  font-family: Roboto;
  margin-top: 0px;
  width: 90%;
  font-size: 15px;
  justify-content: right;
  text-align: end;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mediumRed};
`;

export const CreateAccount = styled.p`
  font-family: Roboto;
  margin-top: 5px;
  font-weight: 700;
  font-size: 15px;
`;

CreateAccount.Right = styled.p` 
  font-family: Roboto;
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mediumRed};
`;

export const Divider = styled.hr`
  @media screen and (max-width: 1200px) {
        display: none !important;
    }
`;
