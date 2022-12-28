import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
//styles and HTML taken from https://tailwindui.com/components/application-ui/navigation/navbars
export default function Custom_Navbar(props) {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Got Style?</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Homepage</Nav.Link>
                            <Nav.Link href="#">About Us</Nav.Link>
                            <NavDropdown title="Products">
                                <NavDropdown.Item>Sweaters</NavDropdown.Item>
                                <NavDropdown.Item>T-Shirts</NavDropdown.Item>
                                <NavDropdown.Item>Sweatpants</NavDropdown.Item>
                                <NavDropdown.Item>Shoes</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        Signed In as: <a href="#">Undefined</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </Container>
    );
}
