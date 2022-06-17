import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

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
          No blog posts found. Add markdown posts to "content/blog" (or the
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
          const title = post.frontmatter.title || post.fields.slug

          return (
            <>
              <article style={{ width: "100%" }}>
                <Grid
                  item
                  xs={12}
                  key={post.fields.slug}
                  itemScope
                  itemType="http://schema.org/Article"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "4rem",
                    "@media (max-width: 600px)": {
                      gap: "2rem",
                    },
                  }}
                >
                  <Box sx={{ padding: "0 !important" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Typography color="text.secondary" variant="body2">
                        {post.frontmatter.date}
                      </Typography>
                      <Box
                        component={Link}
                        to={post.fields.slug}
                        sx={{
                          textDecoration: "none",
                          color: "unset",
                        }}
                      >
                        <Typography
                          variant="h2"
                          gutterBottom
                          sx={{
                            fontWeight: "700",
                            letterSpacing: "-0.016em",
                            lineHeight: "28px",
                            fontSize: "24px",
                            "@media (max-width: 600px)": {
                              marginBottom: "0.35em",
                              lineHeight: "24px",
                            },
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body1"
                          gutterBottom
                          sx={{
                            display: "initial",
                            "@media (max-width: 600px)": {
                              display: "none",
                            },
                          }}
                        >
                          {post.frontmatter.description || post.excerpt}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: 2, alignItems: "center" }}
                      >
                        {post.frontmatter.tags && (
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            {post.frontmatter.tags.map(tag => (
                              <Chip
                                label={tag}
                                size="small"
                                clickable
                                component={Link}
                                to={`/tag/${kebabCase(tag)}`}
                              />
                            ))}
                          </Stack>
                        )}
                        <Typography
                          sx={{ color: "text.secondary" }}
                          variant="body2"
                        >
                          {" min read"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Link href={post.fields.slug}>
                    <StaticImage
                      src={
                        "https://images.unsplash.com/photo-1636690581110-a512fed05fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                      }
                      alt="cover-image"
                      layout="fixed"
                      width={120}
                      height={120}
                      quality={100}
                    />
                  </Link>
                </Grid>
              </article>
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
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          featuredImage
        }
      }
    }
  }
`
