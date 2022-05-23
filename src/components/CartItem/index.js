import React, { useState } from 'react';
import "./CartItem.scss"

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);
    const handleInputChange = (e) => {
        setQuantity(e.target.value)
    }
    return (
        <div className = "product-cart">
            <span className='product-cart__remove'>x</span>
            <img className='product-cart__img' style={{width: "80px", height: "80px"}} src="https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg" alt=""/>
            <div className = "product-cart__info">
                <p><a href="#">Iphone 13 Promax 256GB new full box</a></p>
                <p>Màu: Đỏ</p>
                <p>Dung lượng: 256GB</p>
            </div>
            <div className = "product-cart__quantity">
                <input style={{width:'40px', height:'36px'}}
                type="number" name="quantity" value={quantity} step='1' min='1'
                title="Sl" size="4" inputMode='numeric'  onChange={handleInputChange}>
                </input>
            </div>
            <div className="product-cart__price">
                <p>20.000.000₫</p>
            </div>  
        </div>
    )
}

export default CartItem;