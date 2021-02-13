import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default class descriptionCard extends React.Component {

    constructor(props) {
        super(props);

    }


    // needed to render the component and only method needed for React Class Components
    render() {

        // const title = this.props.title;
        // const descrip = this.props.descr;
        // const img = this.props.img;
        // const btnMsg = this.props.btnMsg;

        const { title, descr, img, btnMsg } = this.props;

        return (
            // 
            <Card className="eventHolder" style={{ width: '100%', padding: '16px', margin: '16px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="centerText">
                        {descr}
                        {/*  */}
                    </Card.Text>
                    <Button variant="primary" className="infoButton" >{btnMsg}</Button>
                </Card.Body>
            </Card >
        );
    }
}