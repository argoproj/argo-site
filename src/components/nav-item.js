import * as React from "react"
import { Link } from "gatsby"

const NavItem = ({ title, url, type }) => {
  return (
    <li className="py-2 lg:px-0 lg:mx-3 lg:mb-0">
      {type ? (
        <a href={url} className="text-white hover:text-primary">
          {title}
        </a>
      ) : (
        <Link
          to={url}
          className="text-white hover:text-primary"
          activeClassName="nav-item-active">
          {title}
        </Link>
      )}
    </li>
  )
}

export default NavItem
