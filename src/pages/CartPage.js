import React, { useEffect, useState} from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Header from '../components/Header/index';
import { formatNumber } from '../utils/formatNumber';
import { cartSelector, userSelector } from '../redux/selectors';
import Login from '../components/Login';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { createOrder } from '../redux/Slice/cartsSlice'
import { unwrapResult } from '@reduxjs/toolkit';
// import { getCarts } from '../redux/Slice/cartsSlice';


const CartPage = () => {
    const dispatch = useDispatch();
    const carts = useSelector(cartSelector);
    const user = useSelector(userSelector);
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const totalPrice = carts.reduce((a,b)=> a+b.price*b.quantity, 0)
    const handlePurchase = async ()=> {
        if(!localStorage.getItem('user')){
            setShowLogin(true);
        }else{
            const productsOrder = carts.map(product => ({
                productId: product.productId,
                name: product.name,
                quantity: product.quantity,
                color: product.color,
                capacity: product.capacity,
                total: product.price * product.quantity
            }
            ))
            const dataOrder = {
                userId: user._id,
                userName: user.name,
                address: user.address,
                products: productsOrder,
                totalPrice: totalPrice - 1000000 //giam gia
            }
            console.log(JSON.stringify(dataOrder))
            try {
                const resultAction = await dispatch(createOrder(dataOrder));
                unwrapResult(resultAction);
            } catch (error) {
                console.log(error)
            }
            navigate("/orderSuccess");
        }
       
    }
    return (
            <Container style={{minHeight: "70vh"}}>
                <h1 className="text-center" style={{marginTop: "100px"}}>Gi??? h??ng</h1>

                <div className="cart">
                    <Card className="mt-4">
                        {carts.length > 0
                            ?<div>
                                <Card.Header>
                                    <h3>C?? {carts.length} s???n ph???m</h3>
                                </Card.Header>
                                <Card.Body >
                                    {carts && carts.map(cart => (
                                        <CartItem key={cart.id} cart={cart}/>
                                    ))}
                                    <div className="cart__center">
                                        <Row>
                                            <Col>
                                                <div className="cart__coupon">
                                                    <h6>M?? gi???m gi??</h6>
                                                    <input type="text" placeholder="Nh???p m?? gi???m gi??"></input>
                                                    <Button>??p d???ng</Button>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="cart__total">
                                                    <p>
                                                        <span>T???ng ti???n:</span>
                                                        <span>{formatNumber(totalPrice)}???</span>
                                                    </p>
                                                    <p>
                                                        <span>Gi???m:</span>
                                                        <span>{formatNumber(1000000)}???</span>
                                                    </p>
                                                    <p className="font-weight-bold">
                                                        <span>C???n thanh to??n:</span>
                                                        <span>{formatNumber(totalPrice-1000000)}???</span>
                                                    </p>
                                                </div>
                                                    <Button className="btn-purchase" onClick={handlePurchase} to>Ti???n h??nh thanh to??n</Button>
                                            </Col>         
                                        </Row>
                                    </div>
                                </Card.Body>
                            </div>
                            :<div>
                                <Card.Header>
                                    <h3 className="text-center text">Kh??ng c?? s???n ph???m n??o</h3>
                                </Card.Header>
                            </div>
                        }

                    </Card> 
                </div>       
                <Login show={setShowLogin} showLogin={showLogin}/>
            </Container>
    )
}
export default CartPage;