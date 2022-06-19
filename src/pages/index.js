import * as React from "react"
import { Link, graphql } from "gatsby"

// local imports
import Post from "../templates/post"
import Layout from "../components/layout"
import Seo from "../components/seo"

// MUI components
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"


function LinkTab(props) {
  return (
    <Tab
      disableRipple
      component={Link}
      onChange={<Link to="/myPath"></Link>}
      sx={{
        "&.Mui-selected": { color: "text.primary" },
      }}
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
        <Seo title="All posts" />
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
      <Seo title="All posts" />
      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
          mb: "32px",
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
          <LinkTab label="Home" to="/" />
          <LinkTab label="About" to="/about" active />
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
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
              gatsbyImageData(
                quality: 100
                aspectRatio: 1

              )
            }
            name
          }
        }
      }
    }
  }
`
