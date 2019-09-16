import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import { Spin } from 'antd';
import { fetchData } from './../../utilFunctions/fetchData';
import { reducer } from './../../reducers/reducer';
import Ad from '../Ad/Ad';
import PropTypes from 'prop-types';
import 'antd/es/spin/style/index.css';
import './ProductsGrid.css';

const ProductsGrid = ({ sortBy }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    data: [],
    isLoading: true,
    preFetchedData: [],
    isPreFetching: false,
    currentPage: 1,
    lastAdsNumber: 0,
    errorMessage: '',
  });

  const {
    data,
    preFetchedData,
    isLoading,
    isPreFetching,
    currentPage,
    lastAdsNumber,
    errorMessage,
  } = state;

  //this effect is used to add a scroll event-listener, so we can detect when the page is at bottom,
  //we also fetch the first batch of data here
  //when component unmounts, the cleaner function of this effect will remove our scroll-event that we added early on
  //this effect will run only once
  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

    const options = { sortBy: sortBy, currentPage: 1, type: 'load' };
    fetchData(dispatch, options);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //this effect will synchronize with sortBy prop,will dispatch an action to reload state-data,
  //and start fetching data with _sort param
  useEffect(() => {
    if (sortBy !== '') {
      dispatch({ type: 'startLoadWithSort' });
      const options = { sortBy: sortBy, currentPage: 1, type: 'load' };
      fetchData(dispatch, options);
    }
  }, [sortBy]);

  //this effect will preFetch data every time currentPage value changes
  //we change value of currentPage, when we are at the bottom && not in the proccess of preFetching
  useEffect(() => {
    if (currentPage > 1) {
      dispatch({ type: 'setIsFetching' });

      const options = {
        sortBy: sortBy,
        currentPage: currentPage,
        type: 'preFetch',
      };
      fetchData(dispatch, options);
    }
  }, [currentPage]);

  const handleScroll = () => {
    const scrollTop =
      window.document.documentElement.scrollTop ||
      window.document.body.scrollTop;
    const scrollHeight =
      window.document.documentElement.scrollHeight ||
      window.document.body.scrollHeight;

    const scrolledToBottom = scrollTop + window.innerHeight >= scrollHeight;
    //we dispatch bottom action only when at bottom
    if (scrolledToBottom) {
      dispatch({ type: 'bottom' });
    }
  };

  const onAddsCreate = value => {
    dispatch({ type: 'addsLastNumber', payload: value });
  };

  return (
    <section className="ProductsGrid">
      {isLoading && <Spin size="large" />}
      {data &&
        data.length > 0 &&
        data.map((product, index) => {
          return (index + 1) % 20 === 0 ? (
            [
              <Product
                key={product.id}
                size={product.size}
                price={product.price}
                face={product.face}
                date={product.date}
              />,
              <Ad
                key={`spacer-${product.id}`}
                lastAdsNumber={lastAdsNumber}
                onAddsCreate={onAddsCreate}
              />,
            ]
          ) : (
            <Product
              key={product.id}
              size={product.size}
              price={product.price}
              face={product.face}
              date={product.date}
            />
          );
        })}
      {isPreFetching && !isLoading && <Spin />}
      {!isPreFetching &&
        preFetchedData.length === 0 &&
        !isLoading &&
        errorMessage === '' &&
        '~ end of catalogue ~'}
      {errorMessage !== '' && errorMessage}
    </section>
  );
};

ProductsGrid.propTypes ={
  sortBy: PropTypes.string
}

export default ProductsGrid;
