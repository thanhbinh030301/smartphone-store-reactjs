import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { DataTable } from 'simple-datatables';
import SideNav from '../components/SideNav';
import ErrorPage from './ErrorPage';

const ManagerPage = ()=>{
    const admin = JSON.parse(localStorage.getItem('user')).admin;
    return(
        admin && admin 
        ? (
            <Container>
                <SideNav/>
            </Container>
        )
        : (
            <ErrorPage/>
        )
    )
}
export default ManagerPage;