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
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp,
          }
        }
      }
      facebookIcon: file(relativePath:{regex:"/facebook.png$/"}){
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      facebookShareIcon: file(relativePath:{regex:"/facebook-share.png$/"}) {
        childImageSharp {
          fluid(maxWidth: 167, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twitterIcon: file(relativePath:{regex:"/twitter.png$/"}){
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instagramIcon: file(relativePath:{regex:"/instagram.png$/"}){
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const shareURL = `https://rubnongcu.life/gallery/${bundle.nameURL.replace(/\+/g,'%2b')}`

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
            <div className={styles.linkIcon} type='social_media'>
              <Img fluid={data[`${social}Icon`].childImageSharp.fluid}/>
            </div>
          </a>
        ))}
        <Divider type='vertical' style={{height: '30px'}}/>
        {/* <div className="fb-share-button" data-href={`${shareURL}`} data-layout="button" data-size="large">
          <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}&amp;src=sdkpreparse`} className="fb-xfbml-parse-ignore">
            Share
          </a>
        </div> */}
       <iframe src={`https://www.facebook.com/plugins/share_button.php?href=${encodeURIComponent(shareURL)}&layout=button&size=large&width=73&height=28`}
        width="73" height="28" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  )
}

export default baanInfo
