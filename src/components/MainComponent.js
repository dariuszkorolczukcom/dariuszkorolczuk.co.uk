import React, { Component } from 'react';
import '../App.css';
import Projects from './ProjectsComponent';
import { PROS } from '../shared/projects';
import { MAINNEWS } from '../shared/mainnews';
import { COMMENTS } from '../shared/comments';
import { CERTIFICATES } from '../shared/certificates';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProjDetail from './ProjDetailComponent';
import About from './AboutComponent';



class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pros:PROS,
            mainnews:MAINNEWS,
            comments:COMMENTS,
            certificates:CERTIFICATES
        };
    }
   
    render() {
        return (
            <div>
              <Header />
              <Switch>
              <Route path='/home' component={() => <Home mainnews={this.state.mainnews}/>} />
              <Route path='/about' component={() => <About certificates={this.state.certificates}/>} />
              <Route exact path='/projects' component={() => <Projects pros={this.state.pros} />} />
              <Route path='/projects/:projId' component={({match}) => <ProjDetail proj={this.state.pros.filter((proj) => proj.id === 
            parseInt(match.params.projId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.projId === 
            parseInt(match.params.projId,10))} />} />
              <Route exact path='/contactme' component={() => <Contact />} />
              <Redirect to="/home" />
          </Switch>
             <Footer />
             </div>
        )
    }
}

export default Main;