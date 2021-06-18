import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Grid } from "../components/grid"
import Button from "../components/button"
import HeroWrapper from "../components/hero-wrapper"
import Stargazers from "../components/stargazers"

const PageTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "Title"
  const page = data.mdx

  return (
    <Layout location={location} title={siteTitle} headerColor="light">
      <Seo
        title={page.frontmatter.title}
        description={page.frontmatter.description || "Description"}
      />

      <HeroWrapper bg="light">
        <Grid lg={2}>
          <div className="xl:pl-12">
            <h1 className="pr-12 xl:pr-36 2xl:pr-48">
              {page.frontmatter.title}
            </h1>

            <p className="pr-12 text-xl xl:pr-36 2xl:pr-48">
              {page.frontmatter.description}
            </p>

            <Button
              to="/"
              type="primary"
              label="Documentation"
              className="mb-8 mt-8"
            />
          </div>

          <div className="relative flex py-24 justify-end lg:justify-center lg:py-0">
            <GatsbyImage
              image={page.frontmatter.image.childImageSharp.gatsbyImageData}
              alt={page.frontmatter.title}
              className="absolute -top-6 lg:-top-12 w-4/5 lg:w-3/5"
            />
          </div>
        </Grid>
      </HeroWrapper>

      <Container className="pb-40 mt-6 prose prose-xl lg:-mt-12 lg:pb-48 xl:-mt-24">
        <div className="relative z-10 lg:text-right h-10">
          <Stargazers repo={page.frontmatter.repo} />
        </div>

        <MDXRenderer>{page.body}</MDXRenderer>
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
        title
        description
        repo
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
