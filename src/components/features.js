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
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(features)/" } }
          sort: { order: ASC, fields: frontmatter___order }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                repo
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 800
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
      {query.allMarkdownRemark.edges.map((item, index) => {
        return (
          <Feature
            key={item.node.frontmatter.title}
            alignY="center"
            className="my-4"
            imgSide={index % 2 !== 0 ? "top-right" : ""}
            image={
              <GatsbyImage
                image={
                  item.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                alt={item.node.frontmatter.title}
              />
            }>
            <FeatureTitle>{item.node.frontmatter.title}</FeatureTitle>

            <Stargazers repo={item.node.frontmatter.repo} className="mb-8" />

            <FeatureDescription>
              {item.node.frontmatter.description}
            </FeatureDescription>

            <Button
              to="/"
              type="primary"
              label="Quick Start"
              className="mt-8"
            />
          </Feature>
        )
      })}
    </>
  )
}

export default Features
