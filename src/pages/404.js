import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle}/>
      <Container
        disableGutters
        maxWidth="string"
        sx={{
          maxWidth: "692px",
          pb: "6rem",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
      >
         <h1>404: Not Found</h1>
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
