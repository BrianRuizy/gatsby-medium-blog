import * as React from "react"
import { Link } from "gatsby"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import AbcIcon from "@mui/icons-material/Abc";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


export default function RightDrawer({ isRootPath, ThemeButton }) {
  
  return (
    <Drawer
      sx={{
        display: "none",
        flexShrink: 0,
        "@media (min-width: 1080px)": {
          display: "flex",
          width: "7%",
        },
        "@media (min-width: 1536px)": {
          width: "12.5%",
        },
        "& .MuiDrawer-paper": {
          justifyContent: "space-between",
          padding: "2rem 1rem",
          display: "none",
          alignItems: "center",
          "@media (min-width: 1080px)": {
            display: "flex",
            width: "7%",
          },
          "@media (min-width: 1536px)": {
            width: "12.5%",
            alignItems: "flex-end",
          },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box>
        <IconButton aria-label="delete" component={Link} to="/">
          <AbcIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Tooltip title="Home" placement="right" arrow>
          <IconButton component={Link} to="/">
            {isRootPath ? (
              <HomeIcon sx={{ color: "text.primary" }} />
            ) : (
              <HomeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Contact" placement="right" arrow>
          <IconButton>
            <AlternateEmailOutlinedIcon />
          </IconButton>
        </Tooltip>
        {ThemeButton}
      </Box>
      <Box>
        <IconButton>
          <AbcIcon />
        </IconButton>
      </Box>
    </Drawer>
  )
}
