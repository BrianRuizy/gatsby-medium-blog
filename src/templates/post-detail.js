import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Utilities 
import kebabCase from "lodash/kebabCase"

import Bio from "../components/bio"
import Layout from "../components/layout"
import shortcodes from "../components/mdx"
import Seo from "../components/seo"

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"


const PostDetailTemplate = ({ data, location }) => {
  const post = data.mdx
  const { previous, next } = data
  const image = getImage(post.frontmatter.featuredImage)

  return (
    <Layout location={location} title={"back"}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="post-detail"
        itemScope
        itemType="http://schema.org/Article"
      >
        {post.frontmatter.tags && (
          <div
            className="post-tags"
            style={{
              display: "flex",
              gap: ".5rem",
              marginBottom: "1rem",
            }}
          >
            {post.frontmatter.tags.map(tag => (
              <Link to={`/tag/${kebabCase(tag)}`}>
                <button key={tag}>{tag}</button>
              </Link>
            ))}
          </div>
        )}
        <header>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "900",
                letterSpacing: "-0.016em",
                lineHeight: "40px",
                "@media (max-width: 900px)": {
                  fontSize: "28px",
                  lineHeight: "36px",
                },
              }}
            >
              {post.frontmatter.title}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                lineHeight: "28px",
                color: "text.secondary",
              }}
            >
              {post.frontmatter.description}
            </Typography>
          </Box>
          <GatsbyImage image={image} alt={post.frontmatter.featuredImage.name} />
        </header>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <Divider>More from Brian</Divider>
        <footer>
          <Bio />
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              quality: 100
            )
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
