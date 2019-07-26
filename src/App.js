import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './JazzBook';
import JazzBook from './JazzBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <JazzBook/>
    </div>
  );
}

export default App;
