import React from 'react';
import ReactDOM from 'react-dom';
import ProductBuilder from '../src/Containers/ProductBuilder/ProductBuilder';

import './index.css';

const App = () => {
  return (
    <div className="app">
      <ProductBuilder />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
