import React from 'react';
import { Card } from 'antd';
import Face from './Face/Face';
import {
  formatDate,
  formatCentsToDollars,
} from '../../../utilFunctions/formaterUtils';
import 'antd/es/card/style/index.css';
import './Product.css';

const cardStyle = { width: '100%' };

const Product = ({ face, size, price, date }) => {
  return (
    <div className="Product">
      <Card
        name="test"
        hoverable={true}
        bordered={true}
        style={{ width: '100%' }}
      >
        <Face face={face} size={size} />
        <p>
          <span className="span-product">Size:</span> {size}{' '}
        </p>
        <p>
          <span className="span-product">Price:</span>{' '}
          {formatCentsToDollars(price)}
        </p>
        <p>
          <span className="span-product">Date added:</span> {formatDate(date)}
        </p>
      </Card>
    </div>
  );
};

export default Product;
