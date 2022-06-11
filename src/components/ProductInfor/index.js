import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import cartsSlice from '../../redux/Slice/cartsSlice';
import { formatNumber } from '../../utils/formatNumber';
import { v4 as uuidv4 } from 'uuid';
import './ProductInfor.scss'

const ProductInfo = (props) =>{
    
    const dispatch = useDispatch();
    const {name, price, tskt, capacities, image, _id} = props.product;
    const [priceItem, setPriceItem] = useState(price);
    const [capacity, setCapacity] = useState("");
    const [color, setColor] = useState("");
    const arrColorProduct = ['gray', 'black', 'blue', 'green', 'purple', 'red'];
    const [quantity, setquantity] = useState(1);
    const handleInputChange = (e) => {
        setquantity(e.target.value)
    }
    const handleCapacityClick = (e) => {
        const price = capacities.find(item => item.capacity === e.target.textContent).price
        console.log(e.target.textContent);
        setPriceItem(price);
        setCapacity(e.target.textContent);
    }
    const handleColorClick = (e) => {
        console.log(e.target.style.backgroundColor);
        setColor(e.target.style.backgroundColor)
    }
    const handleAddToCart = (e) => {
        console.log(props)
        const newCart = {
            id: uuidv4(),
            productId: props.product._id,
            slug: props.product.slug,
            name: props.product.name,
            image: props.product.image,
            color: color,
            capacity: capacity,
            price: priceItem,
            quantity: parseInt(quantity)
        }
        dispatch(cartsSlice.actions.addToCart(newCart))
    }
    console.log(capacities)
    return(
        <Container>    
            {/* Title and price */}
            <div className="wrap-container p-4">
                <Row>
                    <h2>{name}</h2>
                    <p>
                        <span className="old-price">{formatNumber(priceItem+500000)}₫</span>
                        <span className="new-price">{formatNumber(priceItem)}₫</span>
                    </p>
                </Row>
                {/* Capacity */}
                <Row className="mt-4 m-0" >
                    <Col className="p-0 ">
                        { capacities&&capacities.map((item,index) => (
                            <button className="btn-capacity p-2" key={index} onClick={handleCapacityClick} role="radio" aria-checked={capacity===item.capacity} >
                                {item.capacity}
                            </button >
                        ))}
                    </Col>
                    <Col>
                    </Col>
                </Row>
                {/* Color */}
                <Row className="mt-5">
                    <Col className="arr-color">
                                {arrColorProduct.map(value => {
                                    return (
                                        <button key={value} className="rounded-circle text-center btn-color" 
                                        onClick={handleColorClick} style={{background: `${value}`}}
                                        role="radio" aria-checked={color===value}
                                        ></button>
                                    )
                                })}
                    </Col>
                    <Col>
                    </Col>
                </Row>
                {/* Purchase */}
                <Row className="mt-5">
                    <Col className="col-auto">
                        <input style={{width:'40px', height:'36px'}}
                        type="number" name="quantity" value={quantity} step='1' min='1'
                        title="Sl" size="4" inputMode='numeric'  onChange={handleInputChange}>
                        </input>
                    </Col>
                    <Col className="col-auto">
                        <Button disabled={(capacities)?(!color):(!color&&capacity)} onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                    </Col>
                    <Col className="col-auto">
                        <Button>Mua ngay</Button>
                    </Col>
                </Row>
            </div>
            <Container className = "wrap-container mt-5 info-promote">
                <p className = "pt-4">Khuyến mãi</p>
                <hr className = "line"></hr>
                <ul>
                    <li>Giảm ngay 500.000đ khi thanh toán qua VNPAY</li>
                    <li>Tặng Voucher 200.000đ cho khách hàng thu cũ đổi mới lên đời iPhone 12
                            (Voucher chỉ áp dụng cho hóa đơn phụ kiện từ 300.000đ)</li>
                    <li>Giảm 50% khi mua kèm ốp chính hãng Apple. Giá chỉ từ 650.000đ</li>
                </ul>
            </Container>
            <Container className = "wrap-container mt-5 product-dtcontent">
                <p className = "pt-4">Thông số kỹ thuật</p>
                <hr className = "line"></hr>
                <ul>
                    { tskt && tskt.map(row => (
                        <li key={row.name}>
                            <p>{row.name}</p>
                            <span>{row.value}</span>
                        </li>
                    ))}
                </ul>
            </Container>
        </Container>
    )
}

export default ProductInfo;