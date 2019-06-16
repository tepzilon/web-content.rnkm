import React from 'react'
import { createMuiTheme, Typography } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import NavigationBar from './navigationBar/navigationBar'
import { Helmet } from 'react-helmet'
import favicon from '../assets/images/logo.png'

import './layout.scss'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
})

const layout = ({ children, responsive, title }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography component={'span'}>
        <Helmet 
          title={title}
          link={[
            { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon}` },
          ]}
        />
        <NavigationBar responsive={responsive} />
        {children}
      </Typography>
    </MuiThemeProvider>
  )
}

export default layout
