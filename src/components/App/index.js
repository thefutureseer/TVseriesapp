import React from 'react';
import './App.css';
import Intro from '../Intro';

class App extends React.Component{
  state = {
    series: []
  }
  componentDidMount() {
    const series = ['The Gary Owen show', "Game of thrones"];
    setTimeout(()=> {
     this.setState({series});
    }, 2000);
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
