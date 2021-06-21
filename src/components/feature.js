import * as React from "react"
import classNames from "classnames"
import { Container, Grid } from "./grid"

const Feature = ({
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
    "feature relative z-10 xl:px-24 2xl:px-40": true,
    [className]: className,
  })

  // const imgClasses = classNames({
  //   "w-full mb-10 rounded-xl lg:mb-0": true,
  // })

  const imgSideClasses = classNames({
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
          <div className={imgSideClasses}>{image}</div>
          <div className={contentClasses}>{children}</div>
        </Grid>
      </Container>
    </section>
  )
}

export default Feature
