import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import './CartContent.scss'
import { getOrders, getOrdersByUser } from '../../redux/Slice/cartsSlice';
import { getUsers } from '../../redux/Slice/userSlice';
import formatDate from '../../utils/formatDate';
import { formatNumber } from '../../utils/formatNumber';
import { userSelector } from '../../redux/selectors';

const SideContentCart = () => {
    const dispatch = useDispatch();
    const orderList = useSelector(state=> state.cartsList.orderList)

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getUsers(localStorage.getItem('user').accessToken))
    }, [dispatch])
    
    const columns = [
        {
            name: <h5>Ngày tạo đơn</h5>,
            selector: row => row.date,
            width: "150px",
            cell: row => <p className="title-table">{formatDate(new Date(row.date))}</p>
        },
        {
            name: <h5>Tên khách hàng</h5>,
            selector: row => row.userName,
            wrap: true,
            width: "150px",
            sortable: true,
            cell: row => <p className="title-table">{row.userName}</p>
            

        },
        {
            name: <h5>Chi tiết</h5>,
            wrap: true,
            sortable: true,
            cell: row => {
                return(
                    <div>
                        {row.products.map(product => (
                            <p className='title-table mt-2 mb-2'>{`${product.quantity} x ${product.name}, ${product.color}, ${product.capacity}`}</p>
                        ))}
                    </div>
                )
            }
        },
        {
            name: <h5>Địa chỉ</h5>,
            selector: row => row.addresss,
            wrap: true,
            sortable: true,
            cell: row => <p className='title-table'>{row.address}</p>
        },
        {
            name: <h5>Số tiền thanh toán</h5>,
            selector: row => row.totalPrice,
            width: "150px",
            sortable: true,
            cell: row=> <p className="title-table">{formatNumber(row.totalPrice)}₫</p>
        }
    ];  

   
    return (
        <Card>
            <Card.Header><h2>Danh sách đơn hàng</h2></Card.Header>
            <Card.Body>
               <form>  
                    <DataTable 
                            columns={columns}
                            data={orderList}
                            pagination
                            persistTableHead/>   
                </form>
            </Card.Body>
        </Card>    
    )
}
export default SideContentCart;