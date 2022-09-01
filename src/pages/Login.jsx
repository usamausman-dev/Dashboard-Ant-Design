import React from 'react'
import { Col, Row, Typography } from 'antd';
import LoginImg from '../login.png';
import LoginCard from '../components/LoginCard';

const { Title } = Typography;

function Login() {
    return (
        <Row justify="space-around" align="middle" style={{ textAlign: 'center', height: '100vh' }}>
            <Col xs={24} md={12} style={{ height: '100vh', paddingTop: '10%' }}>
                <Title level={5} style={{ color: '#1890ff' }}>Nice to See You Again</Title>
                <Title style={{ margin: 0, fontWeight: 700 }}>WELCOME BACK</Title>
                <img alt='login' style={{ width: 'auto', height: '50vh' }} src={LoginImg} />
            </Col>

            <Col xs={24} md={12} style={{ background: '#001529', height: '100vh' }}>
                <LoginCard />
            </Col>
        </Row>
    )
}

export default Login