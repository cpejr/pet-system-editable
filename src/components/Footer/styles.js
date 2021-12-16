import styled from 'styled-components';

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  margin-top: 5%;
  @media (max-width: 600px){
    padding: 0 10px;
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  p {
    margin: 0;
  }
`;

export const FooterCPE = styled.div`
  display: flex;
  flex-direction: column;
  width 100px;
  color: white;
  text-align: center;
`;
