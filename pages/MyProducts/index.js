import React, { useEffect, useState } from 'react';
import Cards from '../../src/components/Cards';

export default function MyProducts() {
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    setMyProducts([
      { product_name: 'Ração', price: 20 },
      { product_name: 'Ração', price: 10 },
    ]);
  });
  return (
    <div>
      {myProducts.length > 0
        && myProducts.map((product) => (<Cards product={product} />))}
    </div>

  );
}
