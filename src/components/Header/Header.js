import React, { useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:'',
    })
    return (
        <Container style={{paddingBottom: '50px'}}>
            <Navbar expand="lg" variant="light" bg="">
            <Navbar.Brand href="/home">Travel Guru</Navbar.Brand>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link>{user.isSignedIn && <div><p>{user.name}</p></div>}</Nav.Link> 
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;