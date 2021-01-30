import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../../footer/foot';
import NavBar from '../../navbar/nav';
import Cards from './cards'

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
                    <Col xs={6}>
                        <Cards title="uwu" descr="another uwu" />
                    </Col>

                    <Col xs={6}>
                        <Cards title="uwu" descr="another uwu" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}