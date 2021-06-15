import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid, Container } from "../components/grid"
import FeaturedMembers from "../components/featured-members"
import Button from "../components/button"
import Members from "../components/members"
import Maintainers from "../components/maintainers"
import Features from "../components/features"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo
        title="Home"
        description="Open source Kubernetes native workflows, events, CI and CD"
        // image={ thumbnail }
        url={location.href}
      />

      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full max-h-none -z-1 bg-gradient transform -skew-y-6 origin-0-0 overflow-hidden"></div>

        <Container>
          <div className="pt-32 section-padding-bottom">
            <Grid lg={2}>
              <div className="text-white xl:pr-32">
                <h1>
                  Get More Done with{" "}
                  <span className="text-primary">Kubernetes</span>
                </h1>

                <p>
                  Open source tools for Kubernetes to run workflows, manage
                  clusters, and do GitOps right.
                </p>

                <div className="mt-12 md:space-x-4">
                  <Button to="/" type="primary" label="Quick Start" />
                  <Button to="/" type="secondary" label="Vew on GitHub" />
                </div>
              </div>

              <div></div>
            </Grid>

            <FeaturedMembers className="mt-32" />
          </div>
        </Container>
      </div>

      <Container className="mt-12">
        <h2 className="text-center">
          Open Source <span className="text-primary">Tools</span>
        </h2>

        <Features />
      </Container>

      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full max-h-none -z-1 bg-light transform -skew-y-6 origin-full-0 overflow-hidden"></div>

        <Container className="section-padding-top">
          <h2 className="text-center">
            Join the growing <span className="text-primary">community</span>
          </h2>

          <div className="pt-10 pb-32">
            <Grid sm={2} md={3} lg={6}>
              <Members />
            </Grid>
          </div>

          <h2 className="text-2xl text-center">Maintained with by:</h2>

          <div className="pt-4 pb-32">
            <Maintainers />

            <div className="mt-8 space-x-4 text-center">
              <Button to="/" type="primary" label="Quick Start" />
              <Button to="/" type="secondary" label="Quick Start" />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
