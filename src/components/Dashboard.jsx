import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import FilePath from './FilePath';
import ContentFile from './ContentFile';
import HeaderNav from './HeaderNav';
import Foot from './Foot';

const { Sider } = Layout;

//Number of Navs
// const items1 = ['1', '2', '3', '4'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});







function Dashboard() {
    return (
        <Layout>
            <HeaderNav />

            <Layout>
                <Sider width={250} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>



                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <FilePath />

                    <ContentFile />



                </Layout>
            </Layout>

            <Foot />


        </Layout>
    )
}

export default Dashboard


