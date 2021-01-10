import React from 'react';
import PropTypes from 'prop-types';
import Button from '../r04/Button';
import { Consumer } from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ children }) {
  return (
    <React.Fragment>
      <Consumer>
        children = {value => (
          <Button onPress={() => value.setLoading('loading', !value.loading)}>
            {value.loading ? '로딩중' : children}
          </Button>
        )}
      </Consumer>
      <Consumer>
        children = {({ loading2, setLoading }) => (
          <Button onPress={() => setLoading('loading2', !loading2)}>
            {loading2 ? '로딩중' : children}
          </Button>
        )}
      </Consumer>
      <Consumer>
        children = {({ loading, loading2 }) => <Button>{loading && loading2 ? '로딩중' : children}</Button>}
      </Consumer>
    </React.Fragment>
  );
}

ButtonWithNewConsumer.propTypes = {
  label: PropTypes.string,
};

export default ButtonWithNewConsumer;