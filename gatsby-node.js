const path = require('path')
const data = require('./src/assets/data/baan.json')

exports.onCreateWebpackConfig = ({ actions, stage, }) => {
  if (stage === 'build-javascript') {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const template = path.resolve('./src/templates/baan.js')
  data.forEach(baan => {
    let path = 'baan/' + baan.nameURL
    createPage({
      path,
      component: template,
      context: baan,
    })
  })

  const announceTemplate = path.resolve('./src/templates/announce.js')
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors)
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: announceTemplate,
        context: {},
      })
    })
  })
}