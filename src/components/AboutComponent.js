import React from 'react';
import { UncontrolledCollapse, Breadcrumb, BreadcrumbItem, Card, CardBody, Button, CardHeader, Media, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

function About(props) {

    const certificates = props.certificates.map((certificate) => {
        return (
            <Fade in>
               <div>
    <Button dark color="dark" width="100%" id={`toggler${certificate.id}`} style={{ marginBottom: '1rem' }}>
    {certificate.name}
    </Button>
    <UncontrolledCollapse toggler={`#toggler${certificate.id}`}>
      <Card>
      <CardImg src={certificate.image} alt={certificate.name} />
      </Card>
    </UncontrolledCollapse>
  </div>
  </Fade>
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
                    <a href="/assets/files/Dariusz_Korolczuk_CV.pdf"><h4><span className="fa fa-floppy-o"></span> Download my CV</h4></a>
                    
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader dark className="bg-dark text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Born</dt>
                                <dd className="col-6">22 Aug 1986</dd>
                                <dt className="col-6">Nationality</dt>
                                <dd className="col-6">Polish</dd>
                                <dt className="col-6">City</dt>
                                <dd className="col-6">Manchester</dd>
                                <dt className="col-6">Country</dt>
                                <dd className="col-6">UK</dd>
                                <dt className="col-6">Coding in</dt>
                                <dd className="col-6">JS</dd>
                                <dt className="col-6">Instrument</dt>
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
                                We are all now connected by the Internet, like neurons in a giant brain.
                                </p>
                                <footer className="blockquote-footer">
                                Stephen Hawking
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
                    <Stagger in>
                        {certificates}
                    </Stagger>
                    </Media>
                </div>
            </div>
        </div>
    );
}


export default About;