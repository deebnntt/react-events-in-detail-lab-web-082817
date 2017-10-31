// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]); // prints 'click'
  };

  render() {
    return <button onClick={this.handleClick}>Click me!</button>;
  }
}

export default CoordinatesButton;
