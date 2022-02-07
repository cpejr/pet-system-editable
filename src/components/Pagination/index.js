import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
display:flex;
flex-direction:row;
padding:0;
align-items:center;
justify-content:center;
margin-top:2%;
`;

const Content = styled.div`
width:100%

`;

const List = styled.li`
list-style:none;
padding: 0 2%;
border: thin solid ${({ theme }) => theme.colors.mediumGreen};
border-radius:8px;
`;

const Text = styled.a`
color:black;
`;

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Content>
      <Ul>
        {pageNumbers.map((number) => (
          <List key={number}>
            <Text onClick={() => paginate(number)}>
              {number}
            </Text>
          </List>
        ))}
      </Ul>
    </Content>
  );
};

export default Pagination;
