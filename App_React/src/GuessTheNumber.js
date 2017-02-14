import React from 'react';

class GuessTheNumber extends React.Component{

  _handleButtonClick = () => {
    if(this.props.numberToGuess === +this.refs.userGuess.value){
      alert("You win!");
    } else {
      alert("You lose!");
    }
  }

  render() {
    return (
      <div>
        <p> Guess a number between 1 and 100</p>
        <p>
          <input type="text" ref="userGuess" />
          <button type="button" onClick={this._handleButtonClick}>
          Guess
          </button>
        </p>
      </div>
    );
  }
};

export default GuessTheNumber;
