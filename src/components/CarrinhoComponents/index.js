import styled from "styled-components";

export const CarrinhoText = styled.p`
color: #609694;
font-family: Roboto;
font-size: 1.3em;
text-align: center;
margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const CarrinhoTitle = styled.div`
display: flex;
border-bottom: 1px solid #e5e5e5;
margin: 3em 0em 2em 0em;
padding: 0em 0em 0.8em 1.5em;
height: auto;
align-items: center;
`;

export const CarrinhoIcon = styled.div`
display: flex;
height: 2em;
@media screen and (max-width: 900px) {
  height: 1.7em;
}
@media screen and (max-width: 600px) {
  height: 1.3em;
}
`;

export const CarrinhoBody = styled.div`
display: flex;
flex-direction: row;
`;

export const CarrinhoValor = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 5em;
`;

export const CarrinhoValorTitle = styled.div`
color: #609694;
font-family: Roboto;
font-size: 1.3em;
width: 100%;
margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const CarrinhoFrete = styled.div`
display: flex;
flex-direction: row;
width: 25vw;
justify-content: space-between;
align-items: center;
padding-top: 1em;
margin-bottom: 7.5em;
`;

export const CarrinhoFreteInputFalso = styled.div`
display: flex;
background-color: #C4C4C4;
width: 6em;
height: 2em;
justify-content: center;
align-items: center;
font-family: Roboto;
font-size: 1.5em;
color: #8E8585;
border-radius: 6px;
`;

export const CarrinhoFreteButton = styled.button`
display: flex;
background-color: #609694;
color: #ffffff;
cursor: pointer;
height: 80%;
width: 10vw;
align-items: center;
justify-content: center;
`;

export const CarrinhoTotal = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
margin-bottom: 2em;
padding: 0em 1em;
`;

export const CarrinhoValorText = styled.div`
font-family: Roboto;
font-size: 1.2em;
`;

export const CarrinhoFinalButton = styled.button`
display: flex;
background-color: #609694;
color: #ffffff;
cursor: pointer;
height: 3em;
width: 80%;
align-items: center;
justify-content: center;
`;