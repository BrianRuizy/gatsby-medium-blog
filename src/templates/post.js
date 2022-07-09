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
import Typography from "@mui/material/Typography"

const ClampTypography = {
  overflow: 'hidden',
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  lineClamp: "2", 
  WebkitBoxOrient: "vertical",
}

const PostItem = ({ data }) => {
  const image = getImage(data.frontmatter.featuredImage)

  return (
    <article style={{ width: "100%" }}>
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
            gap: "1rem",
          },
        }}
      >
        <Box sx={{ padding: "0 !important" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              "@media (max-width: 600px)": { gap: 1.5 },
            }}
          >
            <Typography color="text.disabled" variant="body2">
              {data.frontmatter.date}
            </Typography>
            <Box
              component={Link}
              to={data.fields.slug}
              sx={{
                textDecoration: "none",
                color: "unset",
                "& h2:hover": {
                  color: "primary.main",
                },
                "@media (max-width: 900px)": {
                  "& h2:hover": {
                    color: "unset",
                  },
                }
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                style={ClampTypography}
                sx={{
                  fontWeight: "700",
                  lineHeight: "28px",
                  fontSize: "22px !important",
                  textTransform: "capitalize",
                  letterSpacing: "0",
                  color: "text.primary",
                  transition: "color 0.2s ease-in-out",
                  "@media (max-width: 600px)": {
                    marginBottom: "0",
                    lineHeight: "20px",
                    fontSize: "16px !important",
                  },
                }}
              >
                {data.frontmatter.title || data.fields.slug}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={ClampTypography}
                sx={{
                  display: "initial",
                  fontFamily: 'Charter',
                  marginBottom: "1rem",
                  color: "text.postBody",
                  "@media (max-width: 600px)": {
                    display: "none !important",
                  },
                }}
              >
                {`${data.frontmatter.description} —${data.excerpt}`}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {data.frontmatter.tags && (
                // only show first tag
                <Chip
                label={data.frontmatter.tags[0]}
                size="small"
                clickable
                component={Link}
                to={`/tag/${kebabCase(data.frontmatter.tags[0])}`}
                />
              )}
              <Typography sx={{ color: "text.secondary" }} variant="body2">
                {`${data.timeToRead} min read`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Link to={data.fields.slug}>
          <Box
            sx={{
              width: "112px",
              "@media (max-width: 600px)": {
                width: "72px !important",
              },
            }}
          >
            <GatsbyImage
              image={image}
              alt={data.frontmatter.featuredImage.name}
            />
          </Box>
        </Link>
      </Grid>
    </article>
  )
}

export default PostItem
