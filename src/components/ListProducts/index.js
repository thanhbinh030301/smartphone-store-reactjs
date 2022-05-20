import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../ProductItem";

const ListProducts = () => {
    return (
        <Container className="wrap-container d-flex mt-4">
            <Row lg={5} md={4} sm={2} >
                <Col>
                    <ProductItem/>
                </Col>
                <Col>
                    <ProductItem/>
                </Col>
                <Col>
                    <ProductItem/>
                </Col>
                <Col>
                    <ProductItem/>
                </Col>
                <Col>
                    <ProductItem/>
                </Col>
                <Col>
                    <ProductItem/>
                </Col>
            </Row>
        </Container>
    )
}
export default ListProducts;