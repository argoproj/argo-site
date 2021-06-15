import * as React from "react"
import { Link } from "gatsby"

import Title from "./title"
import NavToggler from "./nav-toggler"
import Nav from "./nav"
import Logo from "../svg/logo.svg"

const Header = () => {
  const [isNavOpen, setisNavOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 py-4 w-full">
      <div className="container flex items-center">
        <Link to="/">
          <span className="sr-only">
            <Title />
          </span>

          <Logo className="h-8 w-auto lg:h-10 text-light" />
        </Link>

        <Nav isOpen={isNavOpen} />

        <NavToggler
          onClick={() => setisNavOpen(!isNavOpen)}
          isOpen={isNavOpen}
        />
      </div>
    </header>
  )
}

export default Header
