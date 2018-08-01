import React, { Component } from 'react';
import Projects from './ProjectsComponent';
import ProjDetail from './ProjDetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { PROS } from '../shared/projects';
import { MAINNEWS } from '../shared/mainnews';
import { COMMENTS } from '../shared/comments';
import { CERTIFICATES } from '../shared/certificates';
import '../App.css';
import { Switch, Route, Redirect } from 'react-router-dom';




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
        
		const ProjWithIt = ({match}) => {
return(
    <ProjDetail proj={this.state.pros.filter((proj) => 
        proj.id === 
    parseInt(match.params.projId,10))[0]} 
  comments={this.state.comments.filter((comment) => 
    comment.projId === 
    parseInt(match.params.projId,10))} />
);
}
        return (
            <div>
            <Header />
            <Switch>
              <Route path='/home' component={() => <Home mainnews={this.state.mainnews}/>} />
              <Route path='/about' component={() => <About certificates={this.state.certificates}/>} />
              <Route exact path='/projects' component={() => <Projects pros={this.state.pros} />} />
              <Route path='/projects/:projId' component={ProjWithIt} />
              <Route exact path='/contact' component={() => <Contact />} />
              <Redirect to="/home" />
          </Switch> 
             <Footer />
             </div>
        );
    }
}

export default Main;