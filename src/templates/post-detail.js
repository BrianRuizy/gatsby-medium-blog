import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Utilities
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import shortcodes from "../components/mdx"
import Seo from "../components/seo"

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LinkIcon from "@mui/icons-material/Link"

const PostDetailTemplate = ({ data, location }) => {
  const post = data.mdx
  const { previous, next } = data
  const image = getImage(post.frontmatter.featuredImage)

  return (
    <Layout location={location} title={""}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
          <Avatar
            alt="Brian Ruiz"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEznEUEL5QCMA/profile-displayphoto-shrink_200_200/0/1584754543548?e=2147483647&v=beta&t=6pz6xtlRYMNdakEiOcMfaY3i5urZQZggz3vORlDCJ_A"
            sx={{ width: "48px", height: "48px" }}
          >
            BR
          </Avatar>
          <Stack>
            <Typography variant="body1">Brian Ruiz</Typography>
            <Typography color="text.secondary" variant="body2">
              {post.frontmatter.date} &bull; {post.timeToRead + " min read"}
            </Typography>
          </Stack>
        </Box>
        {/* social share */}
        <Stack direction="row" spacing={1}>
          <IconButton sx={{ height: "fit-content" }} size="small">
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ height: "fit-content" }} size="small">
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ height: "fit-content" }} size="small">
            <LinkedInIcon />
          </IconButton>
          <Tooltip title="Copy URL" arrow>
            <IconButton
              sx={{ height: "fit-content" }}
              size="small"
              onClick={() => {
                navigator.clipboard.writeText("https://b-r.io")
              }}
            >
              <LinkIcon sx={{ transform: "rotate(-45deg)" }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header style={{marginBottom: "6rem"}}>
          <Box pb={4} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Box>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: "900",
                  letterSpacing: "-0.016em",
                  lineHeight: "40px",
                  textTransform: "capitalize",
                  fontSize: "32px !important",
                  "@media (max-width: 900px)": {
                    lineHeight: "40px",
                  },
                }}
              >
                {post.frontmatter.title}
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: "22px !important",
                  letterSpacing: "0",
                  lineHeight: "28px",
                  fontWeight: "400",
                  color: "text.secondary",
                }}
              >
                {post.frontmatter.description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              maxHeight: "40rem",
              "& > div": { maxHeight: "40rem" },
            }}
          >
            <GatsbyImage
              image={image}
              alt={post.frontmatter.featuredImage.name}
            />
          </Box>
        </header>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <Divider>More from Brian</Divider>
        <footer>
          {/* {post.frontmatter.tags && (
          <div
            className="post-tags"
            style={{
              display: "flex",
              gap: ".5rem",
              marginBottom: "1rem",
            }}
          >
            {post.frontmatter.tags.map(tag => (
              <Link to={`/tag/${kebabCase(tag)}`} key={tag}>
                <button key={tag}>{tag}</button>
              </Link>
            ))}
          </div>
        )} */}
        </footer>
      </article>
      <nav className="post-detail-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default PostDetailTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
          name
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
