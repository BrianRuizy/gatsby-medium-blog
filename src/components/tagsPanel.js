import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

// MUI components
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Tabs from "@mui/material/Tabs"
import Typography from "@mui/material/Typography"

const tagsPanel = () => (
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
          alignItems: "center",
          "@media (max-width: 900px)": {
            flexDirection: "column",
            alignItems: "flex-start",
          },
        }}
      >
        <Typography variant="overline" sx={{ whiteSpace: "nowrap" }}>
          All Tags
        </Typography>
        <Tabs
          value={0}
          aria-label="tags"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            width: "100%",
            alignItems: "center",
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTabs-flexContainer": {
              gap: ".5rem",
            },
            "@media (max-width: 900px)": {
              "& .MuiTabs-scrollButtons.Mui-disabled": {
                opacity: .3
              },
            }
          }}
        >
          {data.allMdx.group.map(tag => {
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
        </Tabs>
      </Box>
    )}
  ></StaticQuery>
)

export default tagsPanel
