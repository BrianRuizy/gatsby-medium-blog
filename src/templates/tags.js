import React from "react"
import PropTypes from "prop-types"

import Post from "../templates/post"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Components
import { Link, graphql } from "gatsby"
import MuiLink from "@mui/material/Link"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout
      location={tag}
      title={
        <>
          <IconButton
            size="small"
            sx={{
              mr: 1,
              background: "#f1f1f1",
              color: "text.primary",
            }}
          >
            <LocalOfferIcon fontSize="small" />
          </IconButton>
          {tag}
        </>
      }
    >
      <Seo title={`${tag} (${totalCount})`} />
      <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: "divider",
          py: "12px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">{tagHeader}</Typography>
        <MuiLink
          href="/"
          underline="hover"
          component={Link}
          to="/tags"
          sx={{ fontFamily: "Roboto" }}
        >
          All Tags
        </MuiLink>
      </Box>

      <Grid container sx={{ gap: 4, mt: "32px" }}>
        {edges.map(({ node }) => {
          // posts list by tag
          return (
            <>
              <Post data={node} />
              <Divider
                sx={{
                  width: "100%",
                }}
              />
            </>
          )
        })}
      </Grid>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
