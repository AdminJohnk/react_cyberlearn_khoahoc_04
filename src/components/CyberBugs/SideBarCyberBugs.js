import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, theme } from 'antd';
import {
    FileAddOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import FormCreateTask from './Form/FormCreateTask';
const { Header, Sider, Content } = Layout;

export default function SideBarCyberBugs() {

    const [collapsed, setCollapsed] = useState(true);

    const [height, setHeight] = useState(window.innerHeight);
    window.onresize = () => {
        setHeight(window.innerHeight);
    }

   const dispatch = useDispatch();

    const createTaskClick = () => {
        dispatch({
            type: 'OPEN_FORM_CREATE_TASK',
            Component: <FormCreateTask/>,
            title: 'Create Task'

        })
    }

    return (
        // <div className='sideBar'>
        //     <div className="sideBar-top">
        //         <div className="sideBar-icon">
        //             <i class="fab fa-angular text-white ms-1"></i>
        //         </div>
        //         <div className="sideBar-icon" data-toggle="modal" data-target="#searchModal" style={{ cursor: 'pointer' }}>
        //             <i className="fa fa-search text-white me-2" />
        //             <span className="title">SEARCH ISSUES</span>
        //         </div>
        //         <div className="sideBar-icon">
        //             <i className="fa fa-plus text-white me-2" />
        //             <span className="title">CREATE ISSUES</span>
        //         </div>
        //     </div>
        //     <div className="sideBar-bottom">
        //         <div className="sideBar-icon">
        //             <i className="fa fa-question-circle text-white me-2" />
        //             <span className="title">ABOUT</span>
        //         </div>
        //     </div>
        // </div>

        <div style={{backgroundColor: '#001427'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Header
                    style={{
                        padding: 0,
                        color: 'white',
                        textAlign: 'right',
                        padding: '5px 10px 5px 10px',
                        fontSize: '20px',
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <FileAddOutlined />,
                            label: 'Create Task',
                            onClick: createTaskClick,
                        },
                        {
                            key: '2',
                            icon: <SearchOutlined />,
                            label: 'Search',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
        </div>

    )
}
