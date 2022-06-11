import React, { useEffect, useState } from 'react';
import './SideNav.scss';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import SideContentProduct from '../SideContentProduct';
import SideContentCart from '../SideContentCart';
import { useLocation } from 'react-router-dom';
const SideNav = ()=>{

    const search = useLocation().search
    const searchParams = new URLSearchParams(search);
    const q = searchParams.get('key');
    return(  
        <div style={{marginTop: "200px", height: "140vh"}}>    
        <Tab.Container id="left-tabs-example" activeKey={q} >
            <Row>
                <Col sm={3}>
                    <div className = "sideNav">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item className = "sideNav-item">
                            <Nav.Link eventKey="first">Danh sách sản phẩm</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "sideNav-item">
                            <Nav.Link eventKey="second">Danh sách đơn hàng</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <SideContentProduct/>  
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <SideContentCart/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </div> 
    )
}
export default SideNav;