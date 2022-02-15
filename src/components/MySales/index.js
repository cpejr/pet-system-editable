import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import moment from 'moment';
import MySalesMonth from '../MySalesMonth';
import api from '../../utils/api';
import MySalesInfo from '../OrdersPagination';
import Pagination from '../Pagination';

const DividerContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
@media(max-width:960px){
  flex-direction:column;
}
@media(max-width:560px){
    width:100%;
    flex-direction:column;
    }
`;

DividerContainer.Col1 = styled.div`
width:10%;

`;
DividerContainer.Col2 = styled.div`
width:30%;
@media(max-width:960px){
    width:70%;
    }
@media(max-width:560px){
    width:90%;
    }
`;
DividerContainer.Col3 = styled.div`
width:60%;
@media(max-width:960px){
    width:100%;
    }
@media(max-width:560px){
    width:100%;
    }
`;

const BodyContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
margin-top:2%;
margin-bottom:2%;
`;

toast.configure();

export default function MySellerRequest({ value }) {
  const [revenue, setRevenue] = useState(0);
  const [orders, setOrders] = useState([]);
  const [share, setShare] = useState(0);
  const [storeProfit, setStoreProfit] = useState(0);
  const [amount, setAmount] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [ordersPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  let previousPage;
  let nextPage;

  if (currentPage === 1) {
    previousPage = totalOrders;
    nextPage = currentPage + 1;
  } else if (currentPage === totalOrders) {
    nextPage = 1;
    previousPage = currentPage - 1;
  } else {
    nextPage = currentPage + 1;
    previousPage = currentPage - 1;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function getSalesInfo() {
    try {
      const response = await api.get('/mySales', {
        params: {
          month: moment(value).format('M'),
          year: moment(value).format('Y'),
        },
      });
      setRevenue(response.data.revenue.sum);
      setShare(response.data.averageShare);
      setTotalOrders(response.data.totalOrders);
      setStoreProfit(response.data.storeProfit);
      setAmount(response.data.amount);
      setOrders(response.data.orders);
    } catch (error) {
      toast('Erro ao obter dados sobre as vendas.', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  useEffect(() => {
    getSalesInfo();
  }, [value]);

  return (
    <div>
      <DividerContainer>
        <DividerContainer.Col1 />
        <DividerContainer.Col2>
          <MySalesMonth
            value={value}
            totalOrders={totalOrders}
            revenue={revenue}
            amount={amount}
            share={share}
            storeProfit={storeProfit}
          />
        </DividerContainer.Col2>

        <DividerContainer.Col3>
          <BodyContainer>
            <MySalesInfo orders={currentOrders} />
            <Pagination
              ordersPerPage={ordersPerPage}
              totalOrders={totalOrders}
              paginate={paginate}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </BodyContainer>
        </DividerContainer.Col3>
      </DividerContainer>
    </div>
  );
}
