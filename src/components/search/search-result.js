import { Link } from "gatsby"
import { default as React } from "react"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"

import ArticleIcon from "@mui/icons-material/Article"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"

import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <span>
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </span>
  ) : null
})

const PageHit = ({ hit }) => (
  <ListItemButton component={Link} to={hit.slug}>
    <ListItemIcon sx={{ "@media (max-width: 600px)": { display: "none" } }}>
      <DescriptionOutlinedIcon />
    </ListItemIcon>
    <ListItemText
      primary={
        <>
          <Highlight attribute="title" hit={hit} tagName="mark" />
          <Typography sx={{ color: "text.disabled", display: "inline" }}>
            －<Snippet attribute="date" hit={hit} />
          </Typography>
        </>
      }
      // secondary={<Snippet attribute="description" hit={hit} tagName="mark" />}
    />
  </ListItemButton>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {index.name}
        </ListSubheader>
      }
      sx={{
        "& ul": {
          padding: 0,
          listStyle: "none",
        },
      }}
    >
      <Hits hitComponent={PageHit} />
    </List>
  </Index>
)

const SearchResult = ({ indices }) => (
  <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    {/* <PoweredBy /> */}
  </Box>
)

export default SearchResult
