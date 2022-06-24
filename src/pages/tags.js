import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import MuiLink from "@mui/material/Link"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"

import LocalOfferIcon from "@mui/icons-material/LocalOffer"


const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout
    location={"All Topics"}
    title={
      <Box sx={{display: "flex", alignItems: "center"}}>
        <IconButton
          size="small"
          sx={{ background: "#f1f1f1", color: "text.primary", mr: 1 }}
        >
          <LocalOfferIcon fontSize="small" />
        </IconButton>
        {"All Topics"}
      </Box>
    }
  >
    <Seo title={"All Topics"} />
    <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: "divider",
          py: "12px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
        {group.length > 1 ? `There are ${group.length} topics` : `There is ${group.length} topic`}
        {" to read about"}
        </Typography>
        <MuiLink
          href="/"
          underline="hover"
          component={Link}
          to="/"
          sx={{ fontFamily: "Roboto" }}
        >
          Home
        </MuiLink>
    </Box>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px"}}>
      {group.map(tag => (
        <Chip
          key={tag}
          component={Link}
          to={`/tag/${kebabCase(tag.fieldValue)}/`}
          label={`${tag.fieldValue} (${tag.totalCount})`}
          clickable
        />
      ))}
    </Box>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 200) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
