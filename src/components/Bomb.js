// Bomb Component Code Goes Here
// Bomb Component Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: parseInt(`${props.initialCount}`)
    }
  }

  render() {
    if(this.state.secondsLeft === 0) {
      return (
        <div>Boom!</div>
      )
    } else{
      return (
        <div>
          {this.state.secondsLeft} seconds left before I go boom!
        </div>
      )
    }
  }
}

Bomb.defaultProps= {
  initialCount: 120
};
