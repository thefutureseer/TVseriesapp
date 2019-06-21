import React from 'react';
import './App.css';

const Intro = (props) => ( <p>
  Functional TV list here.
</p>);

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
      <Intro/>
    </div>
  );
}

export default App;
