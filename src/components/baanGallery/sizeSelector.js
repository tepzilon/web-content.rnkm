import React from 'react'
import { Grid, Fab, Box } from '@material-ui/core';

const sizeSelector = ({setSize}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box style={{
          width:'100%',
          paddingTop:'100%',
          position:'relative'
        }}>
          <Fab style={{
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0,
            width:'100%',
            height:'100%',
            maxWidth: '100px',
            maxHeight: '100px'
          }} onClick={() => setSize('S')}>S</Fab>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box style={{
          width:'100%',
          paddingTop:'100%',
          position:'relative'
        }}>
          <Fab style={{
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0,
            width:'100%',
            height:'100%',
            maxWidth: '100px',
            maxHeight: '100px'
          }} onClick={() => setSize('M')}>M</Fab>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box style={{
          width:'100%',
          paddingTop:'100%',
          position:'relative'
        }}>
          <Fab style={{
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0,
            width:'100%',
            height:'100%',
            maxWidth: '100px',
            maxHeight: '100px'
          }} onClick={() => setSize('L')}>L</Fab>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box style={{
          width:'100%',
          paddingTop:'100%',
          position:'relative'
        }}>
          <Fab style={{
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0,
            width:'100%',
            height:'100%',
            maxWidth: '100px',
            maxHeight: '100px'
          }} onClick={() => setSize('XL')}>XL</Fab>
        </Box>
      </Grid>
      
    
    </Grid>
  )
}

export default sizeSelector