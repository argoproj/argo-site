import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Grid } from "../components/grid"
import Button from "../components/button"
import HeroWrapper from "../components/hero-wrapper"
import Stargazers from "../components/stargazers"
import WorkflowsSvg from "../svg/workflows.svg"
import EventsSvg from "../svg/events.svg"
import RolloutsSvg from "../svg/rollouts.svg"
import CdSvg from "../svg/gitops-cd.svg"

const PageTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "Title"
  const page = data.mdx

  return (
    <Layout location={location} title={siteTitle} headerColor="light">
      <Seo
        title={page.frontmatter.title}
        description={page.frontmatter.description || "Description"}
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
              external
            />
          </div>

          <div className="relative flex py-24 justify-end lg:py-0 lg:justify-center lg:py-0">
            {page.frontmatter.order === 1 && (
              <WorkflowsSvg className="absolute -bottom-14 lg:-bottom-24 w-80 max-w-full md:w-3/5 lg:w-4/5 xl:w-3/5" />
            )}
            {page.frontmatter.order === 2 && (
              <CdSvg className="absolute -bottom-20 lg:-bottom-32 w-64 max-w-full md:w-3/5 lg:w-4/5 xl:w-3/5" />
            )}
            {page.frontmatter.order === 3 && (
              <RolloutsSvg className="absolute -bottom-14 lg:-bottom-24 w-54 max-w-full md:w-3/5 lg:w-4/5 xl:w-3/5" />
            )}
            {page.frontmatter.order === 4 && (
              <EventsSvg className="absolute -bottom-10 lg:-bottom-24 w-80 max-w-full md:w-3/5 lg:w-4/5 xl:w-3/5" />
            )}
          </div>
        </Grid>
      </HeroWrapper>

      <Container className="pb-40 mt-8 prose prose-xl lg:-mt-8 xl:-mt-12 lg:pb-48 2xl:-mt-20">
        <div className="relative z-10 lg:text-right h-10">
          <Stargazers repo={page.frontmatter.repo} />
        </div>

        <MDXRenderer>{page.body}</MDXRenderer>

        <div className="mt-6 text-center space-y-4 md:space-x-4 md:space-y-0 no-prose">
          <Button
            to={page.frontmatter?.docs}
            type="primary"
            label="View Docs"
            className="w-full mt-8 md:w-auto"
            external
          />

          <Button
            to={page.frontmatter?.quickstart}
            type="secondary"
            label="Get Started"
            className="w-full mt-8 md:w-auto"
            external
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
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
