import * as React from "react"
import { gsap } from "../plugins/gsap"
import { DrawSVGPlugin } from "../plugins/gsap/DrawSVGPlugin"
import { ScrollTrigger } from "../plugins/gsap/ScrollTrigger"
import Pipeslines from "../svg/pipes.svg"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

const Pipes = ({ className }) => {
  const [target, setTarget] = React.useState(null)
  const targetRef = React.createRef()

  React.useEffect(() => {
    setTarget(targetRef.current)

    if (target) {
      const items = target.querySelectorAll(".pipe")
      const tl = gsap.timeline({ repeat: -1, paused: true })

      tl.fromTo(
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

      // Only plays when is in the viewport.
      ScrollTrigger.create({
        trigger: target,
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      })
    }
  }, [target, targetRef])

  return (
    <div ref={targetRef} className="absolute top-0 left-0 h-full w-full">
      <Pipeslines className={className} />
    </div>
  )
}

export default Pipes
