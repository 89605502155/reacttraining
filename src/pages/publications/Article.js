import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from 'react-bootstrap';
import golangphot from './first.jpg';

export const  Article  = (props) => {
    return(
        <>
                
            <Col>
            <Card>
                <Card.Img variant="top" src={golangphot}/>
                <Card.Body>
                    <Card.Title>Golang</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.authors}</Card.Subtitle>
                    <Card.Text>It is a very interesting</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{props.data}</Card.Footer>
            </Card>
            </Col>
            
        </>
    );
};