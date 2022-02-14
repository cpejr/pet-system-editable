import React from 'react';
import styled from 'styled-components';

export const Select = styled.select`
  width: 90%;
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #F2F2F2;
`;

export default function SelectAddress({
  name, id, onChange, value, addresses,
}) {
  return (
    <Select
      name={name}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      <option value="">
        Selecione seu endereço
      </option>
      {addresses?.map((address) => (
        <option value={address.address_id}>
          {`Rua: ${address.street}, Numero: ${address.address_num}, Bairro: ${address.district}`}
        </option>
      ))}
    </Select>
  );
}
