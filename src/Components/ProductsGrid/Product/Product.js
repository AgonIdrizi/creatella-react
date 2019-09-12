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
        <Face face={props.face} size={props.size} />
        <p>Size: {props.size} </p>
        <p>Price: {props.price}</p>
        <p>Date: {props.date}</p>
      </Card>
    </div>
  );
};

export default Product;
