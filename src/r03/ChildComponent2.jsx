import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const {
      objV,
      requiredStringV,
    } = this.props;
    return (
      <div>
        <div>객체값: {String(Object.entries(objV))}</div>
        <div>필수값: {requiredStringV}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objV: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredStringV: PropTypes.string.isRequired,
}

export default ChildComponent2;