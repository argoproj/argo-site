import React from "react"
import { gsap } from "../plugins/gsap"
import { ScrollTrigger } from "../plugins/gsap/ScrollTrigger"
import { isMobile } from "react-device-detect"
import ArgoHero from "../svg/argo-hero.svg"

gsap.registerPlugin(ScrollTrigger)

const HeroGraphic = ({ className }) => {
  React.useEffect(() => {
    if (!isMobile) {
      const tl = gsap.timeline({ repeat: -1, paused: true })

      tl.fromTo(
        ".argoel",
        {
          y: 0,
        },
        {
          y: -10,
          yoyo: true,
          repeat: -1,
          duration: 1,
          ease: "none",
          opacity: 0.2,
          stagger: {
            each: 0.3,
            from: "random",
            yoyo: true,
            repeat: -1,
          },
        },
        0
      )

      // Only plays when is in the viewport.
      ScrollTrigger.create({
        trigger: "#argoHero",
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      })
    }
  }, [])

  return <ArgoHero className={className} />
}

export default HeroGraphic
