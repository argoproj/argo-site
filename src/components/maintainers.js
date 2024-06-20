import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardMember from "./ui/card-member"

const Maintainers = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            internal: {
              contentFilePath: {
                regex: "/(members/codefresh|intuit|blackrock|redhat|akuity|pipekit)/"
              }
            }
          }
          sort: { frontmatter: { title: ASC } }
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
      {query.allMdx.edges.map(item => {
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
