import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

// MUI components
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"


const tagsPopular = () => (
  <StaticQuery
    query={graphql`
      {
        allMdx {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
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
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px !important",
            letterSpacing: 0,
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          Popular Topics
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {data.allMdx.group.slice(0, 5).map(tag => {
            // sort tags by total count
            data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount)

            return (
              <Chip
                key={tag.fieldValue}
                component={Link}
                to={`/tag/${kebabCase(tag.fieldValue)}/`}
                label={tag.fieldValue}
                clickable
              />
            )
          })}
        </Box>
      </Box>
    )}
  ></StaticQuery>
)

export default tagsPopular
