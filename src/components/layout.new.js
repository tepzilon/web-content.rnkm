import React from 'react'
import GlobalStyles from '../shared/css/globalStyles'
import { Helmet } from 'react-helmet'
import favicon from '../assets/images/favicon.ico'
import NavigationBar from '../components/navigationBar/navigationBar.new'
import './layout.new.scss'

export default ({ children, responsive, title, theme }) => (
  <div>
    <GlobalStyles />
    <Helmet
      title={title + ` | รับน้องก้าวใหม่ ปีการศึกษา 2562`}
      link={[{ rel: 'icon', type: 'image/x-icon', href: `${favicon}` }]}
    />
    <NavigationBar responsive={responsive} title={title} theme={theme}>
      {children}
    </NavigationBar>
  </div>
)