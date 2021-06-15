import * as React from "react"
import axios from "axios"
import classNames from "classnames"

import StarIcon from "../svg/star.svg"
import GithubIcon from "../svg/github-outlined.svg"

const Stargazers = ({ repo, className }) => {
  const [stars, setStars] = React.useState(null)
  const [url, setUrl] = React.useState(null)

  React.useEffect(() => {
    async function getStargazers() {
      const endpoint = `https://api.github.com/repos/argoproj/${repo}`

      try {
        const res = await axios.get(endpoint)
        if (200 === res.status) {
          setStars(res.data.stargazers_count)
          setUrl(res.data.html_url)
        }
      } catch (err) {
        console.error(err.message)
      }
    }

    getStargazers()
  }, [setStars, repo])

  const wrapperClass = classNames({
    "flex items-center": true,
    [className]: className,
  })

  return (
    <>
      {url && (
        <a
          href={url}
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow us on GitHub"
          className="inline-block">
          <div className={wrapperClass}>
            <GithubIcon className="mr-2.5 h-4 w-auto" />
            <StarIcon className="mr-2 w-5 h-auto" />
            <span className="pt-0.5">{stars}</span>
          </div>
        </a>
      )}
    </>
  )
}

export default Stargazers
