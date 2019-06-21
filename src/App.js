import React from 'react';
import './App.css';
import Intro from './components/Intro/index';

function App() {
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
      <Intro message= "Here are all your favorite T.V. series:"/>
    </div>
  );
}

export default App;
