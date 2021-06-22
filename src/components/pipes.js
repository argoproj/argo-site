import * as React from "react"
import { gsap } from "../plugins/gsap"
import { DrawSVGPlugin } from "../plugins/gsap/DrawSVGPlugin"
import Pipeslines from "../svg/pipes.svg"

gsap.registerPlugin(DrawSVGPlugin)

const Pipes = ({ className }) => {
  React.useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })

    tl.fromTo(
      ".pipe",
      {
        drawSVG: function (index) {
          return index % 2 === 0 ? "0% 50%" : "50% 100%"
        },
        opacity: 0,
      },
      {
        drawSVG: function (index) {
          return index % 2 === 0 ? "100% 100%" : "0% 0%"
        },
        duration: 1.5,
        ease: "none",
        opacity: 0.7,
        stagger: {
          each: 0.2,
          from: "center",
          repeat: -1,
        },
      }
    )
    // .fromTo(
    //   ".pipe",
    //   { drawSVG: "0 100%" },
    //   {
    //     drawSVG: function (index) {
    //       console.log("🚀 ~ index", index)
    //       return index % 2 === 0 ? "100% 100%" : "0"
    //     },
    //     duration: 1,
    //     ease: "none",
    //     yoyo: true,
    //     stagger: {
    //       each: 0.1,
    //       from: "center",
    //       repeat: -1,
    //     },
    //   }
    // )
  }, [])

  return (
    <div>
      <Pipeslines className={className} />
    </div>
  )
}

export default Pipes
