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

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function BottomNav(props) {
  return (
    <HideOnScroll {...props}>
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
    </HideOnScroll>
  )
}
