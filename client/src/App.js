import React, { Component } from 'react';
import './App.css';
// import Customers from './components/customers/customers';
import Navbar from './Navbar/Navbar';
import Routes from './Routes/Routes';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
