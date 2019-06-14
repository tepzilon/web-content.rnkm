import React from 'react'
import { createMuiTheme, Typography} from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import NavigationBar from './navigationBar/navigationBar'

import './layout.scss'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
})

const layout =  ({children, responsive}) => {
  

  return(
      <MuiThemeProvider theme={theme}>
          <Typography component={'span'}>
              <NavigationBar responsive={responsive} />
                  {children}
          </Typography>
      </MuiThemeProvider>
  )

}

export default layout
