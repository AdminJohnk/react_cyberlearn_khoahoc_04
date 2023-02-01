import React from 'react';
import { Layout } from 'antd';
import SideBarCyberBugs from '../../components/CyberBugs/SideBarCyberBugs';
import MenuCyberBugs from '../../components/CyberBugs/MenuCyberBugs';
import ModalCyberBugs from '../../components/CyberBugs/ModalCyberBugs/ModalCyberBugs';
const { Header, Footer, Sider, Content } = Layout;

export default function CyberBugsTemplate(props) {

    const { Component } = props;

    return (
        <div className='jira'>
            <SideBarCyberBugs/>
            <MenuCyberBugs/>
            
            <Component/>

            <ModalCyberBugs/>
        </div>
    )
}
