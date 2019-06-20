import React from 'react'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'
import { Toolbar, AppBar } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './navigationBar.module.scss'

export default class NavigationBar extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    if (scrolled > 0.1) {
      document
        .getElementById('img-wrapper')
        .classList.remove(styles.notScrolled)
      document.getElementById('img-wrapper').classList.add(styles.scrolled)
    } else {
      document.getElementById('img-wrapper').classList.remove(styles.scrolled)
      document.getElementById('img-wrapper').classList.add(styles.notScrolled)
    }
  }

  render() {
    const {responsive, title} = this.props
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
    return (
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "rnkm_logo_filled.png" }) {
              childImageSharp {
                fluid(maxWidth: 120, maxHeight: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            } 
          }
        `}
        render={data=>(
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
        )}
      >
      </StaticQuery>
    )
  }
}
