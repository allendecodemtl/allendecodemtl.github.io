import React, { Component } from 'react';
import ImageCaption from './ImageCaption';
import RedBox from './RedBox';
import Layout from './Layout';
import GuessTheNumber from './GuessTheNumber';
import YouClicked from './YouClicked';
import CharacterCounter from './CharacterCounter';
import CharacterLimit from './CharacterLimit';
import NumberGuessing from './NumberGuessing';
import GithubSearch from './GithubSearch';

import logo from './logo.svg';
import './App.css';


var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {

  renderImage(imageList){
    return <ImageCaption source={imageList.source} text={imageList.text} />
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <hr />

        <h2>Testing ImageCaption</h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg " text="This is a kittenz!" />

        <hr />

        <div>
          {imageList.map(this.renderImage)}
        </div>

        <hr />

        <RedBox>
          <p>This will be in the red box</p>
          <img alt="This too!" src="http://placekitten.com/g/200/200"/>
        </RedBox>

        <hr />

        <h2>Testing Layout</h2>
        <Layout>
          <nav className="main-nav">
            <ul>
              <li><a href="/">Home</a></li>
            </ul>
          </nav>
          <main>
          </main>
          <footer>
            Copywhat 2016 Kittens
          </footer>
        </Layout>

        <hr />

        <h2>Number guessing game</h2>
        <GuessTheNumber numberToGuess={43} />

        <hr />

        <YouClicked />

        <hr />

        <CharacterCounter />

        <hr />

        <CharacterLimit limit={140}/>

        <hr />

        <NumberGuessing />

        <hr />

        <GithubSearch />

        <hr />


      </div>
    );
  }
}

export default App;
