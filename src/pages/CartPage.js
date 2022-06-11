import React, { useEffect, useState} from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Header from '../components/Header/index';
import { formatNumber } from '../utils/formatNumber';
import { cartSelector, userSelector } from '../redux/selectors';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { createOrder } from '../redux/Slice/cartsSlice'
import { unwrapResult } from '@reduxjs/toolkit';
// import { getCarts } from '../redux/Slice/cartsSlice';


const CartPage = () => {
    const dispatch = useDispatch();
    const carts = useSelector(cartSelector);
    const user = useSelector(userSelector);
    const [showLogin, setShowLogin] = useState(false);
    const totalPrice = carts.reduce((a,b)=> a+b.price*b.quantity, 0)
    const handlePurchase = async ()=> {
        if(!localStorage.getItem('user')){
            setShowLogin(true);
        }
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
    }
    return (
            <Container style={{minHeight: "70vh"}}>
                <h1 className="text-center" style={{marginTop: "100px"}}>Giỏ hàng</h1>

                <div className="cart">
                    <Card className="mt-4">
                        {carts.length > 0
                            ?<div>
                                <Card.Header>
                                    <h3>Có {carts.length} sản phẩm</h3>
                                </Card.Header>
                                <Card.Body >
                                    {carts && carts.map(cart => (
                                        <CartItem key={cart.id} cart={cart}/>
                                    ))}
                                    <div className="cart__center">
                                        <Row>
                                            <Col>
                                                <div className="cart__coupon">
                                                    <h6>Mã giảm giá</h6>
                                                    <input type="text" placeholder="Nhập mã giảm giá"></input>
                                                    <Button>Áp dụng</Button>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="cart__total">
                                                    <p>
                                                        <span>Tổng tiền:</span>
                                                        <span>{formatNumber(totalPrice)}₫</span>
                                                    </p>
                                                    <p>
                                                        <span>Giảm:</span>
                                                        <span>{formatNumber(1000000)}₫</span>
                                                    </p>
                                                    <p className="font-weight-bold">
                                                        <span>Cần thanh toán:</span>
                                                        <span>{formatNumber(totalPrice-1000000)}₫</span>
                                                    </p>
                                                </div>
                                                <Link to = '/orderSuccess'>
                                                    <Button className="btn-purchase" onClick={handlePurchase} to>Tiến hành thanh toán</Button>
                                                </Link>
                                            </Col>         
                                        </Row>
                                    </div>
                                </Card.Body>
                            </div>
                            :<div>
                                <Card.Header>
                                    <h3 className="text-center text">Không có sản phẩm nào</h3>
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