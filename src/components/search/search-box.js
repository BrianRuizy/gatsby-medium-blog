import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <TextField
        fullWidth
        variant="outlined"
        autoComplete="off"
        autoFocus
        
        type="text"
        placeholder="Search Posts"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}

        sx={{
          border: "none",
          "& fieldset": {
            border: "none",
          }

        }}
      />
    </form>
  )
)