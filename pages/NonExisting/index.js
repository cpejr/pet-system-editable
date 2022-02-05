import React from 'react';
import styled from 'styled-components';

const IsntFound= styled.div`
height: 100vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Title = styled.div`
color: black;
font-weight: 600;
font-size: 3em;
margin-bottom: 5%;
`;

const Text = styled.div`
flex-direction: column;
justify-content: center;

`;

const Content = styled.div`
margin-bottom:2%;
color: black;
font-weight: 300;
font-size: 1.5em;
`;

const lottiePlayer = styled.div`
width: 300px;
height: 300px;
backgrount: transparent;
`;


export default function FullPageLoader() {
  return (
    <IsntFound>
      <div>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_uqcbmc4h.json" speed="1" autoplay></lottie-player>
      </div>
      <Text>
        <Title>Pagina não encontrada</Title>
        <Content>Não foi possível encontrar a página que você está procurando, isso ocorre porque:</Content>
        <Content>- Há um erro no URL em seu navegador da wev. Verifique o URL e tente novamente.</Content>
        <Content>- A página que você está procurando foi movida ou excluída.</Content>
      </Text>
    </IsntFound>
  );
}