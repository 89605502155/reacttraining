import React from 'react';
import { Article } from './Article';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const  Publications  = () => {
    return(
        <>
        <Container className="d-flex flex-row mb-3">
        <Row xs={1} md={3} className="g-4">
            <Article authors="Bro" data="2017"/>
            <Article authors="Osmund" data="2017"/>
            <Article authors="Rasmus" data="2019"/>
        </Row>
        </Container>
        </>
    );
};