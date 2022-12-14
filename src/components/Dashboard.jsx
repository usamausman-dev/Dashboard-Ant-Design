import { UploadOutlined, UserOutlined, VideoCameraOutlined, LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';
// import Foot from './Foot'
import Users from '../pages/Users';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;

function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('item1');


    const componentsSwtich = (key) => {
        switch (key) {
            case 'item1':
                return (<Users />);
            case 'item2':
                return (<h1>item2</h1>);
            case 'item3':
                return (<h3>item3</h3>);
            default:
                break;
        }
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"
                    // onClick={() => setCollapsed(!collapsed)}
                    style={{ height: '50px', margin: '16px' }}
                >
                    <Avatar size="large" icon={<UserOutlined />} />
                    <span style={{ color: 'white', fontSize: '1.4em', margin: '0 15px', fontWeight: '600', display: (collapsed ? 'none' : 'inline-block') }}>React</span>


                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={selectedMenuItem}
                    onClick={(e) => setSelectedMenuItem(e.key)}
                >

                    <Menu.Item key="item1" icon={<UploadOutlined />}>
                        UploadOutlined
                    </Menu.Item>
                    <Menu.Item key="item2" icon={<UserOutlined />}>
                        UserOutlined
                    </Menu.Item>
                    <Menu.Item key="item3" icon={<VideoCameraOutlined />}>
                        VideoCameraOutlined
                    </Menu.Item>

                </Menu>
            </Sider>


            <Layout className="site-layout">
                <Header className="site-layout-background">

                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}

                    <LogoutOutlined style={{ fontSize: '1.5em', float: 'right', marginTop: '20px' }}
                        onClick={() => alert('chal raha hun!!')}
                    />
                </Header>

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        height: '85.5vh'
                    }}
                >

                    {componentsSwtich(selectedMenuItem)}

                </Content>
                {/* <Foot /> */}
            </Layout>

        </Layout >
    )
}

export default Dashboard


