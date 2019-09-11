import React, { useState, useEffect } from 'react';
import SortIcons from './SortIcons/SortICons';
import './Header.css';

const handleSortIconType = type => {};

const Header = props => {
  return (
    <header className="mainHeader">
      <h1>Products</h1>
      <SortIcons onSortHandler={props.onSortHandler} />
    </header>
  );
};

export default Header;
