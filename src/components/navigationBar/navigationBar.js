import React from 'react'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'
import { Toolbar, AppBar } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './navigationBar.module.scss'

export default ({ responsive, title }) => {
  const menus = [
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

  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "rnkm_logo_filled.png" }) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  window.onscroll = function() {
    scrollFuntion()
  }

  function scrollFuntion() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document
        .getElementById('img-wrapper')
        .classList.remove(styles.notScrolled)
      document.getElementById('img-wrapper').classList.add(styles.scrolled)
    } else {
      document.getElementById('img-wrapper').classList.remove(styles.scrolled)
      document.getElementById('img-wrapper').classList.add(styles.notScrolled)
    }
  }

  return (
      <AppBar position="sticky" color="default">
        <Toolbar style={{ margin: '5px 0',minHeight:'auto' }}>
          <Link to="/">
          <div id="img-wrapper" className={styles.notScrolled}>
            <Img fluid={data.file.childImageSharp.fluid} alt="rnkm logo" />
          </div>
          </Link>
          <div style={{ flexGrow: 1 }}>
            {/* <h1>| {title}</h1> */}
            </div>
          {navigation}
        </Toolbar>
      </AppBar>
  )
}
