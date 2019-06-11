import React from "react"

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Fade, Box, Button } from '@material-ui/core'

import './index.scss'

import FeaturedContents from "../components/featuredContents";

export default () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <FeaturedContents />   
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