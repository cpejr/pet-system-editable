import styled from 'styled-components';
import {
  Button, Form, FormControl, FormGroup,
} from 'react-bootstrap';
import { Body } from '../BodyForms';

export const AddressModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: bottom;

  @media (max-width: 1190px) {
    flex-direction: column;
    overflow: auto;
  }
`;

const SBody = styled(Body)`
  height: fit-content;  
`;

SBody.Right = styled(Body.Right)`
  width: 80%;

`;

export { SBody as Body };

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TitleModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 5%;
  @media (max-width: 860px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const Espaçamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1%;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

Espaçamento.Col1 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-family: Roboto;
  @media (max-width: 860px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const SobreFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
`;

export const MyFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

export const Pass = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NumbersForms = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 10%;
`;
export const DDD = styled.div`
  flex-direction: row;
  display: flex;
  margin-right: 10px;
`;

export const PhoneFormControl = styled(FormControl)`
  display: flex;
  width: 140px;
`;
export const DDDFormControl = styled(FormControl)`
  display: flex;
  width: 55px;
  font-size: 15px;
  flex-direction: row;
`;

export const Subtitle = styled.p`
  margin-top: 40px;
  display: flex;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 500;
  height: 100%;
`;

export const Register = styled.div`
  border: 1px solid;
  padding: 5%;
  background-color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5%;
`;
export const FormRegister = styled(Form)``;

export const Submit = styled.button`
 
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

export const ButtonAdd = styled(Button)`
display:flex;
height: 70px;
width: 250px;
font-family: Quicksand;
font-size: 25px;
font-weight: 300;
background-color: ${({ theme }) => theme.colors.darkGreen};
color: white;
border: 0;
border-radius: 5px;
align-items: center;
text-align: center;
margin-top: 20%;
margin-bottom: 2%;
transform: translate(0%,-50%);
justify-content: center;
text-align: center;
cursor: pointer;
    @media(max-width:860px){
        width: 150px;
    } 
`;

export const Espaço = styled.div`
width: 5%;
`;
