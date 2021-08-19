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
margin-top: 3em;
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