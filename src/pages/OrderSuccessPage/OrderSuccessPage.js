import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import checked from "../../assets/checked.png"
import "./OrderSuccessPage.scss"

const OrderSuccessPage = ()=>{
    return (
        <Container style={{marginTop: '100px', height: '70vh'}} className="orderPage" >
            <img style={{width: "300px"}} src={checked} alt="success order"></img>
            <h1>Cảm ơn bạn đã đặt hàng</h1>
            <Link to="/">
                <Button className="btn-continue">Tiếp tục mua hàng</Button>
            </Link>
        </Container>
    )
}

export default OrderSuccessPage;