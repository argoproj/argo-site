const fs = require("fs")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const crdRedirects = require("./redirects/crd-redirects")
const { redirectHtml } = require("./redirects/redirect-html")

function createCrdRedirects({ createRedirect }) {
  crdRedirects.forEach(({ path: crdPath, url }) => {
    ;[`/${crdPath}`, `/${crdPath}/`].forEach(fromPath => {
      createRedirect({
        fromPath,
        toPath: url,
        isPermanent: true,
        redirectInBrowser: true,
      })
    })
  })
}

function writeCrdRedirectArtifacts({ reporter }) {
  const publicDir = path.join(process.cwd(), "public")
  const netlifyRedirects = []

  crdRedirects.forEach(({ path: crdPath, title, url }) => {
    const html = redirectHtml({ title, url })
    const outputDir = path.join(publicDir, crdPath)

    fs.mkdirSync(outputDir, { recursive: true })
    fs.writeFileSync(path.join(outputDir, "index.html"), html)

    netlifyRedirects.push(`/${crdPath}  ${url}  301`)
    netlifyRedirects.push(`/${crdPath}/  ${url}  301`)
  })

  fs.writeFileSync(path.join(publicDir, "_redirects"), `${netlifyRedirects.join("\n")}\n`)
  reporter.info(`Created ${crdRedirects.length} CRD redirect pages`)
}

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
  const { createPage, createRedirect } = actions

  createCrdRedirects({ createRedirect })

  // Templates
  const pageDefault = path.resolve(`./src/templates/page-default.js`)

  // Get all feture pages
  const result = await graphql(
    `
      query {
        allMdx(filter: { internal: { contentFilePath: { regex: "/(content/pages)/" } } }) {
          nodes {
            id
            fields {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const pages = result.data.allMdx.nodes

  // Create pages
  // But only if there's at least one Page
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (pages.length > 0) {
    pages.forEach(page => {
      createPage({
        path: page.fields.slug,
        component: `${pageDefault}?__contentFilePath=${page.internal.contentFilePath}`,
        context: {
          id: page.id,
        },
      })
    })
  }
}

exports.onPostBuild = ({ reporter }) => {
  writeCrdRedirectArtifacts({ reporter })
}
