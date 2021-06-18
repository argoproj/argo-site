import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

const NavItem = ({ title, url, external, color }) => {
  const linkClass = classNames({
    "font-bold": true,
    "text-white lg:text-dark hover:text-primary": color === "light",
    "text-white hover:text-primary": color !== "light",
  })

  return (
    <li>
      {external && (
        <a href={url} className={linkClass}>
          {" "}
          {title}{" "}
        </a>
      )}

      {!external && (
        <Link to={url} className={linkClass} activeClassName="nav-item--active">
          {title}
        </Link>
      )}
    </li>
  )
}

export default NavItem
