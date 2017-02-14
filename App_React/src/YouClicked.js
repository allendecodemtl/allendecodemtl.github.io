import React from 'react';

class YouClicked extends React.Component{

  constructor(){
    super();
    this.state = {timesClicked:0, timeReset:0};
  }

  _handleButtonClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  _handleButtonReset = () => {
    this.setState({
      timesClicked: 0,
      timeReset: this.state.timeReset + 1
    });
  }

  render() {
    return (
      <div>
          <button type="button" onClick={this._handleButtonClick}>
          CLICK ME!
          </button>
          <button type="button" onClick={this._handleButtonReset}>
          RESET
          </button>
          <p></p>
          <label for="message">You have clicked the button {this.state.timesClicked} times</label>
          <p></p>
          <label for="resetmessage">You reset {this.state.timeReset} times</label>
      </div>
    );
  }
};

export default YouClicked;
