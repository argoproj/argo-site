import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardMember from "./ui/card-member"

const Maintainers = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: {
              regex: "/(members/codefresh|intuit|blackrock|redhat|ubie)/"
            }
          }
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
      {query.allMarkdownRemark.edges.map(item => {
        return (
          <div
            className="w-1/2 py-1 px-1 lg:w-1/6"
            key={item.node.frontmatter?.title}>
            <CardMember
              to={item.node.frontmatter?.site}
              title={item.node.frontmatter?.title}
              logoSrc={item.node.frontmatter?.logo?.publicURL}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Maintainers
