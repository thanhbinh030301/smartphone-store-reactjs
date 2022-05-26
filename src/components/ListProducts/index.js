import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../ProductItem";

const ListProducts = () => {
    return (
        <Container className="wrap-container mt-4 p-4">
            <h2>Điện thoại</h2>
            <hr className = "line mb-4"/>
            <Row xl={5} lg={4} md={3} xs={2} >
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