//กูจะเขียนแบบเรียบร้อยละ เริ่มจากไฟล์นี้ 5555+
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BaanInfo from '../components/baanInfo/baanInfo';
const baan = ({data}) => {
  const {nameURL} = data.allSitePage.edges[0].node.context

  const bundle = {
    ...data.allSitePage.edges[0].node.context,
    //Fetch image files with according to each baan.
    //For example, the baan with url 'abcdef' will match all image files with prefix 'abcdef' (eg. 'abcdef.xxx.png').
    coverImage: data.coverFiles.edges.filter((image) => (
                  new RegExp(`^${nameURL}.+cover1$`).test(image.node.name))
                )[0].node.childImageSharp.fluid,
    logoImage: data.logoFiles.edges.filter((image) => (
                new RegExp(`^${nameURL}.+logo.big1$`).test(image.node.name))
              )[0].node.childImageSharp.fluid
  }

  return <BaanInfo bundle={bundle}/>
}
//Queries for each baan data from json and all baans' image
export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq : $path }}) {
      edges {
        node {
          context {
            nameURL
            nameTH
            description
            facebookURL
            twitterURL
            lineURL
            instagramURL
          }
        }
      }
    }
    coverFiles: allFile(filter:{
      relativePath:{
        regex: "/^baan\/cover/"
      },
      name:{
        regex:"/cover1/"
      }
    }){
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1080, maxHeight: 410) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    logoFiles: allFile(filter:{
      relativePath:{
        regex: "/^baan\/logo\/500px/"
      },
      name:{
        regex:"/logo.big1$/"
      }
    }){
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default baan

