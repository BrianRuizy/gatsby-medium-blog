import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="small"
          sx={{
            mr: 1,
            backgroundColor: "action.selected",
            color: "text.primary",
          }}
        >
          <LocalOfferIcon fontSize="small" />
        </IconButton>
        {"All Topics"}
      </Box>
    }
  >
    <Seo title={"All Topics"} />
    <Container
      maxWidth="string"
      sx={{ maxWidth: "740px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          "@media (max-width: 600px)": { gap: "1.5rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: 1,
            borderColor: "divider",
            py: "12px",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body1">
            {group.length > 1
              ? `${group.length} topics`
              : `${group.length} topic`}
            {" to read about"}
          </Typography>
          <MuiLink
            href="/"
            color="inherit"
            component={Link}
            to="/"
          >
            Back home
          </MuiLink>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
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
      </Box>
    </Container>
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
