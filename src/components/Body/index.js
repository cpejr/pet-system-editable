import styled from 'styled-components';

const Body = styled.div`
    height: 84vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

// Lado esquerdo do corpo da pagina, guardara a imagem
Body.Left = styled.div`
    height: 100%;
    width: 50%;
    //background-color: blue;
`;

// Lado direito do corpo da pagina, guardara o formulario
Body.Right = styled.div`
    height: 100%;
    width: 50%;
    //background-color:green;
    text-align: center;
`;

export default Body;
