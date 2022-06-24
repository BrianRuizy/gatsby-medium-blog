import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

// MUI components
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
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
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "flex-start",
          },
        }}
      >
        <Typography
          variant="overline"
          sx={{ whiteSpace: "nowrap", color: "text.secondary" }}
        >
          All Topics
        </Typography>
        <Tabs
          value={0}
          aria-label="tags"
          variant="scrollable"
          scrollButtons
          sx={{
            width: "100%",
            alignItems: "center",
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTabs-flexContainer": {
              gap: ".5rem",
            },
            "@media (max-width:600px)": {
              "& .MuiTabs-scrollButtons.Mui-disabled": {
                opacity: 0.3,
              },
            },
          }}
        >
          {data.allMdx.group.map(tag => {
            // tags list sorted by name
            return (
              <Chip
                key={tag.fieldValue}
                label={tag.fieldValue}
                component={Link}
                to={`/tag/${kebabCase(tag.fieldValue)}/`}

              >

              </Chip>
              // <Tab
              //   key={tag.fieldValue}
              //   component={Link}
              //   to={`/tag/${kebabCase(tag.fieldValue)}/`}
              //   label={tag.fieldValue}
              //   sx={{
              //     paddingX: "12px",
              //     paddingY: "0",
              //     textTransform: "capitalize",
              //     background: "rgba(0, 0, 0, 0.08)",
              //     height: "32px",
              //     color: " rgba(0, 0, 0, 0.87) !important",
              //     borderRadius: "16px",
              //     fontSize: "0.8125rem",
              //     fontWeight: "400",
              //     minHeight: "unset",
              //     minWidth: "unset",
              //     "webkitTransition":
              //       "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              //     transition:
              //       "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              //     "&:hover": {
              //       background: "rgba(0, 0, 0, 0.12)",
              //     },
              //   }}
              // />
            )
          })}
        </Tabs>
      </Box>
    )}
  ></StaticQuery>
)

export default tagsPanel
