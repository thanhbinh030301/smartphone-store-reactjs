import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import ListProductsSlider from '../components/ListProducts-Slider';
import ProductInfo from '../components/ProductInfor';
import Thumbnail from '../components/Thumbs';
import { productsListSlector } from '../redux/selectors';
import LoadingPage from './LoadingPage';


const DetailPage = () => {
    const {brand, slug} = useParams();
    const listProducts = useSelector(productsListSlector)
    const product = listProducts.find(product => product.slug === slug);
    const { pathname } = useLocation();
    useEffect(() => {
            window.scrollTo({top: 0, left:0, behavior: "instant"});
    }, [pathname]);
    return (    
        product?
            <Container> 
                <Breadcrumb style={{marginTop: '70px'}}>
                    <BreadcrumbItem><Link to="/"> Trang chủ</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to={"/" + brand}>{brand[0].toUpperCase() + brand.slice(1)}</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to={"/" + brand +"/" + slug}>{slug[0].toUpperCase() + slug.slice(1)}</Link></BreadcrumbItem>
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
                    <ListProductsSlider title={"Sản phẩm tương tự"}/>
                </Row>
            </Container>
        :<LoadingPage/>
    )
}

export default DetailPage;