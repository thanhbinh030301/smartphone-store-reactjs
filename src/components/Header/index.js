import React, {useState } from 'react'
import { BsSearch, BsCart, BsFillPersonFill } from "react-icons/bs";
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import logo from '../../logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss'
import Login from '../Login';
import { useSelector } from 'react-redux';
import { cartSelector, userSelector } from '../../redux/selectors';
import Logged from './isLoggedin';

const Header = () => {
    const carts= useSelector(cartSelector);
    const [showLogin, setShowLogin] = useState(false);
    const user = useSelector(userSelector);
    const navigate = useNavigate();
    const handleShowLogin = () => {
        setShowLogin(true);
    }
    const [search, setSearch] = useState("");
    const handleSearch = (e)=>{
        e.preventDefault();
        if(search)
            navigate(`/search?q=${search}`)
    }
    return (
        <div style={{marginBottom: "60px"}}>
            <Navbar bg='dark' variant='dark' expand='md' fixed='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className="opacity-100" src={logo} 
                        width="30"
                        height="40"
                        alt="logo"/>
                    </Navbar.Brand>
                    <form className="search-bar" onSubmit={handleSearch}>
                        <input type="search" placeholder="Tìm kiếm" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                        <button type="submit"><BsSearch/></button>
                    </form>
                    <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/apple">Iphone</Nav.Link>
                                <Nav.Link as={Link} to="/samsung">Samsung</Nav.Link>
                                <Nav.Link as={Link} to="/xiaomi" >Xiaomi</Nav.Link>
                                <Nav.Link as={Link} to="/oppo">Oppo</Nav.Link>
                            </Nav>  
                            <Nav>
                                <Nav.Link className="text-white" as={Link} to="/cart" >
                                    <BsCart/><Badge pill bg="light" text="dark">{carts.length}</Badge>
                                </Nav.Link>
                                {user
                                    ?(<Logged user={user}/>)
                                    :(
                                        <Nav.Link>
                                            <button className="text-white btn-account" onClick={handleShowLogin}>
                                                <BsFillPersonFill/>
                                            </button>
                                        </Nav.Link>
                                    )
                                }
                               
                            </Nav>
                        </Navbar.Collapse>  
                </Container>
            </Navbar >
            <Login show={setShowLogin} showLogin={showLogin}/>
        </div>
        
    )
}

export default Header;