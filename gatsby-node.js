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
          allArticlesJson(filter: { group: { eq: "herren" } }) {
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
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  urlPath
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

        // Create men pages.
        const items = data.allArticlesJson.edges
        const ArticleTemplate = path.resolve(`src/templates/Article/index.js`)
        console.log('Creating pages for articles...')
        each(items, ({ node }) => {
          const descriptionData = data.allMarkdownRemark.edges.find(markdown => {
            return markdown.node && markdown.node.frontmatter && markdown.node.frontmatter.urlPath === node.urlPath
          })
          each(node.variations, variation => {
            createPage({
              path: '/men/' + node.urlPath + '/' + variation.article,
              component: ArticleTemplate,
              context: {
                pathRoot: '/men/',
                articleNumber: variation.article,
                descriptionData,
              },
            })
          })
        })
      })
    )

    resolve(
      graphql(`
        {
          allArticlesJson(filter: { group: { eq: "frauen" } }) {
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
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  urlPath
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

        // Create women pages.
        const items = data.allArticlesJson.edges
        const ArticleTemplate = path.resolve(`src/templates/Article/index.js`)
        console.log('Creating pages for women...')
        each(items, ({ node }) => {
          const descriptionData = data.allMarkdownRemark.edges.find(markdown => {
            return markdown.node && markdown.node.frontmatter && markdown.node.frontmatter.urlPath === node.urlPath
          })
          each(node.variations, variation => {
            createPage({
              path: '/' + node.urlPath + '/' + variation.article,
              component: ArticleTemplate,
              context: {
                pathRoot: '/',
                articleNumber: variation.article,
                descriptionData,
              },
            })
          })
        })
      })
    )

    resolve(
      graphql(`
        {
          allArticlesJson(filter: { group: { eq: "haushalt" } }) {
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
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  urlPath
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

        // Create bags pages.
        const items = data.allArticlesJson.edges
        const ArticleTemplate = path.resolve(`src/templates/Article/index.js`)
        console.log('Creating pages for home...')
        each(items, ({ node }) => {
          const descriptionData = data.allMarkdownRemark.edges.find(markdown => {
            return markdown.node && markdown.node.frontmatter && markdown.node.frontmatter.urlPath === node.urlPath
          })
          each(node.variations, variation => {
            createPage({
              path: '/home/' + node.urlPath + '/' + variation.article,
              component: ArticleTemplate,
              context: {
                pathRoot: '/home/',
                articleNumber: variation.article,
                descriptionData,
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
