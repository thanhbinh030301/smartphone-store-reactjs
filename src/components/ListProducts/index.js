import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { productsListSlector } from "../../redux/selectors";
import ProductItem from "../ProductItem";

const ListProducts = (props) => {
    const brand = props.brand[0].toUpperCase() + props.brand.slice(1); //uppercase first letter
    const productsList = useSelector(productsListSlector)  
    console.log(productsList)
    return (
        <Container className="wrap-container mt-4 p-4">
            <h2>{brand}</h2>
            <hr className = "line mb-4"/>
            <Row xl={5} lg={4} md={3} xs={2} >
                {productsList.map(product =>(
                    <Col>
                        <ProductItem key={product._id} product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default ListProducts;