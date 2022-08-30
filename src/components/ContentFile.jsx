import React from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

function ContentFile() {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                height: '71vh'
            }}
        >
            Hello Content
        </Content>
    )
}

export default ContentFile