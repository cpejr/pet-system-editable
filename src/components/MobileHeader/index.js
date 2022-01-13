import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Body = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 15vh;
    background-color: ${({ theme }) => theme.colors.rose};
  }
`;

export default function MobileHeader() {
  return (
    <Body>
      <Image src="/images/LogoWeb.png" alt="" width="250" height="100" />
    </Body>
  );
}
