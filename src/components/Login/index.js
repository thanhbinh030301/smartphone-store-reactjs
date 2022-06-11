import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../redux/Slice/authSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.scss';
import { unwrapResult } from '@reduxjs/toolkit';

const Login = (props) => {
    console.log(props.showLogin)
    const [showLogin, setShowLogin] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        setShowLogin(props.showLogin);
    },[props.showLogin])

    const [msg, setMsg] = useState("");


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


    const formikRegister = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Không được để trống"),
            email: Yup.string().required("Không được để trống").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không hợp lệ"),
            phone: Yup.string().required("Không được để trống").matches(/0[0-9]+([0-9]{8})/, "Số điện thoại không hợp lệ"),
            address: Yup.string().required("Không được để trống"),
            password: Yup.string()
            .required("Không được để trống"),
            confirmPassword: Yup.string().required("Không được để trống").oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
        }),
        validateOnChange: false,
        onSubmit: async (values)=>{
            formikRegister.validateOnChange = true;
            const newUser = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                address: values.address,
                password: values.password
            }
            try {
                const resultAction = await dispatch(register(newUser));
                unwrapResult(resultAction);
                setMsg("Đăng ký thành công")
                handleClose();
            } catch (error) {
                console.log(error)
                console.log("error: ", error.massage)
                setMsg(error.message);
            }
        }
    });
    const formikLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Không được để trống").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không hợp lệ"),
            password: Yup.string().required("Không được để trống"),
        }),
        validateOnChange: false,
        onSubmit: async (values)=>{
            formikRegister.validateOnChange = true;
            const newUser = {
                email: values.email,
                password: values.password
            }
            try {
                const resultAction = await dispatch(login(newUser));
                unwrapResult(resultAction);
                setMsg("Đăng nhập thành công")
                handleClose();
            } catch (error) {
                console.log(error)
                console.log("error: ", error.massage)
                setMsg(error.message);
            }

        }
    })
    return (
        <Container>
            <Modal show={showRegister} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng ký tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-login" onSubmit={formikRegister.handleSubmit}>
                        < input className = 'mt-2 p-2'
                        id = "name"
                        name = "name"
                        type = "text"
                        placeholder = 'Tên người dùng'
                        value = {formikRegister.values.name}
                        onChange = {formikRegister.handleChange}
                        />
                        {formikRegister.errors.name ? (
                            <p className = "errorValidate">{formikRegister.errors.name}</p>
                        ):(<p></p>)}
                        
                        <input className = 'mt-2 p-2'
                        id = 'email'
                        name = 'email'
                        type = "email"
                        placeholder = 'Email'
                        value = {formikRegister.values.email}
                        onChange = {formikRegister.handleChange}
                        /> 
                        {formikRegister.errors.email ? (
                            <p className = "errorValidate">{formikRegister.errors.email}</p>
                        ):(<p></p>)}

                        <input className = 'mt-2 p-2'
                        id = 'phone'
                        name = "phone"
                        type="text" 
                        placeholder = 'Số điện thoại'
                        value = {formikRegister.values.phone}
                        onChange = {formikRegister.handleChange}
                        /> 
                        {formikRegister.errors.phone ? (
                            <p className = "errorValidate">{formikRegister.errors.phone}</p>
                        ):(<p></p>)}
                        <input className = 'mt-2 p-2'
                        id = 'address'
                        name = "address"
                        type="text" 
                        placeholder = 'Địa chỉ'
                        value = {formikRegister.values.address}
                        onChange = {formikRegister.handleChange}
                        /> 
                        {formikRegister.errors.address ? (
                            <p className = "errorValidate">{formikRegister.errors.address}</p>
                        ):(<p></p>)}

                        <input className = 'mt-2 p-2'
                        id = "password"
                        name = "password"
                        type = "password"
                        placeholder = "Mật khẩu"
                        value = {formikRegister.values.password}
                        onChange = {formikRegister.handleChange}
                        /> 
                        {formikRegister.errors.password ? (
                            <p className = "errorValidate">{formikRegister.errors.password}</p>
                        ):(<p></p>)}

                        <input className = 'mt-2 p-2'
                        id = "confirmPassword"
                        name = "confirmPassword"
                        type = "password"
                        placeholder = "Xác nhận mật khẩu"
                        value = {formikRegister.values.confirmPassword}
                        onChange = {formikRegister.handleChange}
                        />
                        {formikRegister.errors.confirmPassword ? (
                            <p className = "errorValidate">{formikRegister.errors.confirmPassword}</p>
                        ):(<p className="confirmRegister">{msg}</p>)}
                        <div className='form-action mt-2'>
                            <Button style={{width: "120px"}} type="submit">Đăng ký</Button>
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
                        <form className="form-login" onSubmit={formikLogin.handleSubmit}>
                            <input className='mt-2 p-2'
                            id = "email"
                            name = "email" 
                            type="text" placeholder='Email' 
                            value = {formikLogin.values.name}
                            onChange = {formikLogin.handleChange}/>
                            {formikLogin.errors.email ? (
                            <p className = "errorValidate">{formikLogin.errors.email}</p>
                            ):(<p></p>)}
                            
                            <input className='mt-2 p-2'
                            id="password" name="password"
                            type="password" 
                            placeholder="Mật khẩu"
                            value = {formikLogin.values.name}
                            onChange = {formikLogin.handleChange}/>
                            {formikLogin.errors.password ? (
                            <p className = "errorValidate">{formikLogin.errors.password}</p>
                            ):(<p className = "confirmRegister">{msg}</p>)}

                            <div className='form-action mt-2'>
                                <Button type='submit' style={{width: "120px"}}>Đăng nhập</Button>
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