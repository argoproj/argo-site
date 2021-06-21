import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
                      src={item.node.frontmatter.logo?.publicURL}
                      alt={item.node.frontmatter.title}
                      title={item.node.frontmatter.title}
                      className="absolute h-auto max-w-9/12"
                    />
                  </div>
                </div>
              </a>
            </div>

            {index === members.length - 1 &&
              allMembers.length !== members.length && (
                <button
                  onClick={() => setMembers(allMembers)}
                  className="flex justify-center items-center text-primary bg-primary bg-opacity-20 rounded-xl hover:shadow-xl">
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
