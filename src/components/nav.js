import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavItem from "./nav-item"

const Nav = ({ isOpen }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            navigation {
              title
              url
            }
          }
        }
      }
    `
  )

  return (
    <nav className="ml-auto">
      <ul className="flex space-x-4">
        {site.siteMetadata.navigation.map(link => (
          <NavItem key={link.title} title={link.title} url={link.url} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav
