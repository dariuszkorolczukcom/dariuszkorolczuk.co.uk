import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, CardLink } from 'reactstrap';

class Projects extends Component {
    constructor(props) {
        super(props);
    }


  renderProj(proj) {
      if (proj != null)
          return(
              <Card>
                  <CardImg top src={proj.image} alt={proj.name} />
                  <CardBody>
                    <CardTitle>{proj.name}</CardTitle>
                    <CardText>{proj.description}</CardText>
                    <CardLink href={proj.link}>visit</CardLink>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

    render() {
        const projects = this.props.pros.map((proj) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={proj.id}>
                  <CardImg width="100%" src={proj.image} alt={proj.name} />
                  <CardImgOverlay>
                      <CardTitle>{proj.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {projects}
            </div>
          </div>
        );
    }
}

export default Projects;