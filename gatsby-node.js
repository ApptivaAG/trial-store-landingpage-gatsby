const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allArticlesJson {
            edges {
              node {
                urlPath
                variations {
                  name
                  article
                }
              }
            }
          }
        }
      `).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        // Create article pages pages.
        const items = data.allArticlesJson.edges
        const ArticleTemplate = path.resolve(`src/templates/Article/index.js`)
        console.log('Creating pages for articles...')
        each(items, ({ node }) => {
          each(node.variations, variation => {
            createPage({
              path: '/neue-art-des-feierns/' + node.urlPath + '/' + variation.article,
              component: ArticleTemplate,
              context: {
                pathRoot: '/neue-art-des-feierns/',
                articleNumber: variation.article,
              },
            })
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
