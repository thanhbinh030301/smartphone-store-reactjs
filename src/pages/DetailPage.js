import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import ListProducts from '../components/ListProducts-Slider';
import ProductInfo from '../components/ProductInfor';
import Thumbnail from '../components/Thumbs';


const DetailPage = () => {
    return (
        <Container>
            <Header/>
            <Row style={{marginTop: '66px'}}>
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