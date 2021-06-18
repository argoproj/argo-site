import * as React from "react"
import classNames from "classnames"
import { Container } from "../components/grid"

const HeroWrapper = ({ bg, children }) => {
  const bgClass = classNames({
    "absolute top-0 left-0 w-full h-full max-h-none -z-1 transform -skew-y-6 origin-0-0 overflow-hidden": true,
    "bg-gradient": bg === "dark",
    "bg-light": bg === "light",
  })

  return (
    <div className="relative overflow-hidden">
      <div className={bgClass}></div>

      <Container>
        <div className="pt-24 section-padding-bottom lg:pt-32 2xl:pt-40">
          {children}
        </div>
      </Container>
    </div>
  )
}

export default HeroWrapper
