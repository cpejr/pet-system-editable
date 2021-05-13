import React from 'react';
import styled from 'styled-components';
import api from '../../utils/api';

const CustomButton = styled.button`
  margin-top: 30px;
    height: 40px;
    width: 150px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGreen}
    }
`;

function LogoutButton() {
  function logout() {
    api.get('logout');
  }

  return (
    <CustomButton onClick={logout}> Sair</CustomButton>
  );
}

export default LogoutButton;
