const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Create slug field for MDX files.
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node, // Individual MDX node.
      value: value, // createFilePath returns a path with the leading "/".
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Templates
  const pageDefault = path.resolve(`./src/templates/page-default.js`)

  // Get all feture pages
  const result = await graphql(
    `
      query {
        allMdx(filter: { fileAbsolutePath: { regex: "/(features)/" } }) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const pages = result.data.allMdx.edges

  // Create pages
  // But only if there's at least one Page
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (pages.length > 0) {
    pages.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: pageDefault,
        context: {
          id: node.id,
        },
      })
    })
  }
}
