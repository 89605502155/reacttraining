import React from "react";
import "./Map.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function Map() {
    return (
        <div>
        {/* <div>
            <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">Russian North Ecology Base</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                >
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="#action2">Map</Nav.Link>
                    <Nav.Link href="#action3">Expeditions</Nav.Link>
                    <Nav.Link href="#action4">Transects</Nav.Link>
                    <Nav.Link href="#action5">News</Nav.Link>
                    <Nav.Link href="#action6">Methods</Nav.Link>
                    <Nav.Link href="#action7">Publications</Nav.Link>
                    <Nav.Link href="#action8">Contact</Nav.Link>
                    <NavDropdown
                    title="Personal account"
                    id="navbarScrollingDropdown"
                    >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div> */}
        <div>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                <Container>
                    <Row xs={2} md={4} lg={6} >
                        <Col style={{backgroundColor: 'green'}}>1 of 2</Col>
                        <Col style={{backgroundColor: 'yellow',
                        borderColor: 'red',
                        border: '5px solid'}}>2 of 2</Col>
                    </Row>
                </Container>
                    {/* <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                        1 of 3
                        </Col>
                        <Col md="auto">Variable width content</Col>
                        <Col xs lg="2">
                        3 of 3
                        </Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col md="auto">Variable width content</Col>
                        <Col xs lg="2">
                        3 of 3
                        </Col>
                    </Row>
                    </Container> */}
                </Popup>
            </Marker>
            </MapContainer>
        </div>
        <div>
        <Container>
        <Row xs={2} md={4} lg={6} >
            <Col style={{backgroundColor: 'green'}}>1 of 2</Col>
            <Col style={{backgroundColor: 'yellow',
            borderColor: 'red',
            border: '5px solid'}}>2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
            <Col style={{backgroundColor: 'green'}}>1 of 3</Col>
            <Col style={{backgroundColor: 'yellow',
            borderColor: 'red',
            border: '5px solid'}}>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        <Row xs="auto">
            <Col style={{backgroundColor: 'green'}}>1 of 3</Col>
            <Col style={{backgroundColor: 'yellow',
            borderColor: 'red',
            border: '5px solid'}}>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>
        </div>
        </div>
    );
}
