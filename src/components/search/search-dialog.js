import { createRef, default as React, useState, useMemo } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

import SearchBox from "./search-box"
import SearchResult from "./search-result"
import useClickOutside from "./use-click-outside"

import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"

export default function SearchDialog({ open, handleClose }) {
  const searchIndices = [{ name: `Stories`, title: `Stories` }, { name: `Tags`, title: `Tags` }]
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
      fullWidth
      maxWidth="string"
      open={open}
      onClose={handleClose}
      PaperProps={{ elevation: 0 }}
      sx={{
        backdropFilter: "blur(4px)",
        "& .MuiDialog-container": { alignItems: "flex-start" },
        "& .MuiDialog-paper": {
          marginTop: "6rem",
          mx: "1rem",
          width: "100%",
          maxWidth: "720px",
          borderRadius: "12px",
          border: "1px solid",
          borderColor: "divider",
          "@media (max-width: 600px)": {
            marginTop: "2rem",
          },
        },
      }}
    >
      <Box ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={searchIndices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchBox
            onFocus={() => setFocus(true)}
            hasFocus={hasFocus}
            handleClose={handleClose}
          />

          {query && query.length > 0 && (
            <SearchResult indices={searchIndices} />
          )}
        </InstantSearch>
      </Box>
    </Dialog>
  )
}
