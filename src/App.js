import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Dariusz Korolczuk</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
