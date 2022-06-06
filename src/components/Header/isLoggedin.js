import React, {useState } from 'react'
import { BsSearch, BsCart, BsFillPersonFill } from "react-icons/bs";
import { Navbar, Container, Nav, Badge, Dropdown, NavDropdown } from 'react-bootstrap'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import './Header.scss'
import Login from '../Login';


const Logged = () => {
    const navDropdownTitle = ( 
        <button className="text-white btn-account">
            <BsFillPersonFill fontSize='20px'/><span>Hi, Binh</span>
        </button>)
    return (                                             
            <Nav.Link>
                    <NavDropdown title={navDropdownTitle}>
                        <NavDropdown.Item href="#action/3.1">Thông tin cá nhân</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Đơn hàng</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{color: 'red'}}>Đăng Xuất</NavDropdown.Item>
                    </NavDropdown>
            </Nav.Link>
        
    )
}
export default Logged;