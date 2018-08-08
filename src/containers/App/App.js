import React from 'react';
import { connect } from 'react-redux';

import styles from './App.css';

import Button from '../../components/Button';
import Spinner from '../../components/UI/Spinner';
import Dropdown from '../../components/Dropdown';

import { fetchData, selectOption } from '../../store/actions/actions';

class App extends React.Component {
  onSelect = e => {
    this.props.onSelect(e.target.value);
  };

  render() {
    let dropdown = <Spinner />;
    if (!this.props.loading) {
      if (this.props.payload) {
        dropdown = (
          <Dropdown
            value={this.props.current}
            onChange={this.onSelect}
            payload={this.props.payload}
          />
        );
      } else {
        dropdown = null;
      }
    }

    return (
      <div className={styles.container}>
        <Button
          onClick={this.props.onFetchData}
          disabled={this.props.loading}
        />
        {dropdown}
        {this.props.payload && !this.props.loading ? (
          <div className={styles.titleDiv}>
            Current value:<p>{this.props.current}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { payload, current, loading } = state;
  return {
    payload,
    current,
    loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch(fetchData()),
    onSelect: value => dispatch(selectOption(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
