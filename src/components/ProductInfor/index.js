import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { formatNumber } from '../../constant';
import { addToCart } from '../../redux/Slice/cartsSlice';
import './ProductInfor.scss'

const ProductInfo = (props) =>{
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    useEffect(() => {
            window.scrollTo(0, 0);
    }, [pathname]);
    const {name, price, tskt, capacities, image, _id} = props.product;
    const [priceItem, setPriceItem] = useState(price);
    console.log("price", priceItem)
    const [capacity, setCapacity] = useState("");
    const [color, setColor] = useState();
    console.log("currentCapacity", capacity);
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
        const currentProduct = {_id: _id||"", color: color||"", quantity: quantity||0, price: price||0, image: image||"", capacity: capacity||"", name: name||"", slug: props.product.slug||"",brand: props.product.brand||""};
        dispatch(addToCart(currentProduct));
        console.log(currentProduct)
    }
    return(
        <Container>
            {/* Title and price */}
            <div className="wrap-container p-4">
                <Row>
                    <h2>{name}</h2>
                    <p>
                        <span className="old-price">{priceItem+500000 ? formatNumber(priceItem+500000) : formatNumber(price+500000)}₫</span>
                        <span className="new-price">{priceItem ? formatNumber(priceItem) : formatNumber(price)}₫</span>
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
                </Row>
                {/* Color */}
                <Row className="mt-5">
                    <Col>
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
                        <Button onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                    </Col>
                    <Col className="col-auto">
                        <Button>Mua ngay</Button>
                    </Col>
                </Row>
            </div>
            <Container className = "wrap-container mt-5">
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