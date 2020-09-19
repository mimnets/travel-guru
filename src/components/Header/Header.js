import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <Container style={{paddingBottom: '50px'}}>
            <Navbar expand="lg" variant="light" bg="">
            <Navbar.Brand href="home">Travel Guru</Navbar.Brand>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav className="mr-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;