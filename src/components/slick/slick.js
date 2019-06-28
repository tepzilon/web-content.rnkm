import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel } from 'antd'
import Slide from './slide'
import './slick.scss'
import content from './slickContent'

export default class slick extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            backgrounds: allFile(
              filter: { relativePath: { regex: "/^slickBackground/" } }
              sort: { fields: [name], order: ASC }
            ) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const backgrounds = data.backgrounds.edges
          const slickSettings = {
            autoplaySpeed: 1000,
            fade : true,
            pauseOnHover : false,
            pauseOnDotsHover : true,
          }
          return (
            <Carousel autoplay {...slickSettings}>
              {content.map((innerContent, index) => (
                <Slide
                  background={backgrounds[`${index}`]}
                  content={innerContent}
                  key={`slide${index}`}
                />
              ))}
            </Carousel>
          )
        }}
      />
    )
  }
}
