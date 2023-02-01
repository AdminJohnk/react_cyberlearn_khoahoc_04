import React from 'react';
import { useState, useEffect } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


export default function UserLoginTemplate(props) {

    const { Component } = props;

    const [{width, height}, setSize] = useState({width: window.innerWidth/2, height: window.innerHeight})

    useEffect(() => {
        window.onresize = () => {
            setSize({width: window.innerWidth/2, height: window.innerHeight})
        }
    },[])

    return (
        <Layout>
            <Sider width={width} style={{ height, backgroundImage: 'url(https://picsum.photos/2000)', backgroundSize: '100%' }}>

            </Sider>
            <Content>
                <Component />
            </Content>
        </Layout>
    )
}
