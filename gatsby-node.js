const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      layout
                      path
                    }
                  }
                  extendedArticle: childExtendedArticlesJson {
                    urlPath
                    variations {
                      article
                    }
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        // Create blog posts & pages.
        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /posts/.test(node.name))
        each(posts, ({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PostTemplate,
          })
        })

        const pages = items.filter(({ node }) => /page/.test(node.name))
        each(pages, ({ node }) => {
          if (!node.remark) return
          const { name } = path.parse(node.path)
          const PageTemplate = path.resolve(node.path)
          createPage({
            path: name,
            component: PageTemplate,
          })
        })

        const extendedArticles = items.filter(({ node }) => /extendedArticles/.test(node.name))
        const ArticleTemplate = path.resolve(`src/templates/Article/index.js`)
        console.log('Creating pages for articles...')
        each(extendedArticles, ({ node }) => {
          if (!node.extendedArticle) return
          each(node.extendedArticle.variations, variation => {
            createPage({
              path: '/neue-art-des-feierns/' + node.extendedArticle.urlPath + '/' + variation.article,
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
