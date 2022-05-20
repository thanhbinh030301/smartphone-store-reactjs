import React from 'react'
import { BsSearch, BsCart } from "react-icons/bs";
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='md' fixed='top' >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className="opacity-100" src={logo} 
                    width="30"
                    height="40"
                    alt="React Bootstrap logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Iphone">Iphone</Nav.Link>
                        <Nav.Link href="#Ipad">Ipad</Nav.Link>
                        <Nav.Link href="#MacBook">MacBook</Nav.Link>
                        <Nav.Link href="#Watch">Apple Watch</Nav.Link>
                        <Nav.Link href="#phukien">Phụ kiện</Nav.Link>
                    </Nav>  
                    <Nav>
                        <Nav.Link className="text-white" href="#search">
                            <BsSearch fontSize='20px' bg='light'/>
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#account">
                            <BsCart fontSize='20px'/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;