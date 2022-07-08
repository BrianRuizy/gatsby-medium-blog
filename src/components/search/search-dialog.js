import { createRef, default as React, useState, useMemo } from "react"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

import SearchBox from "./search-box"
import SearchResult from "./search-result"
import useClickOutside from "./use-click-outside"

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"

export default function SearchDialog({ open, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const searchIndices = [{ name: `Stories`, title: `Stories` }]

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
      fullScreen={fullScreen}
      PaperProps={{ elevation: 4 }}
      sx={{
        "& .MuiDialog-container": { alignItems: "flex-start" },
        "& .MuiDialog-paper": {
          marginTop: "6rem",
          maxWidth: "750px",
          borderRadius: "12px",
          "@media (max-width: 600px)": {
            marginTop: 0,
            borderRadius: 0
          }
        },
      }}
    >
      <Box ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={searchIndices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} handleClose={handleClose} />

          {query && query.length > 0 && (
            <SearchResult indices={searchIndices} />
          )}
        </InstantSearch>
      </Box>
    </Dialog>
  )
}
