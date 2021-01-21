import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
import Footer from './components/Footer'
import { GlobalProvider } from './context/GlobalState'

import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <History/>
        <AddTransaction/>
      </div>
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
