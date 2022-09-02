import React from 'react'
import { Col, Row, Card, Typography } from 'antd';
import { FolderOutlined, TeamOutlined, UnorderedListOutlined } from '@ant-design/icons';
import UserList from '../components/UserList';
import GraphChart from '../components/GraphChart';

const { Title } = Typography;


function Users() {
    return (
        <>
            <Row style={{ height: '35%' }}>
                <Col className="gutter-row" xs={24} md={8}  >
                    <div className="site-card-border-less-wrapper">
                        <Card
                            title={<Title style={{ color: '#ad6800' }} level={3}>Projects</Title>}
                            extra={<FolderOutlined style={{ fontWeight: '700', fontSize: '1.3em', borderRadius: '25%', padding: '10px', color: '#ad6800', background: '#ffe58f' }} />}
                            bordered={false} style={{ background: '#fff1b8', borderRadius: '5%', margin: '0 2%' }}>
                            <Title style={{ color: '#ad6800' }}>18</Title>
                            <Title level={5} style={{ color: ' #d48806' }}>5 completed</Title>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={8}>
                    <div className="site-card-border-less-wrapper">
                        <Card
                            title={<Title style={{ color: '#237804' }} level={3}>Teams</Title>}
                            extra={<TeamOutlined style={{ fontWeight: '700', fontSize: '1.3em', borderRadius: '25%', padding: '10px', color: '#237804', background: '#b7eb8f' }} />}
                            bordered={false} style={{ background: '#d9f7be', borderRadius: '5%', margin: '0 2%' }}>
                            <Title style={{ color: '#237804' }}>12</Title>
                            <Title level={5} style={{ color: ' #389e0d' }}>3 completed</Title>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={8}>
                    <div className="site-card-border-less-wrapper">
                        <Card
                            title={<Title style={{ color: '#0050b3' }} level={3}>Active Tasks</Title>}
                            extra={<UnorderedListOutlined style={{ fontWeight: '700', fontSize: '1.3em', borderRadius: '25%', padding: '10px', color: '#0050b3', background: '#91d5ff' }} />}
                            bordered={false} style={{ background: '#bae7ff', borderRadius: '5%', margin: '0 2%' }}>
                            <Title style={{ color: '#0050b3' }}>132</Title>
                            <Title level={5} style={{ color: ' #096dd9' }}>28 completed</Title>
                        </Card>
                    </div>
                </Col>

            </Row>

            <Row style={{ background: '#efefef', height: '60%', margin: '25px 0 ', borderRadius: '1%', padding: '2%' }}>
                <Col xs={24} md={17} style={{ margin: '0 2%' }}>

                    <UserList />
                </Col>

                <Col xs={24} md={6} style={{}}>

                    <GraphChart />

                </Col>

            </Row>
        </>
    )
}

export default Users