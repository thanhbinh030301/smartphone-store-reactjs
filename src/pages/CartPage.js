import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Header from '../components/Header';


const CartPage = () => {
    return (
       <div>
           <Header/>
            <Container>
                <h1 className="text-center" style={{marginTop: "100px"}}>Giỏ hàng</h1>

                <div className="cart">
                    <Card className="mt-4">
                        <Card.Header>
                            <h3>Có 2 sản phẩm</h3>
                        </Card.Header>
                        <Card.Body >
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <div className="cart__center">
                                <div className="cart__coupon">
                                    <h6>Mã giảm giá</h6>
                                    <input type="text" placeholder="Nhập mã giảm giá"></input>
                                    <Button>Áp dụng</Button>
                                </div>
                                <div className="cart__total">
                                    <p>
                                        <span>Tổng tiền:</span>
                                        <span>19.000.000₫</span>
                                    </p>
                                    <p>
                                        <span>Giảm:</span>
                                        <span>19.000.000₫</span>
                                    </p>
                                    <p className="font-weight-bold">
                                        <span>Cần thanh toán:</span>
                                        <span>19.000.000₫</span>
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card> 
                </div>               
            </Container>
            <Footer/>
       </div>
    )
}
export default CartPage;