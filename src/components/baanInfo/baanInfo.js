import React from 'react'
import styles from './baan-info.module.scss'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

const baanInfo = ({bundle, device}) => {
  const data = useStaticQuery(graphql`
    query {
      lineIcon: file(relativePath:{regex:"/line.png$/"}){
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebookIcon: file(relativePath:{regex:"/facebook.png$/"}){
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitterIcon: file(relativePath:{regex:"/twitter.png$/"}){
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagramIcon: file(relativePath:{regex:"/instagram.png$/"}){
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const lineIcon = data.lineIcon.childImageSharp.fixed
  const facebookIcon = data.facebookIcon.childImageSharp.fixed
  const twitterIcon = data.twitterIcon.childImageSharp.fixed
  const instagramIcon = data.instagramIcon.childImageSharp.fixed

  return (
    <div className={styles.infoContainer} device={device}>
      <div>
        <Img fluid = {bundle.coverImage}/>
      </div>
      <div className={styles.logoWrapper} device={device}>
        <Img fluid = {bundle.logoImage}/>
      </div>
      <div className={styles.content}>
        <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>{bundle.nameTH}</h1>
        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>{bundle.slogan}</h3>
        <h3 style={{textAlign: 'center'}} dangerouslySetInnerHTML={{
          __html: bundle.description.replace(/\n/g, "<br/>")
        }}/>
      </div>
      <div className={styles.externalLinks}>
        {bundle.lineURL !== "" && 
          <a href={bundle.lineURL}>
            <Img fixed={lineIcon} className={styles.linkIcon}/>
          </a>
        }
        {bundle.facebookURL !== "" &&
          <a href={bundle.facebookURL}>
            <Img fixed={facebookIcon} className={styles.linkIcon}/>
          </a>
        }
        {bundle.twitterURL !== "" && 
          <a href={bundle.twitterURL}>
            <Img fixed={twitterIcon} className={styles.linkIcon}/>
          </a>
        }
        {bundle.instagramURL !== "" &&
          <a href={bundle.instagramURL}>
            <Img fixed={instagramIcon} className={styles.linkIcon}/>
          </a>
        }
      </div>
    </div>
  )
}

export default baanInfo
