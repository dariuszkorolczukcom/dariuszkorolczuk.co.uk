import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle, CardHeader, Media, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    const certificates = props.certificates.map((certificate) => {
        return (
            <Card>
                <CardImg src={certificate.image} alt={certificate.name} />
                <CardBody>
                <CardTitle>{certificate.name}</CardTitle>
                </CardBody>
            </Card>
            
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Me</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <p>A year ago I tried coding in C++ for the first time in my life and absolutely fell in love with it. More than with my bass guitar. After learning basics of PHP, and doing some courses in web design and web applications building, I started playing with JavaScript. This webpage was created with React.js. I feel confident about new features quite quickly</p>
                    <p>My plans are to keep coding, both as a job, and as a hobby.</p>
                    
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">DOB</dt>
                                <dd className="col-6">22 Aug 1986</dd>
                                <dt className="col-6">Nationality</dt>
                                <dd className="col-6">Polish</dd>
                                <dt className="col-6">Residence</dt>
                                <dd className="col-6">Manchester, UK</dd>
                                <dt className="col-6">coding in</dt>
                                <dd className="col-6">JS</dd>
                                <dt className="col-6">instrument</dt>
                                <dd className="col-6">Bass</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                
                                </p>
                                <footer className="blockquote-footer">
                                Yogi Berra
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Certificates</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {certificates}
                    </Media>
                </div>
            </div>
        </div>
    );
}


export default About;