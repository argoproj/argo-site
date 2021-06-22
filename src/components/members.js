import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardMember from "./card-member"

const Members = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(members)/" } }
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

  const allMembers = query.allMarkdownRemark.edges
  const [members, setMembers] = React.useState(allMembers.slice(0, 23))

  return (
    <>
      {members.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <CardMember
              to={item.node.frontmatter.site}
              title={item.node.frontmatter.title}
              logoSrc={item.node.frontmatter.logo?.publicURL}
            />

            {index === members.length - 1 &&
              allMembers.length !== members.length && (
                <button
                  onClick={() => setMembers(allMembers)}
                  className="flex justify-center items-center text-primary bg-gradient-to-tl from-primary-200 to-transparent rounded-xl transition-shadow duration-200 hover:shadow-primary">
                  <div className="px-4 font-bold text-2xl">
                    See all {allMembers.length}
                  </div>
                </button>
              )}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Members
