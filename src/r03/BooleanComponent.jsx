import React from 'react';

class BooleanComponent extends React.Component {
  render() {
    const message = this.props.bored ? '놀러 가자' : '하던 일 열시미히 마무리하자';
    return (
      <div className="message-container">
        {message}
      </div>
    );
  }
}

export default BooleanComponent;