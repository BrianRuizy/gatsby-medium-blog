import * as React from "react"
import { Link, graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
// import { shortcodes } from "../components/shortcodes"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

const shortcodes = {
  p: (props) => (
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
        mt: "2rem",
        "@media (max-width: 900px)": {
          fontSize: "18px",
          lineHeight: "30px",
        },
      }}
      {...props}
    />
  ),
  h1: (props) => (
    <Typography
      variant="h2"
      sx={{
        fontSize: "22px !important",
        fontWeight: "900",
        lineHeight: "28px",
        letterSpacing: "0",
        mt: "3.14em",
        mb: -2,
        "@media (max-width: 900px)": {
          fontSize: "20px !important",
        },
      }}
      {...props}
    />
  ),
  h2: (props) => (
    <Typography
      variant="h3"
      sx={{
        fontSize: "20px !important",
        letterSpacing: "0",
        mt: "2.37em",
        mb: -2,
        fontWeight: "700",
        "@media (max-width: 900px)": {
          fontSize: "18px !important",
        },
      }}
      {...props}
    />
  ),
  blockquote: (props) => (
    <Typography
      variant="h2"
      sx={{
        pl: 2,
        my: "2rem",
        color: "text.secondary",
        lineHeight: "40px",
        borderLeft: "2px solid ",
        borderColor: "text.primary",
        fontStyle: 'italic',
        lineHeight: '1.58',
        "& > p": {
          fontWeight: "400",
          letterSpacing: "-0.003em",
          lineHeight: "inherit",
          m: "unset",
        },
        "@media (max-width: 900px)": {
          mx: 4,
          "& > p": {
            fontSize: "20px",
          },
        },
      }}
      {...props}
    />
  ),
  ul: (props) => ( <ul {...props}  />),
  li: (props) => (
    <li
      {...props}
      style={{
        marginTop: '1.14em',
        marginBottom: '-0.46em',
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
        "@media (max-width: 900px)": {
          fontSize: "18px",
          lineHeight: "30px",
        },
      }}
    />
  ),
  hr: (props) => ( <Divider sx={{mt: 6 }}/>),
  a: (props) => ( <Link {...props} />),
}


const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
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
              <Link to={`/tags/${tag}`}>
                <button key={tag}>{tag}</button>
              </Link>
            ))}
          </div>
        )}
        <header>
          <Typography
            variant="h1"
            sx={{
              fontSize: "36px",
              fontWeight: "900",
              letterSpacing: "-0.016em",
              lineHeight: "40px",
              "@media (max-width: 900px)": {
                fontSize: "28px",
                lineHeight: "36px",
              },
            }}
           >{post.frontmatter.title}</Typography>
          <p>{post.frontmatter.date}</p>
        </header>

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
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

export default BlogPostTemplate

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
