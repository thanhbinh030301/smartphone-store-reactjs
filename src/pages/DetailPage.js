import React from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ListProducts from '../components/ListProducts-Slider';
import ProductInfo from '../components/ProductInfor';
import Thumbnail from '../components/Thumbs';


const DetailPage = () => {
    return (
        <Container>
            <Header/>
            <Breadcrumb style={{marginTop: '70px'}}>
                <BreadcrumbItem><Link to="/"> Trang chủ</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/product"> Sản phẩm</Link></BreadcrumbItem>
            </Breadcrumb>
            <Row>
                <Col>
                    <Thumbnail/>
                </Col>
                <Col>
                    <ProductInfo/>
                </Col>
            </Row>
            <Row>
                <ListProducts/>
            </Row>
        </Container>
    )
}

export default DetailPage;