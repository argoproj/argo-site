import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Grid } from "../components/ui/grid"
import Button from "../components/ui/button"
import HeroWrapper from "../components/ui/hero-wrapper"
import Stargazers from "../components/ui/stargazers"
import WorkflowsSvg from "../svg/workflows.svg"
import EventsSvg from "../svg/events.svg"
import RolloutsSvg from "../svg/rollouts.svg"
import CdSvg from "../svg/gitops-cd.svg"
import YoutubeEmbed from "../components/ui/youtube-embed"

const PageTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "Title"
  const page = data.mdx
  const shortcodes = { Link, YoutubeEmbed }

  return (
    <Layout location={location} title={siteTitle} headerColor="light">
      <Seo
        title={page.frontmatter.title}
        description={page.frontmatter.description || "Description"}
        url={location.href}
        image={page.frontmatter.thumbnail.publicURL}
      />

      <HeroWrapper bg="light" pipes>
        <Grid lg={2}>
          <div className="xl:pl-12">
            <h1 className="pr-12 xl:pr-36 2xl:pr-48">
              {page.frontmatter.title}
            </h1>

            <p className="pr-12 text-xl xl:pr-36 2xl:pr-48">
              {page.frontmatter.description}
            </p>

            <Button
              to={page.frontmatter?.docs}
              type="primary"
              label="Documentation"
              className="mb-8 mt-8"
            />
          </div>

          <div className="relative flex py-24 justify-end lg:py-0 lg:justify-center">
            {page.frontmatter.order === 1 && (
              <WorkflowsSvg className="absolute -bottom-14 lg:-bottom-24 h-auto w-80 max-w-full md:w-3/5 lg:w-4/5 xl:w-3/6" />
            )}
            {page.frontmatter.order === 2 && (
              <CdSvg className="absolute -bottom-16 lg:-bottom-32 h-auto w-64 max-w-full md:w-2/5 lg:w-4/5 xl:w-3/6" />
            )}
            {page.frontmatter.order === 3 && (
              <RolloutsSvg className="absolute -bottom-14 lg:-bottom-28 h-auto w-48 max-w-full md:w-2/5 lg:w-3/5 xl:w-2/5" />
            )}
            {page.frontmatter.order === 4 && (
              <EventsSvg className="absolute -bottom-10 lg:-bottom-24 h-auto w-48 max-w-full md:w-2/6 lg:w-2/5 xl:w-2/6" />
            )}
          </div>
        </Grid>
      </HeroWrapper>

      <Container className="pb-40 mt-8 prose prose-xl lg:-mt-8 xl:-mt-12 lg:pb-48 2xl:-mt-20">
        <div className="relative z-10 lg:text-right h-10">
          <Stargazers repo={page.frontmatter.repo} />
        </div>

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{page.body}</MDXRenderer>
        </MDXProvider>

        <div className="mt-6 text-center space-y-4 md:space-x-4 md:space-y-0">
          <Button
            to={page.frontmatter?.docs}
            type="primary"
            label="View Docs"
            className="w-full mt-8 md:w-auto"
          />

          <Button
            to={page.frontmatter?.quickstart}
            type="secondary"
            label="Get Started"
            className="w-full mt-8 md:w-auto"
          />
        </div>
      </Container>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        order
        title
        description
        repo
        docs
        quickstart
        thumbnail {
          publicURL
        }
      }
    }
  }
`
