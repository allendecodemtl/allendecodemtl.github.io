import React from 'react';

class CharacterLimit extends React.Component{

  constructor(){
    super();
    this.state = {
      currentInput: ""
    };
  }


  _handleInput = (event) => {
    var value = event.target.value;
    // continue here...
    // Below is the syntax to change state this.setState(object)
    this.setState({ currentInput: value });
  }

  render() {
    return (
      <div>
          <input type="text" ref="inputCounter" onInput={this._handleInput}/>
          <p></p>
          <label for="message"> {this.props.limit - this.state.currentInput.length} Characters</label>
      </div>
    );
  }
};

export default CharacterLimit;
