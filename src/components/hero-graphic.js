import React from "react"
import { gsap } from "../plugins/gsap"
import { DrawSVGPlugin } from "../plugins/gsap/DrawSVGPlugin"
import ArgoHero from "../svg/argo-hero.svg"

gsap.registerPlugin(DrawSVGPlugin)

const HeroGraphic = ({ className }) => {
  React.useEffect(() => {
    gsap.fromTo(
      "#argoHero",
      { y: 0 },
      { y: 15, yoyo: true, duration: 4, repeat: -1, ease: "sine.inOut" }
    )

    gsap.fromTo(
      "#argoFire",
      {
        y: 0,
      },
      {
        y: -30,
        yoyo: true,
        repeat: -1,
        ease: "steps (12)",
      }
    )

    gsap.fromTo(
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
      }
    )
  }, [])

  return <ArgoHero className={className} />
}

export default HeroGraphic
