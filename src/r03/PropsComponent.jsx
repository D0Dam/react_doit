import React from 'react';
import PropsTypes from 'prop-types';

class PropsComponent extends React.Component {
  render() {
    return (
      <div className="message-container">
        {this.props.name}
      </div>
    );
  }
}

PropsComponent.PropsTypes = {
  name: PropsTypes.string,
};

export default PropsComponent;