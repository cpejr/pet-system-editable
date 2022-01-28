import styled from 'styled-components';

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: Quicksand;
  justify-content: center;


  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 10px;
  }
`;
export const Section = styled.button`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: Quicksand;
  outline: none;
  border-right: 1px  solid #000;
  margin-right: 1%;
  padding-right: 1%;

`;

export const StyledSpan = styled.span`
  padding: 3px 6px;
  background-color: ${({ theme, selected }) => (selected ? theme.colors.hoverBackground : theme.colors.background)};
  border-radius: ${({ selected }) => (selected ? '5%' : null)};

  @media (max-width: 560px) {
   font-size: 10px;
  }
`;
