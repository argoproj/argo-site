import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import Title from "./title"
import NavToggler from "./ui/nav-toggler"
import Nav from "./nav"
import Logo from "../svg/logo.svg"

const Header = ({ color }) => {
  const [isNavOpen, setisNavOpen] = React.useState(false)

  const headerClass = classNames({
    "sticky -top-1 left-0 z-50 py-3 w-full backdrop-filter backdrop-blur-lg backdrop-saturate-150 lg:py-5": true,
    "bg-light": color === "light",
    "bg-[#110e50]": color !== "light",
  })

  const logoClass = classNames({
    "h-8 w-auto lg:h-10": true,
    "text-dark": color === "light",
    "text-light": color !== "light",
  })

  return (

    <React.Fragment>

      <div className="announcement-banner bg-[#302871] py-3">
        <a href="https://argoproj.github.io/argocon21/">
          Join us at ArgoCon '21 in San Francisco on Dec 8th
          <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fill-rule="evenodd">
            <path class="HoverArrow__linePath" d="M0 5h7"></path>
            <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
            </g>
          </svg>
        </a>
      </div>

      <header className={headerClass}>
        <div className="container flex items-center">
          <Link to="/">
            <span className="sr-only">
              <Title />
            </span>

            <Logo className={logoClass} />
          </Link>

          <Nav isOpen={isNavOpen} color={color} />

          <NavToggler
            onClick={() => setisNavOpen(!isNavOpen)}
            isOpen={isNavOpen}
            color={color}
          />
        </div>
      </header>

    </React.Fragment>
  )
}

export default Header