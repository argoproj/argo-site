import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import FeatureItem from "../components/ui/feature-item"
import Stargazers from "../components/ui/stargazers"
import Button from "../components/ui/button"

const Features = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { internal: { contentFilePath: { regex: "/(content/pages)/" } } }
          sort: { frontmatter: { order: ASC } }
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
                      width: 850,
                      placeholder: BLURRED,
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
    <React.Fragment>
      {query.allMdx.edges.map((item, index) => {
        return (
          <FeatureItem
            key={item.node.frontmatter.title}
            alignY="center"
            className="my-12 text-center lg:my-0 lg:text-left"
            imgSide={index % 2 !== 0 ? "top-right" : ""}
            image={
              <GatsbyImage
                image={
                  item.node.frontmatter?.image.childImageSharp.gatsbyImageData
                }
                alt={item.node.frontmatter?.title}
                className="block mx-auto h-auto w-52 lg:w-auto lg:max-w-lg"
              />
            }>
            <h3 className="text-4xl md:text-6xl">
              {item.node.frontmatter?.title}
            </h3>

            <Stargazers
              repo={item.node.frontmatter?.repo}
              className="mb-4 md:mb-8"
            />

            <p className="text-lg lg:text-2xl">
              {item.node.frontmatter?.description}
            </p>

            <Button
              to={item.node?.fields?.slug}
              type="primary"
              label="Learn More"
              className="mt-8"
            />
          </FeatureItem>
        )
      })}
    </React.Fragment>
  )
}

export default Features
