import * as React from "react"
import classNames from "classnames"
import { Container } from "./grid"
import Pipes from "./pipes"

const HeroWrapper = ({ bg, children, pipes }) => {
  const bgClass = classNames({
    "absolute top-0 left-0 w-full h-full max-h-none -z-1 transform -skew-y-6 origin-0-0 overflow-hidden": true,
    "bg-gradient-dark": bg === "dark",
    "bg-light": bg === "light",
  })

  return (
    <div className="relative overflow-hidden">
      <div className={bgClass}>
        {pipes && (
          <div className="container relative h-full">
            <div className="absolute right-12 -bottom-12 h-44 w-full md:w-1/2 md:-bottom-12">
              <Pipes className="absolute top-1/2 left-1/2 max-w-full opacity-25 transform rotate-89 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}
      </div>

      <Container>
        <div className="pt-24 pb-[calc(calc(calc(100vw-0px)*0.05)+2rem)] lg:pt-32 lg:pb-[calc(calc(calc(100vw-0px)*0.05)+6rem)] 2xl:pt-40">
          {children}
        </div>
      </Container>
    </div>
  )
}

export default HeroWrapper
