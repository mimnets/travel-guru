import React, { useContext, useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser.displayName);
    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name:'',
    //     email:'',
    //     password:'',
    // })
    return (
        <Container style={{paddingBottom: '50px'}}>
            <Navbar expand="lg" variant="light" bg="">
            <Navbar.Brand href="/home">Travel Guru</Navbar.Brand>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                {/* <Nav.Link href="/search">Search</Nav.Link> */}
                {/* <Nav.Link href="/login">Login</Nav.Link> */}
                </Nav>
                <span>{loggedInUser.email}</span><span>&nbsp;&nbsp;</span>
                <button onClick={() => setLoggedInUser({})}>Sign Out</button>
            </Navbar>
        </Container>
    );
};

export default Header;