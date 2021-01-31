import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import './navBar.css'

export default function NavBar() {


    return (
        <Container fluid style={{ style: 0 }}>
            <Nav id="nav-back" className="navbar-expand-lg">
                <a className="navbar-brand" href="index.html">CleanWater</a>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <Nav.Item>
                        <Nav.Link href="">Who We Are</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="">What We Do</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="">Get Involved</Nav.Link>
                    </Nav.Item>
                </div>

                <div className="d-none d-lg-block">
                    <Button href="" >Sign up</Button>
                    <Button href="" >Log in</Button>
                </div>
            </Nav>
        </Container>
    );
}