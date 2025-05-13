import React from "react"
import { isMobile } from "react-device-detect"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ArgoHero from "../../svg/argo-hero.svg"

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

  return (
    <React.Fragment>
      <div className="absolute w-full h-full transform -translate-y-64 lg:translate-y-32 translate-x-12 rounded-full filter blur-3xl opacity-30 bg-[#280e6b]"></div>
      <ArgoHero className={className} />
    </React.Fragment>
  )
}

export default HeroGraphic
