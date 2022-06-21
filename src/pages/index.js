import * as React from "react"
import { Link, graphql } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

// local imports
import Post from "../templates/post"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tagsPanel"

// MUI components
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

function LinkTab(props) {
  return (
    <Tab
      disableRipple
      component={Link}
      sx={{ "&.Mui-selected": { color: "text.primary" } }}
      {...props}
    />
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />
        <p>
          No blog posts found. Add markdown posts to "content/posts" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Tags />
      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={0}
          aria-label="nav tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "text.primary",
              height: "1px",
            },
          }}
        >
          <LinkTab label="Case Study" to="/" />
          <LinkTab label="Blog" to="/blog" />
        </Tabs>
      </Box>

      <Grid container sx={{ gap: 4 }}>
        {posts.map(post => {
          // posts list sorted by date
          return (
            <>
              <Post data={post} />
              <Divider
                sx={{
                  width: "100%",
                  "&:last-child": { display: "none" },
                }}
              />
            </>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 200
      filter: { frontmatter: { category: { in: "Case Study" } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
      }
      nodes {
        excerpt
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
              gatsbyImageData(aspectRatio: 1, quality: 100)
            }
            name
          }
        }
      }
    }
  }
`
