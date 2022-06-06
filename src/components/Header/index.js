import React, {useState } from 'react'
import { BsSearch, BsCart, BsFillPersonFill } from "react-icons/bs";
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import './Header.scss'
import Login from '../Login';
import { useSelector } from 'react-redux';
import { cartSlector } from '../../redux/selectors';
import Logged from './isLoggedin';

const Header = () => {
    const carts= useSelector(cartSlector);
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => {
        setShowLogin(true);
    }
    return (
        <div>
            <Navbar bg='dark' variant='dark' expand='md' fixed='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className="opacity-100" src={logo} 
                        width="30"
                        height="40"
                        alt="logo"/>
                    </Navbar.Brand>
                    <form className="search-bar">
                        <input type="search" placeholder="Tìm kiếm"></input>
                        <button type="submit"><BsSearch fontSize='20px'/></button>
                    </form>
                    <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/apple">Iphone</Nav.Link>
                                <Nav.Link as={Link} to="/samsung">Samsung</Nav.Link>
                                <Nav.Link as={Link} to="/xiaomi" >Xiaomi</Nav.Link>
                                <Nav.Link as={Link} to="/oppo">Oppo</Nav.Link>
                            </Nav>  
                            <Nav className="align-items-center">
                                <Nav.Link className="text-white" as={Link} to="/cart" >
                                    <BsCart fontSize='20px'/><Badge pill bg="light" text="dark">{carts.length}</Badge>
                                </Nav.Link>
                                <Nav.Link>
                                    <button className="text-white btn-account" onClick={handleShowLogin}>
                                        <BsFillPersonFill fontSize='20px'/>
                                    </button>
                                </Nav.Link>
                                {/* <Logged/> */}
                            </Nav>
                        </Navbar.Collapse>  
                </Container>
            </Navbar >
            <Login show={setShowLogin} showLogin={showLogin}/>
        </div>
        
    )
}

export default Header;