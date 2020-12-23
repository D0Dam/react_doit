import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const {
      boolV,
      numV,
      arrayV,
      objV,
      nodeV,
      funcV,
    } = this.props;

    return (
      <div>
        <span>불리언: {boolV}</span>
        <span>숫자값: {numV}</span>
        <span>배열값: {arrayV}</span>
        <span>객체값: {String(objV)}</span>
        <span>노드값: {nodeV}</span>
        <span>함수값: {String(funcV)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolV: PropTypes.bool,
  numV: PropTypes.number,
  arrayV: PropTypes.arrayOf(PropTypes.number),
  objV: PropTypes.object,
  nodeV: PropTypes.node,
  funcV: PropTypes.func,
}

export default ChildComponent;