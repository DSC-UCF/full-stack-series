import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'
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
                    <i className="fab fa-instagram" style={iconFont}></i>
                    <i className="fab fa-twitter" style={iconFont}></i>
                    <i className="fab fa-facebook" style={iconFont}></i>
                </Col>

                <Col md={3} xs={12} className="text-right text-center my-auto">
                    <p>Copyright Clean Water Co.</p>
                </Col>
            </Row>
        </Container>

    );
}