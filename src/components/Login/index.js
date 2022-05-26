import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import './Login.scss'

const Login = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    useEffect(()=>{
        setShowLogin(props.showLogin);
    },[props.showLogin])
    const [showRegister, setShowRegister] = useState(false);
    const handleShow = () => {
        setShowLogin(!showLogin);
        setShowRegister(!showRegister);
    }
    const handleClose = () => {
        props.show(false);
        setShowLogin(false);
        setShowRegister(false);
    }

    return (
        <Container>
            <Modal show={showRegister} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng ký tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-login">
                        <input className='mt-2 p-2' type="email" placeholder='Email'/>
                        <input className='mt-4 p-2' type="current-password" placeholder="Mật khẩu"/>
                        <input className='mt-4 p-2' type="new-password" placeholder="Xác nhận mật khẩu"/>
                        <div className='form-action mt-4'>
                            <Button style={{width: "120px"}}>Đăng ký</Button>
                            <div>
                                <p className='mb-0'>Bạn đã có tài khoản</p>
                                <div className='anchor-text' onClick={handleShow}>Đăng nhập</div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            <Modal show={showLogin} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng nhập</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-login">
                        <input className='mt-2 p-2' type="email" placeholder='Email'/>
                        <input className='mt-4 p-2' type="current-password" placeholder="Mật khẩu"/>
                        <div className='form-action mt-4'>
                            <Button style={{width: "120px"}}>Đăng nhập</Button>
                            <div>
                                <p className='mb-0'>Bạn chưa có tài khoản</p>
                                <div className='anchor-text' onClick={handleShow}>Đăng ký</div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </Container>
       
    )
}

export default Login;