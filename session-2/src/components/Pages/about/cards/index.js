import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default function descriptionCard(props) {

    const title = props.title;
    const descrip = props.descr;
    const img = props.img;

    return (
        <Card style={{ width: '100%', padding: '16px', margin: '16px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {descrip}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}