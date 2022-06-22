import * as React from "react"
import { Link, graphql } from "gatsby"

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
      {...props}
    />
  )
}

const PhotographyIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Photography posts" />
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
      <Seo title="Photography posts" />

      <Tags />

      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={2}
          aria-label="nav tabs example"
        >
          <LinkTab label="Case Study" to="/" />
          <LinkTab label="Blog" to="/blog" />
          <LinkTab label="Photography" to="/photography" />
        </Tabs>
      </Box>

      <Grid container sx={{ gap: 4 }}>
        {posts.map(post => {
          // posts list sorted by date
          return (
            <>
              <Post data={post} key={post.title}/>
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

export default PhotographyIndex

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
      filter: { frontmatter: { category: { in: "Photography" } } }
    ) {
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
              gatsbyImageData(quality: 100, aspectRatio: 1)
            }
            name
          }
        }
      }
    }
  }
`