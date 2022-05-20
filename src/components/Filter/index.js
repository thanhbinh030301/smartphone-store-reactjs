import React from "react";
import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import apple from "../../assets/apple.png"
import oppo from "../../assets/oppo.png"
import samsung from "../../assets/samsung.jpg"
import xiaomi from "../../assets/xiaomi.jpg"
import './filter.scss'

const Filter = () => {
    const listBrand = [apple, oppo, samsung, xiaomi]
    return (
        <Container className="wrap-container mt-4">
            <div className="p-2">
                    {listBrand.map(item => (
                        <a className="link-image"  key={item} href="" title="">
                            <img src={item} alt=""/>
                        </a>
                    ))}
            </div>
            <hr className="my-2"/>
            <div className="d-flex filter-options">
            <ol>
                    <li><a href ="" title = "">Iphone13</a></li>
                    <li><a href ="" title = "">Iphone12</a></li>
                    <li><a href ="" title = "">Ipphone11</a></li>
                    <li><a href ="" title = "">Iphone10</a></li>
                </ol>
            </div>
            <hr className="my-2"/>
            <div className = "d-flex filter-options">
                <label style={{paddingTop: '15px'}}>Mức giá</label>
                <ol>
                    <li><a href ="" title = "">Dưới 4 triệu</a></li>
                    <li><a href ="" title = "">Từ 12 đến 15 triệu</a></li>
                    <li><a href ="" title = "">Từ 16 đến 19 triệu</a></li>
                    <li><a href ="" title = "">Trên 20 triệu</a></li>
                </ol>
            </div>
            <div className = "d-flex filter-options">
                <label style={{paddingTop: '15px'}}>Sắp xếp theo</label>
                <ol>
                    <li><a href ="" title = "">Giá từ thấp đến cao</a></li>
                    <li><a href ="" title = "">Giá từ cao đến thấp</a></li>
                </ol>
            </div>
        </Container>
    )
}

export default Filter;