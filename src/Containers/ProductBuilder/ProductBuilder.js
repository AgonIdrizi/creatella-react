import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import ProductsGrid from '../../Components/ProductsGrid/ProductsGrid';
import './ProductBuilder.css';

const ProductBuilder = () => {
  const onSortHandler = sortBy => {
    console.log(sortBy);
  };
  return (
    <div className="ProductBuilder">
      <Header onSortHandler={onSortHandler} />
      <ProductsGrid />
    </div>
  );
};

export default ProductBuilder;
