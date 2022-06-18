import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

import IconButton from "@mui/material/IconButton"
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
    location={"All Tags"}
    title={
      <>
        <IconButton
          size="small"
          sx={{ background: "#f1f1f1", color: "text.primary", mr: 1 }}
        >
          <LocalOfferIcon fontSize="small" />
        </IconButton>
        {"All Tags"}
      </>
    }
  >
    <Seo title={'All Tags'} />

    <ul style={{ paddingLeft: "1rem" }}>
      {group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
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
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
