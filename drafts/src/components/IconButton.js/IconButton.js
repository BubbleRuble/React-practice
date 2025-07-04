import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

// IconButton.defaultProps = {
//   onClick: () => null,
//   children: null,
// };

// IconButton.PropTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// };

export default IconButton;
