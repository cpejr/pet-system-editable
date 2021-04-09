import React from 'react';
import styled from 'styled-components';
import Header from '../../src/components/Header';
import Body from '../../src/components/Body';
import Image from 'next/image';




const Number =styled.div`
`;
const Password =styled.div`
`;
const Name =styled.div`
`;
const Fields = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 100px; 
  font-size: 40px;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const TextBox = styled.input`
    margin-top: 30px;
    height: 40px;
    width: 500px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: ${props => props.theme.colors.white};
`;
TextBox.Name = styled.input`
    
    margin-top: 30px;
    height: 40px;
    width: 200px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: ${props => props.theme.colors.white};
`;
TextBox.lastname = styled.input`
    margin-left: 25px;
    margin-top: 30px;
    height: 40px;
    width: 300px;
    border-radius: 5px;
    border-color:  ${props => props.theme.colors.white};
    border: 0.3px solid #000000;
    background: ${props => props.theme.colors.white};
`;

TextBox.email = styled.input`  
    
    margin-top: 30px;
    height: 40px;
    width: 535px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: ${props => props.theme.colors.white};

`;
TextBox.telephone = styled.input`  
    
    margin-top: 30px;
    height: 40px;
    width: 200px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: ${props => props.theme.colors.white};

`;
TextBox.password= styled.input`
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 30px;
    height: 40px;
    width: 255px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: ${props => props.theme.colors.white};

`;
TextBox.CPF =styled.input`
    margin-right: 21px;
    margin-top: 30px;
    height: 40px;
    width: 260px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: ${props => props.theme.colors.white};
`;
TextBox.DDD=styled.input`
    margin-right: 10px;
    margin-top: 30px;
    height: 40px;
    width: 30px;
    border-radius: 5px;
    border: 1px solid #000000;
    background: ${props => props.theme.colors.white};
`;


const Submit = styled.button`
    margin-top: 30px;
    height: 40px;
    width: 140px;
    background-color: ${props => props.theme.colors.mediumGreen};
    color: white;
    border: 0;

`;
        


export default function Login() {
  return (
    <div>
      <Header>
        <Header.Top>
          
        </Header.Top>
        <Header.Bottom>
          
        </Header.Bottom>
      </Header>

      <Body>
      
        <Body.Left>
          <Image src="/images/doguinho.jpg" alt="" width="420" height="363" />
        
        </Body.Left>
        <hr width="0" display="block" size="500" />
        <Body.Right>
            
          <Title>Bora Começar!</Title>
          <Subtitle>Por favor, preencha os campos abaixo.</Subtitle>
          <Fields>
              <Name>
          <TextBox.Name type="text" placeholder="Nome" />
          <TextBox.lastname type="text" placeholder="Sobrenome" />
          </Name>

            <TextBox.email type="text" placeholder="Email" />
                <Password>
            <TextBox.password type="text" placeholder="Senha" />
            <TextBox.password type="text" placeholder="Confirmar Senha" />
            </Password>
           
            <Number>
            <TextBox.CPF type="numbers" max="11" placeholder="CPF" />
            <TextBox.DDD type="numbers" max="11" placeholder="DDD" />
            <TextBox.telephone type="numbers" max="11" placeholder="Telefone" />
            </Number>
            
            <Submit>Finalizar</Submit>
          </Fields>
        </Body.Right>
      </Body>
    </div>
  );
}