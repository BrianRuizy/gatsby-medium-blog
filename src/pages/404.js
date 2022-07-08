import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={"404: Not Found"}>
      <Seo title={siteTitle}/>
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          maxWidth: "692px",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
        
      >
        <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
      </Container>

    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
