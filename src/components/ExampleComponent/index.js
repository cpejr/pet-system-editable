import React from 'react';
import styled from 'styled-components';

const BaseExample = styled.div`
  background-color: #666666;
  color: black;
`;

export default function ExampleComponent() {
  return (
    <BaseExample>
      Example component
    </BaseExample>
  );
}
