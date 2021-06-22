import * as React from "react"
import { gsap } from "../plugins/gsap"
import { DrawSVGPlugin } from "../plugins/gsap/DrawSVGPlugin"
import Pipeslines from "../svg/pipes.svg"

gsap.registerPlugin(DrawSVGPlugin)

const Pipes = ({ className }) => {
  const [target, setTarget] = React.useState(null)
  const targetRef = React.createRef()

  React.useEffect(() => {
    setTarget(targetRef.current)

    if (target) {
      const items = target.querySelectorAll(".pipe")

      gsap.fromTo(
        items,
        {
          drawSVG: function (index) {
            return index % 2 === 0 ? "0% 60%" : "60% 100%"
          },
          opacity: 0,
        },
        {
          drawSVG: function (index) {
            return index % 2 === 0 ? "100% 100%" : "0% 0%"
          },
          duration: 1.5,
          ease: "none",
          opacity: 0.4,
          repeat: -1,
          stagger: {
            each: 0.2,
            from: "center",
            repeat: -1,
          },
        }
      )
    }
  }, [target, targetRef])

  return (
    <div ref={targetRef}>
      <Pipeslines className={className} />
    </div>
  )
}

export default Pipes
