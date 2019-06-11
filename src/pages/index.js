import React from "react"

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Fade, Box, Button, createMuiTheme, Typography } from '@material-ui/core'

import './index.scss'

import FeaturedContents from "../components/featuredContents";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { typography } from "@material-ui/system";

const theme = createMuiTheme({
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       fontFamily: `'Kanit', sans-serif`
  //     }
  //   }
  // }
  typography: {
    fontFamily: `'Kanit', sans-serif`
  }
})

export default () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <MuiThemeProvider theme={theme}>
      <Typography>
        <FeaturedContents />   
      </Typography>
    </MuiThemeProvider>
    // <Box style={{
    //   backgroundColor: 'orange',
    //   width: '50vw',
    //   height: '50vh', 
    //   overflow: 'hidden',
    //   position: 'absolute',
    //   top: '20vh',
    //   left: '20vw'
    // }}>
    //   {(() => {
    //     var arr = []
    //     for(var i = 0; i < 50; i++) {
    //       arr = arr.concat([<Button>Hello World</Button>])
    //     }
    //     return arr
    //   })()}
    //   <Button type='contained' style={{
    //     position: 'absolute',
    //     top: '50px',
    //     left: '20px'
    //   }}>Test</Button>
    // </Box>
  )
}