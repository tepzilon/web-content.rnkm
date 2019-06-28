import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './slick.scss'

const slide = ({ className, background, content }) => {
  return (
    <BackgroundImage
      fluid={background.node.childImageSharp.fluid}
      className={className}
    >
      <div className="slide-style">
      {/* {content} */}
      <div style={{width:100,height:100,backgroundColor:'yellow'}}></div>
      <div style={{width:100,height:100,backgroundColor:'red'}}></div>
      </div>
    </BackgroundImage>
  )
}

export default slide
