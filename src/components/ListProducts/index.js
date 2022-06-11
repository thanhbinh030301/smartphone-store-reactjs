import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { productsListSlector } from "../../redux/selectors";
import ProductItem from "../ProductItem";

const ListProducts = (props) => {
    const productsList = useSelector(productsListSlector)  
    if(props.brand){
        const brand = props.brand[0].toUpperCase() + props.brand.slice(1); //uppercase first letter
        const productsByBrand = productsList.filter(product => product.brand === props.brand)
    return (
        <Container className="wrap-container mt-4 p-4" style={{minHeight: "70vh"}}>
            <h2>{brand}</h2>
            <hr className = "line mb-4"/>
            <Row xl={5} lg={4} md={3} xs={2} >
                {productsByBrand.map(product =>(
                    <Col>
                        <ProductItem key={product._id} product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
    }
    if(props.query){
        const producsBySearch = productsList.filter(product => product.name.toLowerCase().includes(props.query.toLowerCase()))
        console.log(producsBySearch)
        return (
            <Container className="wrap-container mt-4 p-4" style={{minHeight: "70vh"}}>
                <h2>Kết quả tìm kiếm: {props.query}</h2>
                <hr className = "line mb-4"/>
                {(producsBySearch.length !== 0)
                ?(
                    <Row xl={5} lg={4} md={3} xs={2}>
                        {producsBySearch.map(product =>(
                            <Col>
                                <ProductItem key={product._id} product={product} />
                            </Col>
                        ))}
                    </Row>
                )
                :(
                    <Row className="text-center">
                        <Col>
                            <h2>Không tìm thấy sản phẩm nào</h2>
                        </Col>
                    </Row>
                )
            }
                
            </Container>
        )
    }
}
export default ListProducts;