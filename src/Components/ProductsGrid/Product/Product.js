import React from 'react';
import { Card } from 'antd';
import Face from './Face/Face';
import 'antd/es/card/style/index.css';
import './Product';

const cardStyle = { width: 150, height: 150 };

const Product = props => {
  return (
    <div className="Product">
      <Card name="test" hoverable={true} bordered={true} style={cardStyle}>
        <Face face={props.face} fontSize={props.size} />
        <p>Size: </p>
        <p>Price: 23$</p>
        <p>Date: </p>
      </Card>
    </div>
  );
};

export default Product;
