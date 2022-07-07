import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import SearchIcon from '@mui/icons-material/Search';

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <SearchIcon />
    </form>
  )
)