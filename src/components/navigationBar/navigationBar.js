import React from 'react'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'
import { Toolbar, AppBar } from '@material-ui/core'
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

  // const appBarTheme = createMuiTheme({
  //   overrides: {
  //     MuiToolbar: {
  //       root: {
  //         margin: '10px 0',
  //       },
  //     },
  //   },
  // })
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "rnkm_logo_filled.png" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <AppBar position="sticky" color="default">
      <Toolbar style={{ margin: '10px 0' }}>
        <div style={{ height: '100px', width: '100px' }}>
          <Link to="/">
          <Img fluid={data.file.childImageSharp.fluid} alt="rnkm logo" />
          </Link>
        </div>

        <div style={{ flexGrow: 1, textAlign: 'center',paddingBottom:0 }}>
          <h1>รับน้องก้าวใหม่</h1>
        </div>
        {navigation}
      </Toolbar>
    </AppBar>
  )
}
