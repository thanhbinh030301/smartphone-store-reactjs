import React from 'react'
import { Breadcrumb, BreadcrumbItem, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ListProducts from '../components/ListProducts'

const ListProductPage = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Breadcrumb style={{marginTop: '70px'}}>
                        <BreadcrumbItem><Link to="/"> Trang chủ</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/product"> Sản phẩm</Link></BreadcrumbItem>
                </Breadcrumb>
                <ListProducts/>
            </Container>      
            <Footer/>
        </div>

    )
}

export default ListProductPage;