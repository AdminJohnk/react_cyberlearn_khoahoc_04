import React from 'react'

export default function HeaderMain(props) {
  const {projectDetail} = props;
  return (
    <div className="header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ backgroundColor: 'white', margin: '10px 0px 15px 0px'}}>
          <li className="breadcrumb-item">Project</li>
          <li className="breadcrumb-item">CyberLearn</li>
          <li className="breadcrumb-item active" aria-current="page">Project management</li>
          <li className="breadcrumb-item active" aria-current="page">{projectDetail.projectName}</li>
        </ol>
      </nav>
      <h3>{projectDetail.projectName}</h3>
      {/* parse html */}
      <div dangerouslySetInnerHTML={{ __html: projectDetail.description }}></div>
    </div>
  )
}
