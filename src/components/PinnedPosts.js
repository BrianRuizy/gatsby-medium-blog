import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import PushPinIcon from '@mui/icons-material/PushPin';

const ClampTypography = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  lineClamp: "2",
  WebkitBoxOrient: "vertical",
}

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(filter: { frontmatter: { pinned: { eq: true } } }) {
          nodes {
            frontmatter {
              title
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1)
                }
              }
            }
            timeToRead
            slug
          }
        }
      }
    `}
    render={data => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "text.primary",
            fontSize: "16px !important",
            letterSpacing: 0,
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          Pinned Stories
        </Typography>
        <Stack spacing={3}>
          {data.allMdx.nodes.map(item => {
            if (!item) return null
            return (
              <Box
                key={item.slug}
                component={Link}
                to={`/${item.slug}`}
                rel={item}
                sx={{
                  textDecoration: "none",
                  color: "unset",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", display: "flex", alignItems: "center" }}
                    gutterBottom
                  >
                    <PushPinIcon fontSize="inherit"/>&nbsp;{`Pinned • ${item.timeToRead}`} min read
                  </Typography>
                  <Typography
                    variant="body1"
                    style={ClampTypography}
                    sx={{
                      color: "text.primary !important",
                      fontWeight: "700",
                      lineHeight: "20px",
                      textTransform: "capitalize",
                      letterSpacing: "0",
                      transition: "color 0.2s ease-in-out",
                      "&:hover": {
                        color: "primary.main",
                      },
                      "@media (max-width: 900px)": {
                        "&:hover": {
                          color: "unset",
                        },
                      }
                    }}
                  >
                    {" "}
                    {item.frontmatter.title}
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", maxWidth: "55px" }}>
                  <GatsbyImage
                    image={getImage(item.frontmatter.featuredImage)}
                    alt={item.frontmatter.featuredImage.name}
                  />
                </Box>
              </Box>
            )
          })}
        </Stack>
      </Box>
    )}
  ></StaticQuery>
)

export default ComponentName
