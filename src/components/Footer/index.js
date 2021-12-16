import React from 'react';
import Image from 'next/image';
import { FooterCPE, FooterText, FooterWrap } from './styles';

export default function Footer() {
  return (
    <FooterWrap>
      <Image src="/images/GatoLogo.png" alt="" width="100" height="100" o />
      <FooterText>
        <p>CNPJ - 12.123.123/1234-12</p>
        <p>Rua &quot;Nome da Rua&quot;, Num, Bairro &quot;Nome do bairro&quot;, Cidade/Estado</p>
        <p>CEP 12345-678</p>
      </FooterText>
      <FooterCPE>
        Feito por:
        <Image src="/images/LogoCPE.png" alt="" width="100" height="40" o />
      </FooterCPE>
    </FooterWrap>
  );
}
