import { createRef, default as React, useState, useMemo } from "react"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"
import SearchBox from "./search-box"

import StyledSearchResult from "./styled-search-result"
import useClickOutside from "./use-click-outside"

import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"

export default function SearchDialog({ open, setOpen, handleClose }) {
  const searchIndices = [{ name: `Blog`, title: `Blog` }]

  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )
  useClickOutside(rootRef, () => setFocus(false))


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="string"
      sx={{
        "& .MuiDialog-container": { alignItems: "flex-start" },
        "& .MuiDialog-paper": {
          marginTop: "6rem",
          maxWidth: "700px",
        },
      }}
    >
      <Box ref={rootRef} sx={{  }}>
        <InstantSearch
          searchClient={searchClient}
          indexName={searchIndices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />

          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={searchIndices}
          />
        </InstantSearch>
      </Box>
    </Dialog>
  )
}
