import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ContentMain from '../../../components/CyberBugs/Main/ContentMain'
import HeaderMain from '../../../components/CyberBugs/Main/HeaderMain'
import InfoMain from '../../../components/CyberBugs/Main/InfoMain'

export default function IndexCyberBugs() {

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_PROJECT_DETAIL_SAGA',
      projectId: id
    })
  }, [])

  const { projectDetail } = useSelector(state => state.ProjectReducer);

  return (
    <div className='main p-4' style={{ width: "77%" }}>
      <HeaderMain projectDetail={projectDetail} />
      <InfoMain projectDetail={projectDetail} />
      <ContentMain projectDetail={projectDetail} />
    </div>
  )
}
