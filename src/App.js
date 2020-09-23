import React from 'react';

// import components


// import GlobalProvider and AppReducer
import {TransactionProvider} from './transContext';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistroy } from './components/TransactionHistroy';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (

      <TransactionProvider>
        <div className="container">
          <Header />
          <Balance />
          <AccountSummary />
          <TransactionHistroy />
          <AddTransaction />
        </div>
      </TransactionProvider>
  );
}

export default App;
