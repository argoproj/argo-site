import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Grid, Container } from "../../components/ui/grid"
import HeroWrapper from "../../components/ui/hero-wrapper"
import SlackSvg from "../../svg/slack.svg"
import thumbnail from "../../images/thumbnails/home.png"

const IndexPage = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              slack {
                cncfLink
                channels {
                  name
                  link
                }
              }
            }
          }
        }
      }
    `
  )
  const cncfSlackLink = site.siteMetadata.social.slack.cncfLink
  const channels = site.siteMetadata.social.slack.channels

  const containerStyles = {
    marginTop: 68,
  }

  return (
    <Layout location={location} headerColor="light">
      <Seo
        title="Slack"
        description="Talk with us on the CNCF Slack"
        url={location.href}
        image={thumbnail}
      />

    <HeroWrapper bg="light" pipes>
        <Grid lg={2}>
          <div className="xl:pl-12">
            <h1 className="pr-12 xl:pr-36 2xl:pr-48">
              Slack
            </h1>

            <p className="pr-12 text-xl xl:pr-36 2xl:pr-48">
              Talk with us on the CNCF Slack
            </p>
          </div>

          <div className="relative flex py-24 justify-end lg:py-0 lg:justify-center">
            <SlackSvg className="absolute -bottom-14 lg:-bottom-24 h-auto w-40 max-w-full md:w-3/5 lg:w-2/5 xl:w-2/6" />
          </div>
        </Grid>
      </HeroWrapper>

      <Container className="pb-40 mt-8 prose prose-xl lg:-mt-8 xl:-mt-12 lg:pb-48 2xl:-mt-20">
        <p style={containerStyles}>If you have any questions you are always welcome in Argoproj channels on the CNCF Slack:</p>
        <ul>
            <li>Navigate to <a href={cncfSlackLink}>{cncfSlackLink}</a> and create your Slack account.</li>
            <li>Find us in one of the following channels and ask your question: {channels.map((channel, i) => (
                <span key={channel.link}>
                    {i !== 0 && <span>,</span>} <a href={channel.link}>#{channel.name}</a>
                </span>
            ))} </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default IndexPage
