import React from 'react'
import './footer.scss'
import { Icon } from 'antd'

const footer = ({ device }) => {
  return (
    <div className="footer" device={device}>
      <div style={{ fontSize: 14, color: '#F58FA3' }}>
        ©{' '}
        <a
          href="https://www.facebook.com/chulafreshmen/"
          style={{ color: '#F58FA3' }}
        >
          CU for Freshmen
        </a>
      </div>
      <div style={{ color: '#aaa' }}>
        <strong>Creator : </strong>
        <Icon type="github" theme="filled" />{' '}
        <a href="https://github.com/KKCORR" className="link-footer">
          Nattanon{device !== 'mobile' ? ' Huabnarin' : ''}
        </a>
        <span> · </span>
        <Icon type="github" theme="filled" />{' '}
        <a href="https://github.com/techid2000" className="link-footer">
          Techid{device !== 'mobile' ? ' Janphaka' : ''}
        </a>
      </div>
    </div>
  )
}

export default footer
