import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
@media(max-width:860px){
  display:none;
}
`;

export default function WindowDivider() {
  return (
    <Container>
      <hr
        style={{
          color: 'black', backgroundColor: '#AAABB0', width: '1px', border: 'none', marginRight: '0', marginLeft: '0',
        }}
        display="block"
        size="500"
      />
    </Container>
  );
}
