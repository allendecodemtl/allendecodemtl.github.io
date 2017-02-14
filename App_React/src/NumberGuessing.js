import React from 'react';

class NumberGuessing extends React.Component{

  constructor(){
    super();
    this.state = {
      gameStatus: 'win|lose|playing',
      numberToGuess: 42, // something between 1 and 100 generated when we start a game
      guesses: [], // initially guesses is an empty array
      numberOfTries:5,
      tooHigh: false,
      tooLow: false

    };
  }

  _startGame = () => {
    this.setState({
        gameStatus: 'playing',
        numberToGuess: 42, // something between 1 and 100 generated when we start a game
        guesses: [], // initially guesses is an empty array
        numberOfTries:5,
        tooHigh: false,
        tooLow: false
      });

    this.refs.userGuess.value = ""

  }

  _handleButtonClick = (event) => {
    if(this.state.numberOfTries <= 1){
      alert("Expired");
    } else {
      if (this.state.numberToGuess === +this.refs.userGuess.value){
        alert("here");

      } else if (this.state.numberToGuess < +this.refs.userGuess.value){
        this.state.tooHigh = true;
        this.state.tooLow = false;
        var guesses = this.state.guesses;
        guesses.push(+this.refs.userGuess.value);
        this.setState({ guesses: guesses, numberOfTries: +this.state.numberOfTries-1});

      } else if (this.state.numberToGuess > +this.refs.userGuess.value){
        this.state.tooLow = true;
        this.state.tooHigh = false;
        var guesses = this.state.guesses;
        guesses.push(+this.refs.userGuess.value);
        this.setState({ guesses: guesses, numberOfTries: +this.state.numberOfTries-1});
      }
    }
  }

  render() {
    return (
      <div>
        <p> Guess a number between 1 and 100</p>
        <p>
          Your guesses:{this.state.guesses.map(g => g + ", ")}
        </p>
        {this.state.tooHigh ? <label>too high</label> : null}
        {this.state.tooLow ? <label>too low</label> : null}
        <p>
          Remaining Tries: {+this.state.numberOfTries}
        </p>
        <p>
          <input type="text" ref="userGuess" />
          <button type="button" onClick={this._handleButtonClick}>
          Guess
          </button>
          <button type="button" onClick={this._startGame}>
          New Game
          </button>
        </p>
      </div>
    );
  }
};

export default NumberGuessing;
