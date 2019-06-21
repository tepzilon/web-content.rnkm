import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styles from './navigationBar.new.module.scss'
import Img from 'gatsby-image'
import DesktopNav from './desktopNavBar.new'
import MobileNav from './mobileNavBar.new'

class NavigationBar extends Component {
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
      //   document
      //     .getElementById('img-wrapper')
      //     .classList.remove(styles.notScrolled)
      //   document.getElementById('img-wrapper').classList.add(styles.scrolled)
    } else {
      //   document.getElementById('img-wrapper').classList.remove(styles.scrolled)
      //   document.getElementById('img-wrapper').classList.add(styles.notScrolled)
    }
  }
  render() {
    const { responsive, title, theme, children } = this.props
    const menus = [
      { text: 'บ้าน', link: '/gallery', isExternal: false },
      {
        text: 'ลงทะเบียน/เข้าสู่ระบบ',
        link: 'https://www.yahoo.com/',
        isExternal: true,
      },
      { text: 'ประกาศ', link: '/', isExternal: false },
      { text: 'ติดต่อเรา', link: '/', isExternal: false },
    ]
    const navigation = responsive.tablet ? (
      <DesktopNav menus={menus} theme={theme}/>
    ) : (
      <MobileNav menus={menus} theme={theme}/>
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
            <div className={styles.appbar} id="appbar">
              <div className={styles.toolbar} theme={theme}>
                <div className={styles.logoWrapper}>
                  <Img fluid={data.file.childImageSharp.fluid} />
                </div>
                <div className={styles.header} desktop={responsive.tablet ? "true":"false"}>
                  | {title}
                </div>
                <div className={styles.navigation}>{navigation}</div>
              </div>

              {/* <div className={styles.shadow} /> */}
            </div>
            {children}
          </div>
        )}
      />
    )
  }
}

export default NavigationBar
