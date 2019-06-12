import React from 'react'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'
import AppBar from '@material-ui/core/AppBar'
import { createMuiTheme, Toolbar } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ isDesktop }) => {
  const menus = [
    { text: 'เกี่ยวกับ', link: '/',isExternal:false },
    { text: 'บ้าน', link: '/',isExternal:false },
    { text: 'ลงทะเบียน', link: 'https://www.yahoo.com/',isExternal:true },
    { text: 'เข้าสู่ระบบ', link: 'https://www.google.com/',isExternal:true },
    { text: 'ติดต่อเรา', link: '/',isExternal:false },
  ]
  const navigation = isDesktop ? (
    <DesktopNav menus={menus} />
  ) : (
    <MobileNav menus={menus} />
  )
  
  const appBarTheme = createMuiTheme({
    overrides: {
      MuiToolbar: {
        root: {
          padding : 5,
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
    <MuiThemeProvider theme={appBarTheme}>
      <AppBar color="default" position="sticky" color="secondary">
        <Toolbar>
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} />
          </Link>
          <div style={{ flexGrow: 1 }} />
          {navigation}
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  )
}
