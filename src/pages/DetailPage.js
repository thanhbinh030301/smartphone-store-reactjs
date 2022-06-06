import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/index';
import ListProducts from '../components/ListProducts-Slider';
import ProductInfo from '../components/ProductInfor';
import Thumbnail from '../components/Thumbs';
import { productsListSlector, productSlugSlector } from '../redux/selectors';
// import { getProductBySlug } from '../redux/Slice/productsSlice';


const DetailPage = () => {
    const {brand, slug} = useParams();
    const listProducts = useSelector(productsListSlector)
    const product = listProducts.find(product => product.slug === slug) || [];
    console.log('product', product)
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(getProductBySlug(slug));
    //     console.log(2);
    // },[dispatch, slug])
    return (
            <Container> 
                <Breadcrumb style={{marginTop: '70px'}}>
                    <BreadcrumbItem><Link to="/"> Trang chủ</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to={"/" + brand +"/" + slug}>{brand}</Link></BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <Col>
                        <Thumbnail images={product.images}/>
                    </Col>
                    <Col>
                        <ProductInfo product = {product} />
                    </Col>
                </Row>
                <Row>
                    <ListProducts/>
                </Row>
            </Container>
      
    )
}

export default DetailPage;