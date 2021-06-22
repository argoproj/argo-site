import React from "react"
import { gsap } from "../plugins/gsap"
import { ScrollTrigger } from "../plugins/gsap/ScrollTrigger"
import ArgoHero from "../svg/argo-hero.svg"

gsap.registerPlugin(ScrollTrigger)

const HeroGraphic = ({ className }) => {
  React.useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, paused: true })

    tl.fromTo(
      "#argoHero",
      { y: 0 },
      { y: 15, yoyo: true, duration: 4, repeat: -1, ease: "sine.inOut" },
      0
    )

      .fromTo(
        "#argoFire",
        {
          y: 0,
        },
        {
          y: -30,
          yoyo: true,
          repeat: -1,
          ease: "steps (12)",
        },
        0
      )

      .fromTo(
        ".argolines",
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
  }, [])

  return <ArgoHero className={className} />
}

export default HeroGraphic
