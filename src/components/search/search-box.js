import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export default connectSearchBox(
  ({ refine, currentRefinement, onFocus, handleClose }) => (
    <form>
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
          endAdornment: (
            <Button
              variant="outlined"
              onClick={handleClose}
              size="small"
              sx={{
                py: 0,
                minWidth: 0,
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              esc
            </Button>
          ),
        }}
        sx={{
          "& fieldset": {
            border: "none",
            "@media (max-width: 600px)": {
              borderBottom: "1px solid",
              borderColor: "divider",
              borderRadius: "0",
            },
          },
        }}
      />
    </form>
  )
)