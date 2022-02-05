import styled, { keyframes } from 'styled-components';

const IsntFound= styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
color: black;
font-weight: 600;
font-size: 3em;
`;



export default function FullPageLoader() {
  return (
    <IsntFound>
      Pagina não encontrada
    </IsntFound>
  );
}
