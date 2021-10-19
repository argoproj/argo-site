import * as React from "react"
import classNames from "classnames"
import { Container, Grid } from "./grid"
import Pipes from "./pipes"

const FeatureItem = ({
  id,
  elRef,
  imgSide,
  alignY,
  alignX,
  className,
  children,
  image,
}) => {
  const sectionClasses = classNames({
    "feature relative z-10 overflow-hidden xl:px-24 2xl:px-40": true,
    [className]: className,
  })

  const imgSideClasses = classNames({
    relative: true,
    "order-first": imgSide === "top-left",
    "order-first lg:order-last": imgSide === "top-right",
    "mt-10 lg:mt-0 lg:order-first": imgSide === "down-left",
    "mt-10 lg:mt-0": imgSide === "down-right",
  })

  const contentClasses = classNames({
    "lg:px-12": true,
    "lg:pl-8 xl:pl-16": imgSide === "top-left" || imgSide === "down-left",
    "lg:pr-8 xl:pr-16": imgSide === "top-right" || imgSide === "down-right",
  })

  return (
    <section ref={elRef} id={id} className={sectionClasses}>
      <Container>
        <Grid lg={2} alignY={alignY} alignX={alignX}>
          <div className={imgSideClasses}>
            <Pipes className="absolute top-1/2 left-1/2 w-auto opacity-40 h-full transform -rotate-36 -translate-x-1/2 -translate-y-1/2 lg:h-auto lg:w-3/5" />
            {image}
          </div>
          <div className={contentClasses}>{children}</div>
        </Grid>
      </Container>
    </section>
  )
}

export default FeatureItem
