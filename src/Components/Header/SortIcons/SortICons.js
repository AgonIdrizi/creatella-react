import React from 'react';
import './SortIcons.css';
import PropTypes from 'prop-types';
import SortIcon from './SortIcon/SortIcon';
const SortIcons = props => {
  return (
    <div className="SortIcons">
      <SortIcon name="Price" onSortHandler={props.onSortHandler} />
      <SortIcon name="Size" onSortHandler={props.onSortHandler} />
      <SortIcon name="Id" onSortHandler={props.onSortHandler} />
    </div>
  );
};

SortIcons.propTypes = {
  onSortHandler: PropTypes.func
}

export default SortIcons;
