import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import OrderListByUser from '../components/OrderListByUser';


const InfoUserPage = ()=>{
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    console.log(userId)
    return(
        <Container>
            <OrderListByUser userId={userId}/>
        </Container>
    )
}
export default InfoUserPage;