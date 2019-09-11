import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import './ProductBuilder.css';

const ProductBuilder = () => {
  
  const onSortHandler = (sortBy) => {
    console.log(sortBy)
  }
  return (
    <div className="ProductBuilder">
      <Header onSortHandler={onSortHandler} />
    </div>
  );
};

export default ProductBuilder;
