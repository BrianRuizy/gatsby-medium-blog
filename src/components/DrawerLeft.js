import * as React from "react"
import { Link } from "gatsby"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"

import AbcIcon from "@mui/icons-material/Abc";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";


export default function RightDrawer() {
  return (
    <Drawer
      sx={{
        display: "none",
        flexShrink: 0,
        "@media (min-width: 1200px)": {
          display: "flex",
          width: "8.33%",
        },
        "@media (min-width: 1536px)": {
          width: "12.5%",
        },
        "& .MuiDrawer-paper": {
          justifyContent: "space-between",
          alignItems: "end",
          padding: "2rem 1rem",
          display: "none",
          alignItems: "center",
          "@media (min-width: 1200px)": {
            display: "flex",
            width: "8.33%",
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
        <IconButton aria-label="delete" href="/">
          <AbcIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        <IconButton>
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton>
          <AlternateEmailOutlinedIcon />
        </IconButton>
        {/* <ThemeButton /> */}
      </Box>
      <Box>
        <IconButton>
          <AbcIcon />
        </IconButton>
      </Box>
    </Drawer>
  )
}
