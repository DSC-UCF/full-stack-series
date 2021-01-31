import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css' // will only load the footer.css if the foot is rendered
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

export default function Footer() {

    const iconFont = {
        fontSize: '36px'
    }

    return (
        <Container className="footer" fluid style={{ paddingTop: '30px' }}>
            <Row className="justify-content-center text-center">
                <Col md={3} xs={12}>
                    <p>Clean Water Co.</p>
                    <p>000-000-0000</p>
                    <p>dscucf@gmail.com</p>
                </Col>

                <Col md={3} xs={12} className="text-center my-auto">
                    <AiOutlineInstagram style={iconFont} />
                    <AiOutlineTwitter style={iconFont} />
                    <AiOutlineFacebook style={iconFont} />
                </Col>

                <Col md={3} xs={12} className="text-right text-center my-auto">
                    <p>Copyright Clean Water Co.</p>
                </Col>
            </Row>
        </Container>

    );
}