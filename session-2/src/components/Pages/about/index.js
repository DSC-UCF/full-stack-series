import React from 'react';
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import Cards from './cards';
import whoMainPic from "../../../resources/pictures/whomainpic.jpg";
import whoInfo1 from "../../../resources/pictures/whoinfo.jpg"
import whoInfo2 from "../../../resources/pictures/whoinfo2.jpg"

import { BsSearch } from 'react-icons/bs'
export default function AboutPage(props) {

    return (
        <>
            <Container fluid style={{ padding: 0, margin: 0 }}>
                <Container fluid style={{ padding: 0, margin: 0 }}>
                    <Image src={whoMainPic} width="100%"></Image>
                </Container>
                <Container fluid style={{ padding: "15px", backgroundColor: '#145DA0' }} >
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
                            <Cards title="" descr="We work with multiple organization to coordinate the most impact" img={whoInfo1} btnMsg="Our History" />
                        </Col>

                        <Col xs={6}>
                            <Cards title="" descr="We work with multiple organization to coordinate the most impact" img={whoInfo2} btnMsg="How We Work" />
                        </Col>
                    </Row>
                </Container>
            </Container >
        </>
    );
}