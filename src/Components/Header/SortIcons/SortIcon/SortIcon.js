import React, { useState } from 'react';
import { Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import 'antd/es/input/style/index.css';
import 'antd/es/button/style/index.css';

const iconStyle = {
  fontSize: '17px',
  marginTop: 0,
  height: '25px',
  paddingLeft: '0px',
  paddingRight: '0px',
  verticalAlign: 'sub',
};

const SortIcon = props => {
  const [iconType, setIconType] = useState('down');
  const handleIconTypeClick = sortBy => {
    const iconTypeValue = iconType === 'down' ? 'up' : 'down';
    setIconType(iconTypeValue);
    props.onSortHandler(sortBy);
  };
  return (
    <p>
      <span>{props.name}:</span>
      <Button
        type="link"
        onClick={() => handleIconTypeClick(props.name.toLowerCase())}
      >
        <Icon type={iconType} style={iconStyle} />
      </Button>
    </p>
  );
};

SortIcon.propTypes = {
  onSortHandler: PropTypes.func
}

export default SortIcon;
