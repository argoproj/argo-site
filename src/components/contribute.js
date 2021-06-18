import * as React from "react"
import classNames from "classnames"
import GithubIcon from "../svg/github.svg"
import SlackIcon from "../svg/slack.svg"

const Contribute = ({ size, color, className }) => {
  const wrapperClass = classNames({
    "flex justify-center space-x-8 lg:space-x-4": true,
    [className]: className,
  })

  const anchorClass = classNames({
    "inline-block": true,
    "text-white": color === "white",
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
        href="/"
        aria-label="github"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on GitHub"
        className={anchorClass}>
        <GithubIcon className={iconClass} />
      </a>

      <a
        href="/"
        aria-label="slack"
        target="_blank"
        rel="noopener noreferrer"
        title="Join our Slack channel"
        className={anchorClass}>
        <SlackIcon className={iconClass} />
      </a>
    </div>
  )
}

export default Contribute
