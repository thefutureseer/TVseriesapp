import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';
import 'whatwg-fetch';

class App extends Component{
  state = {
    series: []
  }
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=vikings')
     .then(response => response.json())
     .then(json => this.setState({ series: json}))
  }

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
      Series episodes: {this.state.series.length}
    </div>
  );}
}

export default App;
