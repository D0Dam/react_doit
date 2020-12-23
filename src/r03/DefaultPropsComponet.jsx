import React from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends React.Component {
  render() {
    let message1 = '';
    if(this.props.boolV === false) {
      message1 = "기본값 false";
    }
    let message2 = '';
    if(this.props.boolVWD === false) {
      message2 = "기본값 false 2"
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolV: PropTypes.bool,
  boolVWD: PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
  boolV: false,
};

export default DefaultPropsComponent;