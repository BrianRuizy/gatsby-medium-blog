import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


export default connectSearchBox(
  ({ refine, currentRefinement, onFocus, handleClose }) => (
    <form>
      <TextField
        fullWidth
        autoFocus
        variant="outlined"
        autoComplete="off"
        type="text"
        placeholder="Search Posts"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
        InputProps={{
          style: { fontSize: 16 },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <Button
              variant="outlined"
              onClick={handleClose}
              color="primary"
              size="small"
              sx={{
                py: 0,
                minWidth: 0,
                fontSize: "14px",
                fontWeight: "400",
                textTransform: "none",
                color: "text.secondary",
                borderColor: "divider",
              }}
            >
              esc
            </Button>
          ),
        }}
        sx={{
          "& fieldset": { border: "none" },
        }}
      />
    </form>
  )
)