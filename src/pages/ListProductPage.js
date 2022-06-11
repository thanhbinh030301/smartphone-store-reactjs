import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem, Container } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';

import ListProducts from '../components/ListProducts'
import ErrorPage from './ErrorPage';


const ListProductPage = () => {
    const { pathname } = useLocation();
    useEffect(() => {
            window.scrollTo({top: 0, left:0, behavior: "instant"});
    }, [pathname]);
    const { brand } = useParams();
    console.log(brand)
    const checkBrand = ["apple", "samsung", "xiaomi", "oppo"].includes(brand);
    const search = useLocation().search
    const searchParams = new URLSearchParams(search);
    const q = searchParams.get('q');
    return (
        checkBrand
        ?(<Container>
            <Breadcrumb style={{marginTop: '70px'}}>
                    <BreadcrumbItem><Link to="/"> Trang chủ</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to={"/"+ brand}>{brand[0].toUpperCase() + brand.slice(1)}</Link></BreadcrumbItem>
            </Breadcrumb>
            <ListProducts brand={brand}/>
        </Container>)
        : q 
            ?(<Container>
                <ListProducts query={q}/>
            </Container>)
            :(<ErrorPage/>)
                
    )
}

export default ListProductPage;