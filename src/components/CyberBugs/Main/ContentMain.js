import React from 'react'

export default function ContentMain(props) {
  const { projectDetail } = props;

  const renderCard = () => {
    return projectDetail.lstTask?.map((task, index) => {
      return <div key={index} className="card" style={{ width: '25%', height: '25rem' }}>
        <div className="card-header">
          {task.statusName}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
            <p>
              Each issue has a single reporter but can have multiple
              assignees
            </p>
            <div className="block" style={{ display: 'flex' }}>
              <div className="block-left">
                <i className="fa fa-bookmark" />
                <i className="fa fa-arrow-up ms-2" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: 'flex' }}>
                  <div className="avatar">
                    <img src={require('../../../assets/img/download (1).jfif')} alt={'abc'} />
                  </div>
                  <div className="avatar">
                    <img src={require('../../../assets/img/download (2).jfif')} alt={'abc'} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    })
  }

  return (
    <div className="content" style={{ display: 'flex' }}>
      {renderCard()}
    </div>

  )
}
