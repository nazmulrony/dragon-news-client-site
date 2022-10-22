import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import Leftnav from '../shared/LeftNav/Leftnav';
import RightNav from '../shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <Leftnav />
                    </Col>
                    <Col lg="7" >
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightNav />
                    </Col>
                </Row>
            </Container >
            <Footer />
        </div>
    );
};

export default Main;