import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './exrrorPage.scss'

const ErrorPage = ()=>{
    return (
        <Container className="container-error ">
            <Row style={{ height: "70vh" }} className="align-items-center">
                <Col>
                    <h1 className="title-error">404</h1>
                    <h2 className="info-error">Page Not Found</h2>
                    <p className="message-error">The Page you are looking for doesn't exist or an other error occured. Go to <Link to="/">Home Page.</Link></p> 
                </Col>
            </Row>      
        </Container>
    )
}
export default ErrorPage;