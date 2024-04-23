import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardMember from "../components/ui/card-member"
import { Grid, Container } from "../components/ui/grid"
import thumbnail from "../images/thumbnails/home.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Trainings = ({ location }) => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(content/trainings)/" } }
          sort: { order: ASC, fields: frontmatter___title }
        ) {
          edges {
            node {
              frontmatter {
                title
                site
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  )

  const allTrainings = query.allMarkdownRemark.edges
  const [trainings, setTrainings] = React.useState(allTrainings.slice(0, 23))

  return (
    <Layout location={location}>
        <Seo
        title="training and certification"
        description="Become a professional by getting certified in GitOps"
        url={location.href}
        image={thumbnail}
        />
        <div className="bg-light">
        <Container className="pt-[calc(calc(calc(100vw-0px)*0.05)+4rem)] pb-[calc(calc(calc(100vw-0px)*0.05)+4rem)] lg:pt-[calc(calc(calc(100vw-0px)*0.05)+9rem)]">
        <h2 className="text-center">
            Trainings & Certifications
        </h2>
        <div className="pt-4 pb-24 md:pb-32 md:pt-10">
        <Grid xs={1} sm={2} lg={2} xl={3}> 
        {trainings.map((item, index) => {
            return (
            <React.Fragment key={index}>
                <CardMember
                to={item.node.frontmatter?.site}
                title={item.node.frontmatter?.title}
                logoSrc={item.node.frontmatter?.logo?.publicURL}
                />

                {index === trainings.length - 1 &&
                allTrainings.length !== trainings.length && (
                    <button
                    onClick={() => setTrainings(allTrainings)}
                    className="flex justify-center items-center text-primary bg-gradient-to-tl from-primary/20 to-transparent rounded-xl transition-shadow duration-200 hover:shadow-primary">
                    <div className="px-4 font-bold text-2xl">
                        See all {allTrainings.length}
                    </div>
                    </button>
                )}
            </React.Fragment>
            )
        })}
        </Grid>
        </div>
        </Container>
        </div>
    </Layout>
  )
}

export default Trainings
