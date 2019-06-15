import React from 'react'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'
import { createMuiTheme, Toolbar, AppBar } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ responsive }) => {
  const menus = [
    // { text: 'เกี่ยวกับ', link: '/',isExternal:false },
    { text: 'บ้าน', link: '/gallery', isExternal: false },
    { text: 'ลงทะเบียน', link: 'https://www.yahoo.com/', isExternal: true },
    { text: 'เข้าสู่ระบบ', link: 'https://www.google.com/', isExternal: true },
    { text: 'ติดต่อเรา', link: '/', isExternal: false },
  ]
  const navigation = responsive.tablet ? (
    <DesktopNav menus={menus} />
  ) : (
    <MobileNav menus={menus} />
  )

  const appBarTheme = createMuiTheme({
    overrides: {
      MuiToolbar: {
        root: {
          margin: '10px 0',
        },
      },
    },
  })
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <div>
      
      {/* <MuiThemeProvider theme={appBarTheme}> */}
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <Link to="/" style={{height:60}}>
            <Img fixed={data.file.childImageSharp.fixed} alt="rnkm logo"/>
          </Link>
            <div style={{ flexGrow: 1 }} />
            {navigation}
          </Toolbar>
        </AppBar>
        
      {/* </MuiThemeProvider> */}
    </div>
  )
}
