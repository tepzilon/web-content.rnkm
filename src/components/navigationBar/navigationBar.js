import React, { Component } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styles from './navigationBar.module.scss'
import Img from 'gatsby-image'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'

class NavigationBar extends Component {
  state = {
    lastScrollY: 0,
    phukun: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const currentScrollY = window.scrollY
    const { lastScrollY } = this.state
    this.setState({
      lastScrollY: currentScrollY,
    })

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (currentScrollY > lastScrollY && winScroll > 100) {
      this.setState({ phukun: true })
      // document.getElementById('toolbar').style.height = '40px'
      // document.getElementById('logo wrapper').style.height = '30px'
      // document.getElementById('logo wrapper').style.width = '30px'
    } else if (currentScrollY < lastScrollY) {
      this.setState({ phukun: false })
      // document.getElementById('toolbar').style.height = '80px'
      // document.getElementById('logo wrapper').style.height = '60px'
      // document.getElementById('logo wrapper').style.width = '60px'
    }
  }
  render() {
    const { device, title, theme, children } = this.props
    const menus = [
      { text: 'Home', link: '/', isExternal: false },
      { text: 'BAAN', link: '/gallery', isExternal: false },
      {
        text: 'Register/Login',
        link: 'https://www.yahoo.com/',
        isExternal: true,
      },
      { text: 'Announce', link: '/announce', isExternal: false },
      { text: 'Q&A', link: '/question', isExternal: false },
    ]
    const navigation =
      device === 'desktop' ? (
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
              <div className={`${styles.toolbar} ${this.state.phukun ? styles.phukun : ""}`} theme={theme} id="toolbar">
                <div className={`${styles.logoWrapper} ${this.state.phukun ? styles.phukun : ""}`} id="logo wrapper">
                  <Link to="/">
                    <Img fluid={data.file.childImageSharp.fluid} />
                  </Link>
                </div>
                <div
                  className={styles.header}
                  device={device}
                >
                  | {title}
                </div>
                <div className={styles.navigation} device={device}>{navigation}</div>
              </div>
            </div>
            <div className={styles.wholeContent}>{children}</div>
          </div>
        )}
      />
    )
  }
}

export default NavigationBar
