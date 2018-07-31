import React from 'react';
import { Card, CardLink, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import { Link } from 'react-router-dom';
    
    function RenderProj({proj}) {
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
    function RenderComments({comments}) {
        
            return(
                <div className="col-12 col-md-5 m-1">
                <h4>Info</h4>
                {comments.map((comment) =>
                <div key={comment.id}>
                <p>{comment.comment}</p>
                </div>
                )}
                </div>
            );
            
        }
        const ProjDetail = (props) => {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/projects">Projects</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.proj.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.proj.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderProj proj={props.proj} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }
    
    
    export default ProjDetail;