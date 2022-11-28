import React, { Component } from 'react';
//import images
import LeftEye from '../assets/look-left.jpeg';
import RightEye from '../assets/look-right.jpeg';

class ChallengeOne extends Component {
  //declare the state here
  state = {
    value: undefined
  };

  //click left/right button handler goes here
  handleClick = (direction) => {
    if(direction === 'left') {
      this.setState({ value: true })
    } else {
      this.setState({ value: false })
    }
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.value ? LeftEye : RightEye}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.handleClick("left")}>⭠</button>
        <button className="btn" onClick={() => this.handleClick("right")}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;