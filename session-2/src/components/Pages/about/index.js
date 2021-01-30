import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../../footer/foot';
import NavBar from '../../navbar/nav';
export default function AboutPage() {


    return (
        <Container>
            <NavBar />
            <Container>
                <Image src=""></Image>
            </Container>
            <Container>

            </Container>
            <Container>
                <Row>
                    {/* cards for the more details */}
                    <Col>
                        <Card xs={6} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card xs={6} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}