const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content/posts`
const indexName = `Stories`

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

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`description:20`, `date`, `tags`] },
    
  },
]

module.exports = queries