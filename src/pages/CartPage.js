import React, { useEffect, useState} from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Header from '../components/Header/index';
import { formatNumber } from '../constant';
import { cartSlector } from '../redux/selectors';
import { getCarts } from '../redux/Slice/cartsSlice';


const CartPage = () => {
    const dispatch = useDispatch();
    const carts = useSelector(cartSlector);
    console.log("carts", carts)
    useEffect(()=>{
        dispatch(getCarts());
        console.log("cart-page re-render useEffect")
    },[dispatch])
    console.log("cart-page re-render")
    const totalPrice = carts.reduce((a,b)=> a+b.price, 0)
    return (
            <Container>
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
                                        <CartItem cart={cart}/>
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
                                                        <span>19.000.000₫</span>
                                                    </p>
                                                    <p className="font-weight-bold">
                                                        <span>Cần thanh toán:</span>
                                                        <span>{formatNumber(totalPrice)}₫</span>
                                                    </p>
                                                </div>
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
            </Container>
    )
}
export default CartPage;