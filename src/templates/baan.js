import React from 'react'
import { graphql } from 'gatsby'
import BaanInfo from '../components/baanInfo/baanInfo'
import Layout from '../components/layout'
import {getResponsive} from '../shared/js/responsive'
import { Helmet } from 'react-helmet'

const baan = ({data}) => {
  const {nameURL} = data.allSitePage.edges[0].node.context
  //Replace nameURL's each metacharacter to a character with regex syntax.
  const regexURL = nameURL.replace(/[\^$.|?*+(){}]/g, (symbol) => `\\${symbol}` )

  const coverQuery = data.coverFiles.edges.filter((image) => (
    new RegExp(`^${regexURL}.+cover1$`).test(image.node.name))
  )[0].node

  const coverImageFluid = coverQuery.childImageSharp.fluid
  const coverPublicURL = coverQuery.publicURL

  const bundle = {
    ...data.allSitePage.edges[0].node.context,
    //Fetch image files with according to each baan.
    //For example, the baan with url 'abcdef' will match all image files with prefix 'abcdef' (eg. 'abcdef.xxx.png').
    coverImage: coverImageFluid,
    logoImage: data.logoFiles.edges.filter((image) => (
                new RegExp(`^${regexURL}.+logo.big1$`).test(image.node.name))
              )[0].node.childImageSharp.fluid
  }
  const responsive = getResponsive();
  return (
    <div>
      <Layout device={responsive.getDevice()} title={`Baan ${bundle.nameEN}`} theme="pink">
        <BaanInfo bundle={bundle} device={responsive.getDevice()}/>
      </Layout>
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`บ้าน${bundle.nameTH} - Baan ${bundle.nameEN}`} />
        <meta property="og:description" content={bundle.slogan} />
        <meta property="og:image" content={coverPublicURL} />

        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3&appId=1613395845374285&autoLogAppEvents=1"></script>
      </Helmet>
    </div>
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
            nameEN
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
          publicURL
          childImageSharp {
            fluid(maxWidth: 1080, maxHeight: 410) {
              ...GatsbyImageSharpFluid_withWebp
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
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default baan

