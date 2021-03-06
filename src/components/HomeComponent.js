import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item }) {

    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.2) translateY(-50%)'
            }}>
            <Link to={item.link}>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </Link>
        </FadeTransform>
    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.mainnews[0]} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.mainnews[1]} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.mainnews[2]} />
                </div>
            </div>
        </div>
    );
}

export default Home;