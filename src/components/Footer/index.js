import React from 'react'
import logo from '../../logo.svg'
import {TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiSocialFacebook} from 'react-icons/ti'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import './Footer.scss'
import { Container } from 'react-bootstrap'
const Footer = () => {
    return (
        <div className="footer mt-5">
            <Container className="footer__info mt-3">
                <div className="footer__about">
                    <h2>Về chúng tôi</h2>
                    <p>Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn
                        và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.</p>
                    <a href="#"><TiSocialTwitter fontSize="40px"></TiSocialTwitter></a>
                    <a href="#"><TiSocialYoutube fontSize="40px"></TiSocialYoutube></a>
                    <a href="#"><TiSocialInstagram fontSize="40px"></TiSocialInstagram></a>
                    <a href="#"><TiSocialFacebook fontSize="40px"></TiSocialFacebook></a>
                </div>
                <div className="footer__contact">
                    <ul class="info">
                        <li>
                            <span><FaMapMarkerAlt></FaMapMarkerAlt></span>
                            <p>Đường Số 1<br />
                                Quận 1, Thành Phố Hồ Chí Minh<br />
                                Việt Nam</p>
                        </li>
                        <li>
                            <span><BsFillTelephoneFill></BsFillTelephoneFill></span>
                            <p>+84 123 456 789</p>
                        </li>
                        <li>
                            <span><FiMail></FiMail></span>
                            <p>iphone@gmail.com</p>
                        </li>
                    </ul>
                </div>           
            </Container>
        </div>
    )
}
export default Footer;