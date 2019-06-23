import React from 'react'
import styles from './baan-info.module.scss'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

const baanInfo = ({bundle}) => {

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

  console.log(data)

  const lineIcon = data.lineIcon.childImageSharp.fixed
  const facebookIcon = data.facebookIcon.childImageSharp.fixed
  const twitterIcon = data.twitterIcon.childImageSharp.fixed
  const instagramIcon = data.instagramIcon.childImageSharp.fixed

  return (
    <div className={styles.infoContainerDesktop}>
      <div>
        <Img fluid = {bundle.coverImage}/>
      </div>
      <div style={{
        width: '20%',
        height: 'auto',
        margin: '25px auto -10vw auto',
        transform: 'translate(0, -10vw)',
        borderRadius: '1vw',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}>
        <Img fluid = {bundle.logoImage}/>
      </div>
      <div style={{
        margin: '25px 10vw 25px 10vw'
      }}>
        <h1 style={{textAlign: 'center'}}>{bundle.nameTH}</h1>
        <h3 style={{textAlign: 'center'}}>{bundle.description}</h3>
      </div>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
      }}>
        {bundle.lineURL !== "" && <a href={bundle.lineURL}><Img fixed={lineIcon} style={{margin: '0 10px 0 10px'}}/></a>}
        {bundle.facebookURL !== "" && <a href={bundle.facebookURL}><Img fixed={facebookIcon} style={{margin: '0 10px 0 10px'}}/></a>}
        {bundle.twitterURL !== "" && <a href={bundle.twitterURL}><Img fixed={twitterIcon} style={{margin: '0 10px 0 10px'}}/></a>}
        {bundle.instagramURL !== "" && <a href={bundle.instagramURL}><Img fixed={instagramIcon} style={{margin: '0 10px 0 10px'}}/></a>}
      </div>
    </div>
  )
}

export default baanInfo
