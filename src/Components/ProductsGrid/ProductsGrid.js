import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import { Spin } from 'antd';
import Ad from '../Ad/Ad';
import 'antd/es/spin/style/index.css';
import axios from 'axios';
import './ProductsGrid.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, loading: false };
    case 'load':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        nextPage: state.nextPage + 1,
      };
    case 'preFetch':
      return {
        ...state,
        preFetchedData: action.payload,
        isPreFetching: false,
      };
    case 'setIsFetching': {
      return {
        ...state,
        isPreFetching: true,
      };
    }
    case 'bottom':
      //nextPage keeps track of what should be our page to preFetch data 'api/products?_page=1'
      //we update nextPage, only when user scrolls at the bottom and we are not in process of preFetching data
      //e.g. when we dispatch the bottom action in handleScroll function,
      //we dont want to update nextPage if we are in the procces of preFetching data
      const nextPage = state.isPreFetching
        ? state.nextPage
        : state.nextPage + 1;
      return {
        ...state,
        data: [...state.data, ...state.preFetchedData],
        preFetchedData: [],
        nextPage: nextPage,
      };

    case 'addsLastNumber':
      return {
        ...state,
        lastAddsNumber: action.payload,
      };
    default:
      throw new Error();
  }
};

const ProductsGrid = props => {
  const [state, dispatch] = React.useReducer(reducer, {
    data: [],
    isLoading: true,
    preFetchedData: [],
    isPreFetching: false,
    nextPage: 2,
    lastAddsNumber: 0,
  });

  const {
    data,
    preFetchedData,
    isLoading,
    isPreFetching,
    nextPage,
    lastAddsNumber,
  } = state;

  //this effect is used to add a scroll event-listener, so we can detect when the page is at bottom,
  //we also fetch the first batch of data here
  //when component unmounts, the cleaner function of this effect will remove our scroll-event that we added early on
  //this effect will run only once, that's why we have empty array dependencies [] as second argument passed
  useEffect(() => {
    console.log('first effect');
    window.addEventListener('scroll', handleScroll);
    axios
      .get('http://localhost:3000/api/products?_page=1&_limit=15')
      .then(response => {
        dispatch({ type: 'load', payload: response.data });
      })
      .catch(error => console.log(error));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //second effect will run after the first effect
  //and then will re-run every time when state of nextPage changes
  useEffect(() => {
    console.log('second effect');
    dispatch({ type: 'setIsFetching' });
    axios
      .get(`http://localhost:3000/api/products?_page=${nextPage}&_limit=15`)
      .then(response => {
        dispatch({ type: 'preFetch', payload: response.data });
      })
      .catch(error => console.log(error));
  }, [nextPage]);

  const handleScroll = () => {
    const scrollTop =
      window.document.documentElement.scrollTop ||
      window.document.body.scrollTop;
    const scrollHeight =
      window.document.documentElement.scrollHeight ||
      window.document.body.scrollHeight;

    const scrolledToBottom = scrollTop + window.innerHeight >= scrollHeight;

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
                lastAddsNumber={lastAddsNumber}
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
        '~ end of catalogue ~'}
    </section>
  );
};

export default ProductsGrid;
