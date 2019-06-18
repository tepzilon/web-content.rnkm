const path = require('path')
const data = require('./src/assets/data/baan.json')

exports.createPages = ({actions}) => {
  const {createPage} = actions;
  const template = path.resolve('./src/templates/baan.js')

  data.forEach(baan => {
    let path = 'gallery/'+baan.nameURL
    createPage({
      path,
      component: template,
      context: baan,
    })
  })
}