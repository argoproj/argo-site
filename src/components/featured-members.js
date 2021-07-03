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
      <p className="mb-8 text-center text-primary font-bold">
        Trusted by
      </p>

      <div className="flex flex-wrap items-center justify-center">
        <Adobe className="h-12 w-auto mb-8 mx-4 md:mx-7" />
        <Nvidia className="h-10 w-auto mb-8 mx-4 md:mx-7" />
        <Tesla className="h-12 w-auto mb-8 mx-4 md:mx-7" />
        <Google className="h-7 w-auto mb-8 mx-4 md:mx-7" />
        <Redhat className="h-7 w-auto mb-8 mx-4 md:mx-7" />
        <Wordpress className="h-8 w-auto mb-8 mx-4 md:mx-7" />
        <Ticketmaster className="h-4 w-auto mb-8 mx-4 md:mx-7" />
      </div>
    </div>
  )
}

export default FeaturedMembers
