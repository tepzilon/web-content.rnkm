import React from "react"

import './index.scss'

import { createMuiTheme, Typography } from '@material-ui/core'
import { MuiThemeProvider } from "@material-ui/core/styles";

import Featured from "../components/featured";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
  }
})

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography component={'span'}>
        <Featured />   
      </Typography> 
    </MuiThemeProvider>
  )
}