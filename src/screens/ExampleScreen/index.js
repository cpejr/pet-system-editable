import React from 'react';
import styled from 'styled-components';

const BaseExampleScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #666666;
  color: black;
`;

export default function ExampleScreen({ text, ...props }) {
  return (
    <BaseExampleScreen {...props}>
      {text}
    </BaseExampleScreen>
  );
}
