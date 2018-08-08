import React from 'react';
import styles from './Button.css';

import PropTypes from 'prop-types';

const Button = props => (
  <button
    disabled={props.disabled}
    onClick={props.onClick}
    className={styles.button}
  >
    {props.disabled ? (
      <span className={styles.buttonText}>Fetching Data</span>
    ) : (
      <span>Get Data</span>
    )}
  </button>
);

Button.proptypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
