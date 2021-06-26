import * as React from "react"
import { gsap } from "../../plugins/gsap"
import { DrawSVGPlugin } from "../../plugins/gsap/DrawSVGPlugin"
import { ScrollTrigger } from "../../plugins/gsap/ScrollTrigger"
import Pipeslines from "../../svg/pipes.svg"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

const Pipes = ({ className }) => {
  const [target, setTarget] = React.useState(null)
  const targetRef = React.createRef()

  React.useEffect(() => {
    setTarget(targetRef.current)

    if (target) {
      const items = target.querySelectorAll("path")
      const tl = gsap.timeline({ paused: true })

      tl.fromTo(
        items,
        {
          drawSVG: "50% 50%",
          opacity: 0,
        },
        {
          drawSVG: "100%",
          duration: 2,
          ease: "expo.out",
          opacity: 0.2,
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
