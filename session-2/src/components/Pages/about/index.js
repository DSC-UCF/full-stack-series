import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../../footer/foot';
import NavBar from '../../navbar/nav';
import Cards from './cards';
import whoMainPic from "../../../resources/pictures/whomainpic.jpg";

export default function AboutPage() {


    return (
        <Container fluid style={{ padding: 0 }}>
            <NavBar />
            <Container fluid>
                <Image src={whoMainPic} width="100%"></Image>
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