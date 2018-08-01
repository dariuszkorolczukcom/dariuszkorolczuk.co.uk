import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import MapWithAMarker from './MapComponent';

function Contact(props) {
    return(
        <div className="container">
         <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        
                        <address>
                        Swinton<br />
                        Manchester<br />
                        United Kingdom<br />
                        <i className="fa fa-phone"></i>: +44 7508 616 909<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:dkorolczuk86@gmail.com">dkorolczuk86@gmail.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>
                        <MapWithAMarker googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />}containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+447508616909"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:dkorolczuk86@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;