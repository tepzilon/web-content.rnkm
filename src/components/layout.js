import React from 'react'
import GlobalStyles from '../shared/css/globalStyles'
import { Helmet } from 'react-helmet'
import favicon from '../assets/images/favicon.ico'
import NavigationBar from './navigationBar/navigationBar'
import './layout.scss'
import 'antd/dist/antd.css'

export default ({ children, device, title, theme }) => (
  <div>
    <GlobalStyles />
    <Helmet
      title={title + ` | รับน้องก้าวใหม่ ปีการศึกษา 2562`}
      link={[{ rel: 'icon', type: 'image/x-icon', href: `${favicon}` }]}
    />
    <NavigationBar device={device} title={title} theme={theme}>
      {children}
    </NavigationBar>
  </div>
)
