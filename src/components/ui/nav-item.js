import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { linkRegex } from "../../helpers"

const NavItem = ({ title, to, color }) => {
  const regex = linkRegex()
  const linkClass = classNames({
    "lg:font-bold": true,
    "text-dark hover:text-primary": color === "light",
    "text-dark lg:text-white hover:text-primary": color !== "light",
  })

  return (
    <li className="border-t border-light py-3 lg:py-0 lg:border-none">
      {regex.test(to) && (
        <a href={to} className={linkClass}>
          {" "}
          {title}{" "}
        </a>
      )}

      {!regex.test(to) && (
        <Link to={to} className={linkClass} activeClassName="!text-primary">
          {title}
        </Link>
      )}
    </li>
  )
}

export default NavItem
