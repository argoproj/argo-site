import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Feature from "../components/feature"
import FeatureTitle from "../components/feature-title"
import FeatureDescription from "../components/feature-description"
import Stargazers from "../components/stargazers"
import Button from "../components/button"

const Features = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(features)/" } }
          sort: { order: ASC, fields: frontmatter___order }
        ) {
          edges {
            node {
              fields {
                slug
              }
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
        }
      }
    `
  )

  return (
    <>
      {query.allMdx.edges.map((item, index) => {
        return (
          <Feature
            key={item.node.frontmatter.title}
            alignY="center"
            className="my-12 text-center lg:my-0 lg:text-left"
            imgSide={index % 2 !== 0 ? "top-right" : ""}
            image={
              <GatsbyImage
                image={
                  item.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                alt={item.node.frontmatter.title}
                className="block mx-auto h-auto w-52 lg:w-auto lg:max-w-lg"
              />
            }>
            <FeatureTitle>{item.node.frontmatter.title}</FeatureTitle>

            <Stargazers
              repo={item.node.frontmatter.repo}
              className="mb-4 md:mb-8"
            />

            <FeatureDescription>
              {item.node.frontmatter.description}
            </FeatureDescription>

            <Button
              to={item.node?.fields?.slug}
              type="primary"
              label="Learn More"
              className="mt-8"
            />
          </Feature>
        )
      })}
    </>
  )
}

export default Features
