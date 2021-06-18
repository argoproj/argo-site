import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Maintainers = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(maintainers)/" } }
          sort: { order: ASC, fields: frontmatter___title }
        ) {
          edges {
            node {
              frontmatter {
                title
                site
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="flex flex-wrap justify-center -mx-1">
      {query.allMarkdownRemark.edges.map((item, index) => {
        return (
          <div
            className="w-1/2 py-1 px-1 lg:w-1/6"
            key={item.node.frontmatter.title}>
            <div className="bg-white rounded-xl transition-shadow duration-200 group hover:shadow-lg">
              <a
                href={item.node.frontmatter.site}
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <div className="py-2 text-gray text-center text-sm border-b-2 border-light transition-colors duration-200 group-hover:text-primary">
                  {item.node.frontmatter.title}
                </div>

                <div className="aspect-w-4 aspect-h-3">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.node.frontmatter.logo.publicURL}
                      alt={item.node.frontmatter.title}
                      title={item.node.frontmatter.title}
                      className="absolute w-auto h-auto max-w-full max-h-16"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Maintainers
