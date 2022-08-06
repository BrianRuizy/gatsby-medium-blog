const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content/posts`
const indexName = `Stories`
const indexName2 = `Tags`

const pageQuery = `{
  pages: allMdx(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "l")
          description
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}`

const pageQueryTags = `{
  tags: allMdx(limit: 200) {
    group(field: frontmatter___tags) {
      objectID: fieldValue
      fieldValue
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

function tagToAlgoliaRecord(tag) {
  return {
    objectID: tag.fieldValue,
    fieldValue: tag.fieldValue,
    
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`description:20`, `date`, `tags`] },
    
  },
  {
    query: pageQueryTags,
    transformer: ({ data }) => data.tags.group.map( tag => (tagToAlgoliaRecord(tag))),
    indexName2, 
  },
]

module.exports = queries