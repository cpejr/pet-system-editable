import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../../src/components/Cards';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

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
    <div>
      {myProducts.length > 0
        && myProducts.map((product) => (<Cards product={product} key={product.product_id} />))}
    </div>

  );
}
