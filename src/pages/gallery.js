import React from 'react'

import { createMuiTheme, Typography, useMediaQuery } from '@material-ui/core'
import { MuiThemeProvider } from "@material-ui/core/styles";

import NavigationBar from '../components/navigationBar/navigationBar'

import BaanContainer from '../components/baanGallery/baanGallery';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  }
})

export default () => {
  let responsive = {
    desktop: useMediaQuery('(min-width:991px)'),
    tablet: useMediaQuery('(min-width:767px)'),
    mobile: useMediaQuery('(min-width:479px)')
  }
  return (
    <MuiThemeProvider theme={theme}>
      <Typography component={'span'}>
        <NavigationBar responsive={responsive}/>
        <BaanContainer responsive={responsive}/>
      </Typography> 
    </MuiThemeProvider>
  )
}