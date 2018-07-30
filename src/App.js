import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Projects from './components/ProjectsComponent';
import { PROS } from './shared/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pros: PROS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Dariusz Korolczuk</NavbarBrand>
          </div>
        </Navbar>
        <Projects pros={this.state.pros}/>
      </div>
    );
  }
}

export default App;
