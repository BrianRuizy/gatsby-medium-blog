// export post item given data
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Utilities 
import kebabCase from "lodash/kebabCase"

// MUI components
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"


const PostItem = ({ data }) => {

  return (
    <article>
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
                {" min read"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Link href={data.fields.slug}>
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
  )
}

export default PostItem
