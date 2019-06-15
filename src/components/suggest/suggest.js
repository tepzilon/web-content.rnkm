import React from 'react'
// import styles from './suggest.module.scss'
import { Grid,  Box } from '@material-ui/core';

const lorem = (<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisl quis neque dignissim mollis. Proin eu hendrerit felis, luctus sodales diam. Nullam lobortis rhoncus ex, ac auctor nisl fermentum ut. Mauris in pretium elit. Fusce non leo vitae nibh pretium commodo. In feugiat porttitor purus in hendrerit. Nam velit lectus, pellentesque vel justo eu, auctor sodales nulla. Sed ac imperdiet lacus. In pretium lorem ac consectetur pellentesque. Etiam imperdiet, lectus ut faucibus tincidunt, est odio luctus augue, ac pharetra odio nunc nec nibh. In at vulputate libero, sed consectetur justo. Nam porttitor est quis mauris pharetra sodales. Aenean nec accumsan arcu.
</p>)

const suggest = ({responsive}) => {
  return (
    <Box style={{marginLeft: '15vw', marginRight: '15vw'}}>
      <h3>รับน้องก้าวใหม่คืออะไร</h3>
        {responsive.mobile ?
        <Grid container spacing={3} style={{marginBottom:'20px'}}>
          <Grid item xs={6}>
            {lorem}
          </Grid>
          <Grid item xs={6}>
            {lorem}
          </Grid>
          <Grid item xs={6}>
            {lorem}
          </Grid>
          <Grid item xs={6}>
            {lorem}
          </Grid>
          </Grid>
          :
            <Grid container spacing={3} style={{marginBottom:'20px'}}>
          <Grid item xs={12}>
            {lorem}
          </Grid>
          <Grid item xs={12}>
            {lorem}
          </Grid>
          <Grid item xs={12}>
            {lorem}
          </Grid>
          <Grid item xs={12}>
            {lorem}
          </Grid>
          </Grid>
        }
      {/* <h3>สำหรับพี่ Staff</h3>
      <p><a href='http://www.google.com'>คลิ้กที่นี่</a> เพื่อเข้าสู่เว็บ Staff</p> */}
    </Box>
  )
}

export default suggest
