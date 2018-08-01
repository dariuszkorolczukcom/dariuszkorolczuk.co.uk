import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand,NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Clock from './ClockComponent';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
    return(
    <div>
                <Navbar dark color="dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/projects'><span className="fa fa-list fa-lg"></span> Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactme'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                            </NavItem>
                            
                            </Nav>
                        </Collapse>
                        
                    </div>
                    
                </Navbar>
                <div className="container">
                        <div className="row row-header">
                        <Clock />
                        </div>
                    </div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <img src='assets/images/basshorizontal.png' width="100%"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <h4>fretless webdesign by</h4>
                                <h1>Dariusz Korolczuk</h1>
                                <p><i>no frets attached</i></p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
    );
  }
}

export default Header;