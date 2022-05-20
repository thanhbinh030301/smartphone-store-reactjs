import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductItem = () => {
    return(
        <Card>
            <Card.Img  variant="top" src="https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg" />
            <Card.Body>
                <Card.Title>Iphone 12</Card.Title>
                <Card.Text>
                    Giá từ 12000000đ
                </Card.Text>
                <Link to = "/product">
                    <Button variant="primary" >Mua ngay</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProductItem