import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ResponsiveCard = ({ title, subtitle, description, btnText, btnColor }) => {
    return (
        <div>
            <Card>
                <CardImg top height="200px" src="https://wallpaperaccess.com/full/250725.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{subtitle}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button size='small' color={btnColor}>{btnText}</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default ResponsiveCard;