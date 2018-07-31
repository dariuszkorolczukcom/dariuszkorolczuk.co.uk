import React from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
  import { Link } from 'react-router-dom';

  function RenderProjectItem ({proj}) {
    return (
        <Card>
        <Link to={`/projects/${proj.id}`} >
            <CardImg width="100%" src={proj.image} alt={proj.name} />
            <CardImgOverlay>
                <CardTitle>{proj.name}</CardTitle>
            </CardImgOverlay>
        </Link>
    </Card>
    );
}

const Projects = (props) => {

    const projects = props.pros.map((proj) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={proj.id}>
                <RenderProjectItem proj={proj} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Projects</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Projects</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            {projects}
        </div>
    </div>
    );
}

export default Projects;