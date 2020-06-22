import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';

function App() {
  return (
    <div>

      <Header></Header>
      <div className="container">
        <Balance></Balance>
      </div>

    </div>
  );
}

export default App;
