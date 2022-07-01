import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Post from "../templates/post"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Components
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            sx={{
              mr: 1,
              backgroundColor: "action.selected",
              color: "text.primary",
            }}
          >
            <LocalOfferIcon fontSize="small" />
          </IconButton>
          {tag}
        </Box>
      }
    >
      <Seo title={`${tag} (${totalCount})`} />
      <Container
        disableGutters
        maxWidth="string"
        sx={{
          maxWidth: "692px",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            "@media (max-width: 600px)": { gap: "1.5rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderBottom: 1,
              borderColor: "divider",
              py: "12px",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="body1">{tagHeader}</Typography>
            <MuiLink
              href="/"
              color="inherit"              
              component={Link}
              to="/tags"
            >
              All Topics
            </MuiLink>
          </Box>

          <Grid
            container
            sx={{ gap: "2rem", "@media (max-width: 600px)": { gap: "1.5rem" } }}
          >
            {edges.map(({ node }) => {
              // posts list by tag
              return (
                <Box
                  key={node.id}
                  sx={{
                    width: "100%",
                    "&:last-child": { "& > hr": { display: "none" } },
                  }}
                >
                  <Post data={node} />
                  <Divider
                    sx={{
                      width: "100%",
                      pt: 4,
                      "@media (max-width: 600px)": { pt: "1.5rem" },
                    }}
                  />
                </Box>
              )
            })}
          </Grid>
        </Box>
      </Container>
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
      limit: 200
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1)
              }
              name
            }
          }
        }
      }
    }
  }
`
