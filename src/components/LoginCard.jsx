import React from 'react'
import { Card, Typography, Button, Form, Input } from 'antd';
import { GoogleOutlined, FacebookOutlined, LockOutlined, UserOutlined, LineOutlined } from '@ant-design/icons';

const { Title } = Typography;

function LoginCard() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="site-card-border-less-wrapper">
            {/* <Alert message="Success Text" type="success" style={{ margin: '5%' }} /> */}
            <Card title={<Title style={{ fontWeight: 700 }} level={3}>LOGIN</Title>} bordered={false}
                actions={[<GoogleOutlined key="google" />, <FacebookOutlined key="facebook" />]}
                style={{ margin: '23% 20%' }}
            >
                <Form name="login" className="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed}              >
                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]} >
                        <Input style={{ padding: '3%' }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>


                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} >
                        <Input style={{ padding: '3%' }} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%', height: '3.5em', fontWeight: 500 }}>
                            Log in
                        </Button>
                    </Form.Item>

                    <LineOutlined />
                    <span style={{ fontWeight: 700, padding: '0 25px' }}>Sign-in Using  </span>
                    <LineOutlined />
                </Form>
            </Card>
        </div>
    )
}

export default LoginCard