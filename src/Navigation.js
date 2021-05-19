import {Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () =>{
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">>
                <Navbar.Brand href="/home">Article Managing Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/author">Author</Nav.Link>
                        <Nav.Link href="/article">Article</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;