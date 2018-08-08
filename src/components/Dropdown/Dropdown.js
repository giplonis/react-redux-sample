import React from 'react';
import styles from './Dropdown.css';

import PropTypes from 'prop-types';

const Dropdown = props => (
  <select
    className={styles.dropdown}
    value={props.value}
    onChange={props.onChange}
  >
    {props.payload.payload.map(option => (
      <option className={styles.option} value={option.id} key={option.title}>
        {option.title}
      </option>
    ))}
  </select>
);

Dropdown.proptypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
