import React from 'react'
import styles from './baan-info.module.scss'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'
import { Icon, Divider } from 'antd';

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
      facebookShareIcon: file(relativePath:{regex:"/facebook-share.png$/"}) {
        childImageSharp {
          fixed(width: 167, height: 50) {
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

      lineIcon_mobile: file(relativePath:{regex:"/line.png$/"}){
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebookIcon_small: file(relativePath:{regex:"/facebook.png$/"}){
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebookShareIcon_small: file(relativePath:{regex:"/facebook-share.png$/"}) {
        childImageSharp {
          fixed(width: 100, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitterIcon_small: file(relativePath:{regex:"/twitter.png$/"}){
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagramIcon_small: file(relativePath:{regex:"/instagram.png$/"}){
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const socialSmallSuffix = (device!=='desktop')?'_small':''
  return (
    <div className={styles.infoContainer} device={device}>
      <div>
        <Img fluid = {bundle.coverImage}/>
      </div>
      <div className={styles.logoWrapper} device={device}>
        <Img fluid = {bundle.logoImage}/>
      </div>
      <div className={styles.content}>
        <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>{`บ้าน${bundle.nameTH} - Baan ${bundle.nameEN}`}</h1>
        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>{bundle.slogan}</h3>
        <h3 style={{textAlign: 'center'}} dangerouslySetInnerHTML={{
          __html: bundle.description.replace(/\n/g, "<br/>")
        }}/>
      </div>
      <div className={styles.externalLinks}>
        {['facebook','line','twitter','instagram'].map(social => (
          bundle[`${social}URL`] !== "" && 
          <a href={bundle[`${social}URL`]}>
            <Img fixed={data[`${social}Icon${socialSmallSuffix}`].childImageSharp.fixed}
                className={styles.linkIcon}
                device={device}/>
          </a>
        ))}
        <Divider type='vertical' style={{height: device==='desktop'?'50px':'30px'}}/>
        <a href={bundle.facebookURL}>
            <Img fixed={data[`facebookShareIcon${socialSmallSuffix}`].childImageSharp.fixed}
                className={styles.linkIcon}
                device={device}/>
        </a>
      </div>
    </div>
  )
}

export default baanInfo
