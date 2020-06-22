import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';

//Provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>

      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <AccountSummary></AccountSummary>
        <Transction></Transction>

      </div>

    </div>
  );
}

export default App;
