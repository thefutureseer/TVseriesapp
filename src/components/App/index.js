import React, { Component } from 'react';
import Intro from '../Intro';
import Series from '../../containers/Series';
import './App.css';
import 'whatwg-fetch';

class App extends Component{

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          T.V. Series
        </a>
      </header>
      <Intro message= "Here are all your favorite T.V. series"/>
      <Series/>
    </div>
  );}
}

export default App;
