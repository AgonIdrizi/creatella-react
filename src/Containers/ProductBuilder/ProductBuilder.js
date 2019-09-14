import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import ProductsGrid from '../../Components/ProductsGrid/ProductsGrid';
import './ProductBuilder.css';

const ProductBuilder = () => {
  const [sortBy, setSortBy] = useState('');
  const onSortHandler = sortByValue => {
    setSortBy(sortByValue);
    console.log(sortByValue);
  };

  return (
    <div className="ProductBuilder">
      <Header onSortHandler={onSortHandler} />
      <ProductsGrid sortBy={sortBy} />
    </div>
  );
};

export default ProductBuilder;
