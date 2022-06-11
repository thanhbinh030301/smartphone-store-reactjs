import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import cartsSlice from '../../redux/Slice/cartsSlice';
import { formatNumber } from '../../utils/formatNumber';
// import { deleteCart, getCarts } from '../../redux/Slice/cartsSlice';
import "./CartItem.scss"

const CartItem = (props) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(props.cart.quantity||1);
    const handleInputChange = (e) => {
        setQuantity(e.target.value)
    }
    const handleClickRemove = (e) =>{
        console.log(props.cart.id);
        dispatch(cartsSlice.actions.deleteCart(props.cart.id));
    }
    return (
        <div className = "product-cart">
            <Row className="align-items-center">
                <Col md={1}>
                    <span className='product-cart__remove' onClick={handleClickRemove}>x</span>
                </Col>
                <Col md={2}>
                    <img className='product-cart__img' style={{width: "80px", height: "80px"}} src={props.cart.image} alt=""/>
                </Col>
                <Col md={5}>
                    <div className = "product-cart__info">
                        <p><a href={`/${props.cart.brand}/${props.cart.slug}`}>{props.cart.name}</a></p>
                        <p><strong>Màu:</strong> {props.cart.color}</p>
                        <p><strong>Dung lượng:</strong> {props.cart.capacity}</p>
                    </div>
                </Col>
                <Col md={1}>
                    <div className = "product-cart__quantity">
                        <input style={{width:'40px', height:'36px'}}
                        type="number" name="quantity" value={quantity} step='1' min='1'
                        title="Sl" size="4" inputMode='numeric'  onChange={handleInputChange}>
                        </input>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="product-cart__price">
                        <p>{formatNumber(props.cart.price*quantity)}₫</p>
                    </div>      
                </Col>
            </Row>     
        </div>
    )
}

export default CartItem;