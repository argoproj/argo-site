import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import classNames from "classnames"
import GithubIcon from "../svg/github.svg"
import SlackIcon from "../svg/slack.svg"

const Contribute = ({ size, color, className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
            }
          }
        }
      }
    `
  )

  const wrapperClass = classNames({
    "flex justify-center space-x-8 lg:space-x-4": true,
    [className]: className,
  })

  const anchorClass = classNames({
    "inline-block": true,
    "text-dark lg:text-white": color === "white",
    "lg:text-gray": color === "gray",
    "text-dark": color === "dark",
    "text-primary": color === "primary",
  })

  const iconClass = classNames({
    "w-auto": true,
    "h-8 lg:h-6": size === "sm",
    "h-8": size === "md",
    "h-10": size === "lg",
  })

  return (
    <div className={wrapperClass}>
      <a
        href={site.siteMetadata.social.github}
        aria-label="github"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on GitHub"
        className={anchorClass}>
        <GithubIcon className={iconClass} />
      </a>

      <Link to='/community/join-slack' className={anchorClass} activeClassName="!text-primary">
        <SlackIcon className={iconClass} />
      </Link>
    </div>
  )
}

export default Contribute
