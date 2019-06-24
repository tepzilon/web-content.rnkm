import React from 'react'
import { graphql } from 'gatsby'
import BaanInfo from '../components/baanInfo/baanInfo'
import Layout from '../components/layout'
import {getResponsive} from '../shared/js/responsive'

const baan = ({data}) => {
  const {nameURL} = data.allSitePage.edges[0].node.context
  //Replace nameURL's each metacharacter to a character with regex syntax.
  const regexURL = nameURL.replace(/[\^$.|?*+(){}]/g, (symbol) => `\\${symbol}` )
  const bundle = {
    ...data.allSitePage.edges[0].node.context,
    //Fetch image files with according to each baan.
    //For example, the baan with url 'abcdef' will match all image files with prefix 'abcdef' (eg. 'abcdef.xxx.png').
    coverImage: data.coverFiles.edges.filter((image) => (
                  new RegExp(`^${regexURL}.+cover1$`).test(image.node.name))
                )[0].node.childImageSharp.fluid,
    logoImage: data.logoFiles.edges.filter((image) => (
                new RegExp(`^${regexURL}.+logo.big1$`).test(image.node.name))
              )[0].node.childImageSharp.fluid
  }
  const responsive = getResponsive();
  return (
    <Layout device={responsive.getDevice()} title="ข้อมูลบ้าน" theme="blue">
      <BaanInfo bundle={bundle} device={responsive.getDevice()}/>
    </Layout>
  )
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
            slogan
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

