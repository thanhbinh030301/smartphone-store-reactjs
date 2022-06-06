import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
    const {image, name, price, brand, slug} = props.product;
    return(
        <Card className="mb-4">
            <Card.Img  variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {price}
                </Card.Text>
                <Link to = {"/" + brand + "/" + slug}>
                    <Button>Mua ngay</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProductItem