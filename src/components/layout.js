import React from 'react'
import { createMuiTheme, Typography } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import NavigationBar from './navigationBar/navigationBar'
import { Helmet } from 'react-helmet'
import favicon from '../assets/images/favicon.ico'

import GlobalStyles from '../shared/css/globalStyles'
import './layout.scss'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'ChulalongkornFixed, sans-serif',
  },
  
})

const layout = ({ children, responsive, title }) => {
  return (
    <div>
      <GlobalStyles />
       <MuiThemeProvider theme={theme}>
      <Typography component={'span'}>
        <Helmet  
          title={title+` | รับน้องก้าวใหม่ ปีการศึกษา 2562`}
          link={[
            { rel: 'icon', type: 'image/x-icon', href: `${favicon}` },
          ]}
        />
        <NavigationBar responsive={responsive} title={title}/>
        {children}
      </Typography>
    </MuiThemeProvider>
    </div>
   
  )
}

export default layout
