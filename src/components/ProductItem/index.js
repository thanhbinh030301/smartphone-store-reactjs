import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";
const ProductItem = (props) => {
    const {image, name, price, brand, slug} = props.product;
    return(
        <Card className="mb-4">
            <Card.Img  variant="top" src={image} height="250px"/>
            <Card.Body>
                <Card.Title style={{ height: "70px"}}>{name}</Card.Title>
                <Card.Text style={{ height: "20px", fontSize: "20px", fontWeight: "bold" }}>
                   {formatNumber(price)}₫
                </Card.Text>
                <Link to = {"/" + brand + "/" + slug} style={{ height: "30px"}}>
                    <Button>Mua ngay</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProductItem