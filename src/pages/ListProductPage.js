import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header/index';
import ListProducts from '../components/ListProducts'
import { productsListSlector } from '../redux/selectors';
import { fetchProducts } from '../redux/Slice/productsSlice';

const ListProductPage = () => {
    const { brand } = useParams();
    console.log(brand);
    return (
            <Container>
                <Breadcrumb style={{marginTop: '70px'}}>
                        <BreadcrumbItem><Link to="/"> Trang chủ</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to={"/"+ brand}>{brand}</Link></BreadcrumbItem>
                </Breadcrumb>
                <Filter/>
                <ListProducts brand={brand}/>
            </Container>      
    )
}

export default ListProductPage;