import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import './ProductsGrid.css';

const ProductsGrid = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products?_page=1&_limit=15')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));

    return () => console.log('returning');
  }, []);
  return (
    <section className="ProductsGrid">
      {loading && <div>loading</div>}
      {data &&
        data.length > 0 &&
        data.map(product => (
          <Product
            key={product.id}
            size={product.size}
            price={product.price}
            face={product.face}
            date={product.date}
          />
        ))}
    </section>
  );
};

export default ProductsGrid;
