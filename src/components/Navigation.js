import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
// import { hasBinary } from 'node-sass/lib/extensions';
// import { Modal } from 'bootstrap';
import Modal from 'react-bootstrap/Modal';


export const Navigation =() =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        // <nav className="flex justify-between items-center h-[55px] px-10 shadow-md bg-gradient-to-r from-green-500 to-fuchsia-500 text-white">
        //     <h3 className='font-bold text-black'>Russian North Ecology Base</h3>
        //     <span>
        //         <Link to="/home" className="mr-2">Home</Link>
        //         <Link to="/">Map</Link>
        //     </span>
        // </nav>
        <>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">Russian North Ecology Base</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 ml-20"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                >
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/">Map</Nav.Link>
                    <Nav.Link href="/expeditions">Expeditions</Nav.Link>
                    <Nav.Link href="#action4">Transects</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                    <Nav.Link href="#action6">Methods</Nav.Link>
                    <Nav.Link href="/publications">Publications</Nav.Link>
                    <Nav.Link href="#action8">Contact</Nav.Link>
                </Nav>
                <Nav>
                    {/* <NavDropdown
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
                    </NavDropdown> */}
                    <Button variant="outline-success" className="mr-2" onClick={handleShow}>Log In</Button>
                    <Button variant="outline-success" onClick={handleShow}>Sign Out</Button>
                    
                </Nav>
                {/* <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}