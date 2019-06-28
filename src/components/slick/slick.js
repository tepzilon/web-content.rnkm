import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Carousel } from 'antd'
import Slide from './slide'
import './slick.scss'
import content from './slickContent'

export default class slick extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = React.createRef()
  }

  next() {
    this.carousel.next()
  }

  previous() {
    this.carousel.prev()
  }

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
            fade: true,
            pauseOnHover: false,
            pauseOnDotsHover: true,
          }
          return (
            <Carousel
            //   autoplay
              {...slickSettings}
              ref={node => (this.carousel = node)}
            >
              {content.map((innerContent, index) => (
                <Slide
                  background={backgrounds[`${index}`]}
                  content={innerContent}
                  next={this.next}
                  previous={this.previous}
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
