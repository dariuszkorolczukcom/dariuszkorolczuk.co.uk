import React from 'react';
import { Card, CardLink, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import { Link } from 'react-router-dom';
    import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderProj({proj}) {
        if (proj != null)
            return(
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                <CardImg src={proj.image} alt={proj.name} />
                <CardBody>
                  <CardTitle>{proj.name}</CardTitle>
                  <CardText>{proj.description}</CardText>
                </CardBody>
            </Card>
             </FadeTransform>
            );
            else
          return(
              <div></div>
          );
        }
    function RenderComments({comments}) {
        
            return(
                <div>
                <h4>Info</h4>
                <Stagger in>
                {comments.map((comment) =>
                <div key={comment.id}>
                <p>{comment.comment}</p>
                </div>
                )}</Stagger></div>
                );}
        
        const ProjDetail = (props) => {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/projects">Projects</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.proj.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <CardLink href={props.proj.link}><h3>{props.proj.name}</h3></CardLink>
                        
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderProj proj={props.proj} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <CardLink href={props.proj.link}><p>visit-></p></CardLink>
                    </div>
                </div>
                </div>
            );
        }
    
    
    export default ProjDetail;