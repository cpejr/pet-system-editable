import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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
display:flex;
list-style:none;
padding: 0 2%;
margin: 0;
width: 6%;
justify-content: center;
border: thin solid ${({ theme }) => theme.colors.mediumGreen};
border-radius:8px;
align-items:center;
@media(max-width:500px){
  width:7%;
  }
`;

const Text = styled.a`
color:black;
`;

const Pagination = ({
  ordersPerPage, totalOrders, paginate, previousPage, nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Content>
      <Ul>
        <List>
          <AiOutlineArrowLeft onClick={() => paginate(previousPage)} />
        </List>
        {pageNumbers?.map((number) => (
          <List key={number}>
            <Text onClick={() => paginate(number)}>
              {number}
            </Text>
          </List>
        ))}
        <List>
          <AiOutlineArrowRight onClick={() => paginate(nextPage)} />
        </List>
      </Ul>
    </Content>
  );
};

export default Pagination;
