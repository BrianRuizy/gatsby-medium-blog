import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import { Link, graphql } from "gatsby"
import MuiLink from "@mui/material/Link"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"


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
      <SEO title={`${tag} (${totalCount})`} />
      <Box 
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: "divider",
          py: '12px',
          justifyContent: "space-between"
        }}
      >
        <Typography variant="body1">{tagHeader}</Typography>
        <MuiLink href='/' underline="hover" component={Link} to="/tags" sx={{fontFamily: 'Roboto'}}>All Tags</MuiLink>
      </Box>

      <Grid container sx={{ gap: 4, mt: '32px'}}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
             <>
             <article style={{ width: "100%" }}>
               <Grid
                 item
                 xs={12}
                 key={slug}
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
                       {node.frontmatter.date}
                     </Typography>
                     <Box
                       component={Link}
                       to={node.fields.slug}
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
                          fontSize: "24px !important",
                          "@media (max-width: 600px)": {
                            marginBottom: "0.35em",
                            lineHeight: "24px",
                            fontSize: "18px !important",
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
                         {node.frontmatter.description || node.excerpt}
                       </Typography>
                     </Box>
                     <Box
                       sx={{ display: "flex", gap: 2, alignItems: "center" }}
                     >
                       {node.frontmatter.tags && (
                         <Stack
                           direction="row"
                           spacing={1}
                           alignItems="center"
                         >
                           {node.frontmatter.tags.map(tag => (
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
                 <Link href={node.fields.slug}>
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
            featuredImage
          }
        }
      }
    }
  }
`
