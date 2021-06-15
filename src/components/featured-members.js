import * as React from "react"
import classNames from "classnames"

import Adobe from "../svg/featured/adobe.svg"
import Nvidia from "../svg/featured/nvidia.svg"
import Tesla from "../svg/featured/tesla.svg"
import Google from "../svg/featured/google.svg"
import Redhat from "../svg/featured/redhat.svg"
import Wordpress from "../svg/featured/wordpress.svg"
import Ticketmaster from "../svg/featured/ticketmaster.svg"

const FeaturedMembers = ({ className }) => {
  const wrapperClass = classNames({
    "max-w-6xl mx-auto": true,
    [className]: className,
  })

  return (
    <div className={wrapperClass}>
      <p className="mb-8 text-center text-primary">
        We are trusted by the best in the world
      </p>

      <div className="flex flex-wrap items-center justify-center space-x-10 lg:space-x-12 xl:space-x-16">
        <Adobe className="h-12 w-auto mb-8" />
        <Nvidia className="h-10 w-auto mb-8" />
        <Tesla className="h-12 w-auto mb-8" />
        <Google className="h-7 w-auto mb-8" />
        <Redhat className="h-7 w-auto mb-8" />
        <Wordpress className="h-8 w-auto mb-8" />
        <Ticketmaster className="h-4 w-auto mb-8" />
      </div>
    </div>
  )
}

export default FeaturedMembers
