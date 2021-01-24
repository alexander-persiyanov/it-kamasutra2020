import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header></Header>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  );
}

export default App;
