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
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
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