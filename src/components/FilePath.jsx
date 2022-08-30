import React from 'react'
import { Breadcrumb } from 'antd';

function FilePath() {
    return (
        <Breadcrumb
            style={{
                margin: '20px',
            }}
        >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>


        </Breadcrumb>
    )
}

export default FilePath