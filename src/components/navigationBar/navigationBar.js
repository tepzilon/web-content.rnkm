import React, { Component } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styles from './navigationBar.module.scss'
import Img from 'gatsby-image'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'

class NavigationBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll.bind(this))
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
    // console.log('scrolled =', scrolled)
    if (scrolled > 0.2) {
      document.getElementById('toolbar').style.height = '40px'
      document.getElementById('logo wrapper').style.height = '30px'
      document.getElementById('logo wrapper').style.width = '30px'
    } else if (scrolled < 0.1) {
      document.getElementById('toolbar').style.height = '80px'
      document.getElementById('logo wrapper').style.height = '60px'
      document.getElementById('logo wrapper').style.width = '60px'
    }
  }
  render() {
    const { responsive, title, theme, children } = this.props
    const menus = [
      { text: 'หน้าแรก', link: '/', isExternal: false },
      { text: 'บ้าน', link: '/gallery', isExternal: false },
      {
        text: 'ลงทะเบียน/เข้าสู่ระบบ',
        link: 'https://www.yahoo.com/',
        isExternal: true,
      },
      { text: 'ประกาศ', link: '/annouce', isExternal: false },
      { text: 'ติดต่อเรา', link: '/contact', isExternal: false },
    ]
    const navigation = responsive.tablet ? (
      <DesktopNav menus={menus} theme={theme} />
    ) : (
      <MobileNav menus={menus} theme={theme} />
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
        render={data => (
          <div>
            <div className={styles.appbar}>
              <div className={styles.toolbar} theme={theme} id="toolbar">
                <div className={styles.logoWrapper} id="logo wrapper">
                  <Link to="/">
                    <Img fluid={data.file.childImageSharp.fluid} />
                  </Link>
                </div>
                <div
                  className={styles.header}
                  desktop={responsive.tablet ? 'true' : 'false'}
                >
                  | {title}
                </div>
                <div className={styles.navigation}>{navigation}</div>
              </div>
            </div>
            {children}
          </div>
        )}
      />
    )
  }
}

export default NavigationBar
