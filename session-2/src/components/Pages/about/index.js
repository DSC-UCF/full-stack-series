import React from 'react';
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import Footer from '../../footer/foot';
import NavBar from '../../navbar/nav';
import Cards from './cards';
import whoMainPic from "../../../resources/pictures/whomainpic.jpg";
import { BsSearch } from 'react-icons/bs'

import cardImg from "../../../resources/pictures/whoinfo.jpg"
export default function AboutPage() {


    return (
        <Container fluid style={{ padding: 0 }}>
            <NavBar />
            <Container fluid>
                <Image src={whoMainPic} width="100%"></Image>
            </Container>
            <Container fluid style={{ padding: "16px", backgroundColor: 'blue' }}>
                <Row className="justify-content-center">
                    <Col xs={4}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Append>
                                <Button><BsSearch /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {/* cards for the more details */}
                    <Col xs={6}>
                        <Cards title="uwu" descr="another uwu" img={cardImg} />
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