import React, { Component } from 'react';
import '../App.css';
import Projects from './ProjectsComponent';
import { PROS } from '../shared/projects';
import { MAINNEWS } from '../shared/mainnews';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pros:PROS,
            mainnews:MAINNEWS,
            selectedProj: null
        };
    }
    onProjSelect(projId) {
        this.setState({selectedProj: projId});
    }
    render() {
        return (
            <div>
              <Header />
              <Switch>
              <Route path='/home' component={() => <Home mainnews={this.state.mainnews}/>} />
              <Route exact path='/projects' component={() => <Projects pros={this.state.pros} />} />
              <Route exact path='/contactme' component={() => <Contact />} />
              <Redirect to="/home" />
          </Switch>
             <Footer />
             </div>
        )
    }
}

export default Main;