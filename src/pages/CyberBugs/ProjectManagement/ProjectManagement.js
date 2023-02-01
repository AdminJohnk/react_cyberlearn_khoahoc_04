import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Space, Table, Tag, message, Popconfirm, Avatar, Tooltip, Popover, AutoComplete } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { parse } from 'parse5';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { GET_ALL_PROJECT_SAGA } from '../../../redux/constants/CyberBugs/CyberBugsConst';
import FormEditProject from '../../../components/CyberBugs/Form/FormEdirProject/FormEditProject';
import { NavLink } from 'react-router-dom';



export default function ProjectManagement() {

  const searchRef = useRef(null);

  const [value, setValue] = useState('')

  // Lấy mảng userSearch từ redux về
  const { userSearch } = useSelector(state => state.UserCyberBugsReducer);

  // ComponentDidMount
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_ALL_PROJECT_SAGA
    })
  }, [])


  const { arrProject } = useSelector(state => state.ProjectCuberBugsReducer);

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      sortDirections: ['ascend'],
    },
    {
      title: 'Project name',
      dataIndex: 'projectName',
      key: 'projectName',
      render: (text, record, index) => {
        return <NavLink style={{textDecoration:'none'}} to={`/projectdetail/${record.id}`}>{text}</NavLink>
      },
      sorter: (a, b) => {
        let nameA = a.projectName.trim().toLowerCase();
        let nameB = b.projectName.trim().toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      },
      sortDirections: ['ascend'],
    },
    // {
    //     title: 'Description',
    //     dataIndex: 'description',
    //     key: 'description',

    //     render: (text, record, index) => {
    //         return <div dangerouslySetInnerHTML={{ __html: record.description }}></div>
    //     }
    // },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
      sorter: (a, b) => {
        let nameA = a.categoryName.trim().toLowerCase();
        let nameB = b.categoryName.trim().toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      },
      sortDirections: ['ascend'],
    },
    {
      title: 'Creator',
      key: 'creator',
      render: (text, record, index) => {
        return <Tag color="geekblue">{record.creator?.name}</Tag>
      },
      sorter: (a, b) => {
        let nameA = a.creator.name.trim().toLowerCase();
        let nameB = b.creator.name.trim().toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      },
      sortDirections: ['ascend'],
    },
    {
      title: 'Member',
      key: 'member',
      render: (text, record, index) => {

        return <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* <Avatar.Group maxCount={2} maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}>
            {record.members?.map((member, index) => {
              return <Tooltip title={member.name} placement="top">
                <Avatar src={member.avatar} />
              </Tooltip>
            }
            )}
          </Avatar.Group> */}

          {/* Chỉ lấy 2 avatar, nếu lớn hơn 2 cho 1 icon avatar '...' */}
          {
            function x() {
              let arrAvatar = [];
              for (let i = 0; i < record.members.length; i++) {
                if (i < 2) {
                  arrAvatar.push(
                    // Hiển thị 1 thành viên
                    <Popover placement="top" trigger="hover" title={'Members'} content={() => {
                      return <table className='table'>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {record.members?.map((member, index) => {
                            return <tr key={index}>
                              <td>{member.userId}</td>
                              <td><Avatar src={member.avatar} /></td>
                              <td>{member.name}</td>
                              <td><Button danger onClick={() => {
                                dispatch({
                                  type: 'REMOVE_USER_PROJECT_SAGA',
                                  userProject: {
                                    userId: member.id,
                                    projectId: record.id
                                  }
                                })
                              }
                              }>Remove</Button></td>
                            </tr>
                          })}
                        </tbody>
                      </table>

                    }}>
                      <Avatar src={record.members[i].avatar} />
                    </Popover>
                  )
                }
                // Cái +6
                if (i === 2) {
                  arrAvatar.push(
                    <Avatar style={{
                      backgroundColor: '#f56a00',
                      color: '#fde3cf',
                    }}>+{record.members.length - 2}</Avatar>
                  )
                }
              }
              return arrAvatar;
            }()
          }

          {/* Cái dấu cộng */}
          <Popover placement="top" title={"Add user"} content={() => {
            return <AutoComplete style={{
              width: '100%',
            }} value={value}
              onSearch={(value) => {
                if (searchRef.current) {
                  clearTimeout(searchRef.current)
                }
                searchRef.current = setTimeout(() => {
                  console.log(value)
                  dispatch({
                    type: 'GET_USER_SAGA',
                    keyword: value
                  })
                }, 300)
              }} options={userSearch?.map((user, index) => {
                return {
                  value: user.userId.toString(),
                  label: user.name
                }
              })} onSelect={(value, option) => {
                setValue(option.label)
                // Gọi API trả về Backend
                dispatch({
                  type: 'ASSIGN_USER_PROJECT_SAGA',
                  userProject: {
                    projectId: record.id,
                    userId: option.value
                  }
                })
              }} onChange={(value) => {
                setValue(value)
              }}
            />
          }} trigger="click">
            <Button style={{
              marginLeft: '5px',
              borderRadius: '50%',
              width: '32px',
              padding: '0px',
            }}>+</Button>
          </Popover>
        </div>
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <a onClick={() => {
            dispatch({
              type: 'OPEN_FORM_EDIT_PROJECT',
              title: 'Create new project',
              Component: <FormEditProject />,
            });
            dispatch({
              type: 'SET_PROJECT_EDIT',
              projectEdit: record
            })

          }} href><EditOutlined /></a>


          <Popconfirm
            placement="leftBottom"
            title={`Are you sure to delete this project?`}
            // description={`Delete the project`}
            onConfirm={() => {
              dispatch({
                type: 'DELETE_PROJECT_SAGA',
                idProject: record.id
              })
            }}
            okText="Yes"
            cancelText="No"
          >
            <a href><DeleteOutlined /></a>
          </Popconfirm>

        </Space>
      ),
    },

  ];

  return (
    <div className='p-4' style={{ width: "77%" }}>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={arrProject} onChange={handleChange} />
    </div>
  )
}
