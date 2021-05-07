import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cards from '../Cards';

const api = axios.create({ baseURL: 'http://localhost:3000/' });
const CardLine = styled.div`
display: flex;
justify-content: space-around;

align-items:center;
height: 40rem;
width: 90%;
`;
export default function MyProducts() {
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('api/products');
      console.log(response.data);
      const { data } = response;
      setMyProducts(data);
    }
    fetchData();
  }, []);
  return (
    <CardLine>
      {myProducts.length > 0
        && myProducts.map((product) => (<Cards product={product} key={product.product_id} />))}
    </CardLine>

  );
}
