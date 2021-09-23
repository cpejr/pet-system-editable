import styled from 'styled-components';

const Title = styled.h1`
display: flex;
align-items: initial;
margin-left: 5%;
margin-top: 2%;
margin-bottom: 1%;
font-family: Quicksand;
@media (max-width: 560px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
}
`;

export default Title;
