import React from 'react'
import styles from './suggest.module.scss'
import { Grid, Button, Box } from '@material-ui/core';

const suggest = ({responsive}) => {
  return (
    <Box style={{marginLeft: '15vw', marginRight: '15vw'}}>
      <h3>สำหรับน้องๆ</h3>
        {responsive.mobile ?
        <Grid container spacing={3} style={{marginBottom:'20px'}}>
          <Grid item xs={3}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>เกี่ยวกับกิจกรรม</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>ลงทะเบียน</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>รายละเอียดบ้าน</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>ติดต่อเรา</Button>
          </Grid>
          </Grid>
          :
            <Grid container spacing={3} style={{marginBottom:'20px'}}>
          <Grid item xs={6}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>ลงทะเบียน</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>รายละเอียดบ้าน</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>เกี่ยวกับกิจกรรม</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained' style={{width:'100%', height:'150px'}}>ติดต่อเรา</Button>
          </Grid>
          </Grid>
        }
      <h3>สำหรับพี่ Staff</h3>
      <p><a href='http://www.google.com'>คลิ๊กที่นี่</a> เพื่อเข้าสู่เว็บ Staff</p>
    </Box>
  )
}

export default suggest
