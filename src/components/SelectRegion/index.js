import React from 'react';
import styled from 'styled-components';

export const Select = styled.select`
display: block;
width: 100%;
height: -webkit-calc(1.5em + 0.75rem + 2px);
height: calc(1.5em + 0.75rem + 2px);
padding: 0.375rem 0.75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: 0.25rem;
-webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
`;

export default function SelectState({
  name, id, onChange, value,
}) {
  return (
    <Select
      name={name}
      id={id}
      onChange={onChange}
      value={value}
    >
      <option value="">Selecione</option>
      <option value="Barreiro">Barreiro</option>
      <option value="Centro-Sul">Centro-Sul</option>
      <option value="Leste">Leste</option>
      <option value="Nordeste">Nordeste</option>
      <option value="Noroeste">Noroeste</option>
      <option value="Norte">Norte</option>
      <option value="Oeste">Oeste</option>
      <option value="Pampulha">Pampulha</option>
      <option value="Venda Nova">Venda Nova</option>
    </Select>
  );
}
