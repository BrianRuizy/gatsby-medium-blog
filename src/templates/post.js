// export post item given data
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// Utilities 
import kebabCase from "lodash/kebabCase"

// MUI components
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"


const PostItem = ({ data }) => {
  const image = getImage(data.frontmatter.featuredImage)

  return (
    <article style={{width: "100%"}}>
      <Grid
        item
        xs={12}
        key={data.frontmatter.slug}
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
              {data.frontmatter.date}
            </Typography>
            <Box
              component={Link}
              to={data.fields.slug}
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
                {data.frontmatter.title || data.fields.slug}
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
                {data.frontmatter.description || data.excerpt}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {data.frontmatter.tags && (
                <Stack direction="row" spacing={1} alignItems="center">
                  {data.frontmatter.tags.map(tag => (
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
              <Typography sx={{ color: "text.secondary" }} variant="body2">
                {`${data.timeToRead} min read`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Link href={data.fields.slug}>
          <Box
           sx={{
            width: "140px",
            height: "140px",
            "@media (max-width: 900px)": {
              width: "80px !important",
              height: "80px !important",
            }
          }}
          >
          <GatsbyImage image={image} alt={data.frontmatter.featuredImage.name} />
            
          </Box>
        </Link>
      </Grid>
    </article>
  )
}

export default PostItem
