import styled from 'styled-components';

const Body = styled.div`
    height: 84vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

// Lado esquerdo do corpo da pagina, guardara a imagem
Body.Left = styled.div`
    margin-top: 300px;
    margin-left: 200px;
    height: 100%;
    width: 50%;
`;

// Lado direito do corpo da pagina, guardara o formulario
Body.Right = styled.div`
    height: 100%;
    width: 50%;
    text-align: center;
`;

export default Body;