import React, { useState, useEffect } from 'react';
import SortIcons from './SortIcons/SortICons';
import PropTypes from 'prop-types';
import './Header.css';


const Header = props => {
  return (
    <header className="mainHeader">
      <h1>Products</h1>
      <SortIcons onSortHandler={props.onSortHandler} />
    </header>
  );
};

Header.propTypes = {
  onSortHandler: PropTypes.func
}

export default Header;
