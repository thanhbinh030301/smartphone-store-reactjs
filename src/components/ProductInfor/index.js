import React, { useState } from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './ProductInfor.scss'

const ProductInfo = () =>{
    const arrColorProduct = ['white', 'black', 'blue', 'green', 'purple', 'red'];
    const [quantity, setquantity] = useState(1);
    const handleInputChange = (e) => {
        setquantity(e.target.value)
    }
    return(
        <Container style={{marginTop:'58px'}}>
            {/* Title and price */}
            <Row>
                <h2 className="mt-4">Iphone 12</h2>
                <p>
                    <span className="old-price">24.000.000 ₫</span>
                    <span className="new-price">19.000.000 ₫</span>
                </p>
            </Row>
            {/* Capacity */}
            <Row className="mt-4 m-0" >
                <Col className="p-0">
                    <ListGroup horizontal>
                            <ListGroupItem action>
                                <h5 className="text-center">64Gb</h5> 
                                <p className="text-center">12000000đ</p>
                            </ListGroupItem >
                            <span style={{width: "20px"}}></span>
                            <ListGroupItem action>
                                <h5 className="text-center">64Gb</h5> 
                                <p className="text-center">12000000đ</p>
                            </ListGroupItem>
                            <span style={{width: "20px"}}></span>
                            <ListGroupItem action>
                                <h5 className="text-center">64Gb</h5> 
                                <p className="text-center">12000000đ</p>
                            </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                </Col>
            </Row>
            {/* Color */}
            <Row className="mt-5">
                <Col>
                    <ListGroup horizontal>
                            {arrColorProduct.map(value => {
                                return (<>
                                    <ListGroupItem action key= {value} className="rounded-circle text-center" style= {{background: `${value}`, padding:'4px'}}></ListGroupItem>
                                    <span style={{width: "20px"}}></span>
                                    </>
                                )
                            })}
                    </ListGroup>
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
                    <Button>Thêm vào giỏ hàng</Button>
                </Col>
                <Col className="col-auto">
                    <Button>Mua ngay</Button>
                </Col>
            </Row>
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
                    <li>
                        <p>Kích thước màn hình</p>
                        <span>150.9 x 75.7 x 8.3 mm</span>
                    </li>
                    <li>
                        <p>Công nghệ màn hình</p>
                        <span>IPS LCD</span>
                    </li>
                    <li>
                        <p>Màn hình rộng</p>
                        <span>6.1 inches</span>
                    </li>
                    <li>
                        <p>Quay phim</p>
                        <span>2160p@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.</span>
                    </li>
                    <li>
                        <p>Hệ điều hành</p>
                        <span>iOS 13</span>
                    </li>
                </ul>
            </Container>
        </Container>
    )
}

export default ProductInfo;