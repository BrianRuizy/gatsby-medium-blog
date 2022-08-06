import { Link } from "gatsby"
import { default as React } from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"

import ArticleIcon from "@mui/icons-material/Article"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import {
  // connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
} from "react-instantsearch-dom"

// const HitCount = connectStateResults(({ searchResults }) => {
//   const hitCount = searchResults && searchResults.nbHits

//   return hitCount > 0 ? (
//     <span>
//       {hitCount} result{hitCount !== 1 ? `s` : ``}
//     </span>
//   ) : null
// })

const PageHit = ({ hit }) => (
  <ListItemButton component={Link} to={hit.slug}>
    <ListItemIcon
      sx={{
        minWidth: "2.5rem",
        "@media (max-width: 600px)": { display: "none" },
      }}
    >
      <IconButton
        disableRipple
        size="small"
        sx={{
          backgroundColor: "action.selected",
          color: "text.primary",
        }}
      >
        <ArticleIcon sx={{ fontSize: "14px" }} />
      </IconButton>
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
      secondary={<Snippet attribute="description" hit={hit} tagName="mark" />}
      sx={{
        "* > mark": {
          backgroundColor: "primary.light",
          color: "inherit",
        },
        "> .MuiTypography-body2": {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          mr: 4,
        }
      }}
    />
  </ListItemButton>
)

const TagHit = ({ hit }) => (
  <ListItemButton component={Link} to={`/tag/${kebabCase(hit.fieldValue)}/`}>
    <ListItemIcon
      sx={{
        minWidth: "2.5rem",
        "@media (max-width: 600px)": { display: "none" },
      }}
    >
      <IconButton
        disableRipple
        size="small"
        sx={{
          backgroundColor: "action.selected",
          color: "text.primary",
        }}
      >
        <LocalOfferIcon sx={{ fontSize: "14px" }} />
      </IconButton>
    </ListItemIcon>
    <ListItemText
      primary={<Highlight attribute="fieldValue" hit={hit} tagName="mark" />}
      sx={{
        "* > mark": {
          backgroundColor: "primary.light",
          color: "inherit",
        },
      }}
    />
  </ListItemButton>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <List
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ background: "none", color: "text.disabled" }}
        >
          {index.name}
        </ListSubheader>
      }
      sx={{
        py: 1,
        "& ul": {
          padding: 0,
          listStyle: "none",
        },
      }}
    >
      <Hits hitComponent={index.name === "Stories" ? PageHit : TagHit} />
    </List>
    <Divider sx={{ mx: 2, ":last-of-type": { display: "none" } }} />
  </Index>
)

const SearchResult = ({ indices }) => (
  <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </Box>
)

export default SearchResult
