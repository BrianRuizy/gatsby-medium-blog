import * as React from "react"
import { navigate } from 'gatsby';

import Avatar from "@mui/material/Avatar"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Paper from "@mui/material/Paper"

import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"


export default function BottomNav(props) {
  return (
    <Paper // bottom navigation
      elevation={2}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        "@media (min-width: 1081px)": { display: "none" },
      }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          onClick={() => {
            navigate("/")
          }}
          icon={
            props.isRootPath ? (
              <HomeIcon sx={{ color: "text.primary" }} />
            ) : (
              <HomeOutlinedIcon />
            )
          }
        />
        <BottomNavigationAction
          label="Contact"
          icon={<AlternateEmailOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Theme"
          onClick={props.colorMode.toggleColorMode}
          icon={
            props.theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )
          }
        />
        <BottomNavigationAction
          label="About"
          icon={
            <Avatar
              alt="Brian Ruiz"
              src="https://www.b-r.io/avatar.png"
              color="primary"
              sx={{ width: 24, height: 24, backgroundColor: "divider" }}
            >
              BR
            </Avatar>
          }
        />
      </BottomNavigation>
    </Paper>
  )
}
