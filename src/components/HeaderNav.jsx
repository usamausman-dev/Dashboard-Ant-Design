import React from 'react'
import { Layout, Menu } from 'antd';
const { Header } = Layout;


function HeaderNav() {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                {/* defaultSelectedKeys={['1']} items={items1} */}
                <Menu.Item key="logo" style={{ margin: '0 30px 0 30px' }}>
                    Logo 1
                </Menu.Item>
                <Menu.Item key="logo" >
                    Logo
                </Menu.Item>

                <Menu.Item key="logo" >
                    Logo
                </Menu.Item>

                <Menu.Item key="logo" >
                    Logo
                </Menu.Item>

                <Menu.Item key="logo" >
                    Logo
                </Menu.Item>

                <Menu.Item key="logo" >
                    Logo
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderNav