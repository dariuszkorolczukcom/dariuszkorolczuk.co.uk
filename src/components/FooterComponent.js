import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutme'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contactme'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Swinton<br />
		              Manchester<br />
		              United Kingdom<br />
		              <i className="fa fa-phone fa-lg"></i>: +44 7508 616 909<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:dkorolczuk86@gmail.com">
                         dkorolczuk86"gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/dariusz-korolczuk-a1ba22115/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/darekkorolczuk"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/user/darou86"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:dkorolczuk86@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Dariusz Korolczuk</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;