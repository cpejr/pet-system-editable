import React from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const TextBox = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #F2F2F2;
`;

export default function MaskedInput({
  value, onChange, name, mask,
}) {
  const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value),
      },
    });
  }

  return (
    <TextBox>
      <InputMask
        name={name}
        mask={mask}
        value={value}
        onChange={handleChange}
        style={{
          border: 'none', outline: 'none', backgroundColor: 'transparent', width: '100%',
        }}
      />
    </TextBox>
  );
}
