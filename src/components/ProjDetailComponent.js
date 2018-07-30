import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardLink } from 'reactstrap';

    class ProjDetail extends Component {
        constructor(props) {
            super(props);
                this.state = {}
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
    renderComments(selectedProj) {
        if (selectedProj != null)
            return(
                <div className="col-12 col-md-5 m-1">
                <h4>Info</h4>
                {selectedProj.comments.map((comment) =>
                <div key={comment.id}>
                <p>{comment.comment}</p>
                </div>
                )}
                </div>
            );
            else
          return(
              <div></div>
          );
        }
        render() {
            return(
                <div className="container">
                <div className="row">
                    {this.renderProj(this.props.selectedProj)}
                    {this.renderComments(this.props.selectedProj)}
                </div>
                </div>
            );
        }
    }
    
    export default ProjDetail;