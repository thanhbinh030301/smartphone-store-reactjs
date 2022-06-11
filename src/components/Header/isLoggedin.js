import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss'
import { useDispatch } from 'react-redux';
import authSlice from '../../redux/Slice/authSlice';


const Logged = (props) => {
    const navigate = useNavigate();
    const navDropdownTitle = ( 
        <button className="text-white btn-account cropLongText">
            <BsFillPersonFill/><span className="">Hi, {props.user.name.split(' ')[(props.user.name.split(' ').length - 1)]}</span>
        </button>)
    const dispatch = useDispatch();
    console.log(props.user);
    const handleLogout = () => {
        navigate("/");
        dispatch(authSlice.actions.logout());
    }
    return (                                             
            <Nav.Link className="p-0">
                    <NavDropdown title={navDropdownTitle}>
                        {props.user.admin
                        ?(
                            <>
                                <NavDropdown.Item as={Link} to="/manager?key=second">Danh sách sản phẩm</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/manager?key=first">Danh sách đơn hàng</NavDropdown.Item>
                                <NavDropdown.Divider />
                             </>
                        ):(
                            <>
                            <NavDropdown.Item as={Link} to="/user">Thông tin cá nhân</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/user">Đơn hàng</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </>
                        )}
                       
                        <NavDropdown.Item href="#action/3.4" style={{color: 'red'}} onClick={handleLogout}>Đăng Xuất</NavDropdown.Item>
                    </NavDropdown>
            </Nav.Link>
        
    )
}
export default Logged;