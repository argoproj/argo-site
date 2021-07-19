import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid, Container } from "../components/ui/grid"
import FeaturedMembers from "../components/featured-members"
import Button from "../components/ui/button"
import Members from "../components/members"
import Maintainers from "../components/maintainers"
import Features from "../components/features"
import HeroWrapper from "../components/ui/hero-wrapper"
import HeartIcon from "../svg/heart.svg"
import Pipes from "../components/ui/pipes"
import ArgoHero from "../components/ui/argo-hero"
import thumbnail from "../images/thumbnails/home.png"

const IndexPage = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
            }
          }
        }
      }
    `
  )

  return (
    <Layout location={location}>
      <Seo
        title="Home"
        description="Open source Kubernetes native workflows, events, CI and CD"
        url={location.href}
        image={thumbnail}
      />

      <HeroWrapper bg="dark">
        <Grid lg={2} alignY="center">
          <div className="relative z-10 text-white">
            <h1 className="pr-12 xl:pr-12 text-5xl lg:text-7xl 2xl:pr-0 2xl:text-8xl">
              Get More Done with{" "}
              <span className="text-primary">Kubernetes</span>
            </h1>

            <p className="text-2xl md:pr-12 xl:pr-36 2xl:pr-48">
              Open source tools for Kubernetes to run workflows, manage
              clusters, and do GitOps right.
            </p>

            <div className="mt-8 space-y-4 md:mt-8 md:space-x-4 md:space-y-0">
              <Button
                to={site.siteMetadata.social.github}
                type="primary"
                label="View on GitHub"
              />
            </div>
          </div>

          <div className="relative z-0 mt-12">
            <Pipes className="absolute top-1/2 left-1/2 w-8/12 max-w-full transform rotate-90 -translate-x-1/2 -translate-y-1/2" />
            <ArgoHero className="relative z-10 block mx-auto w-40 h-auto max-w-full lg:mt-12 lg:w-52 2xl:w-72" />
          </div>
        </Grid>

        <FeaturedMembers className="lg:mt-16 2xl:mt-40" />
      </HeroWrapper>

      <Container className="mt-12">
        <h2 className="text-center lg:mb-24">
          Open Source <span className="text-primary">Tools</span>
        </h2>

        <Features />
      </Container>

      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full max-h-none -z-1 bg-light transform -skew-y-6 origin-full-0 overflow-hidden"></div>

        <Container className="pt-[calc(calc(calc(100vw-0px)*0.05)+4rem)] lg:pt-[calc(calc(calc(100vw-0px)*0.05)+9rem)]">
          <h2 className="text-center">
            Join the growing <span className="text-primary">community</span>
          </h2>

          <div className="pt-4 pb-24 md:pb-32 md:pt-10">
            <Grid xs={2} sm={3} lg={4} xl={6}>
              <Members />
            </Grid>
          </div>

          <h2 className="text-2xl text-center">
            Maintained with{" "}
            <HeartIcon className="inline-block -mt-px text-primary" /> by:
          </h2>

          <div className="pt-4 pb-40 lg:pb-48">
            <Maintainers />

            <div className="mt-8 space-y-4 text-center md:space-x-4 md:space-y-0">
              <Button
                to={site.siteMetadata.social.github}
                type="primary"
                label="View on GitHub"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
