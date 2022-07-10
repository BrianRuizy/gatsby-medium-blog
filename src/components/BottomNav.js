import * as React from "react"
import { navigate } from "gatsby"

import ContactDrawer from "./ContactDrawer"
import SearchDialog from "./search/search-dialog"

import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Paper from "@mui/material/Paper"

import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SearchIcon from "@mui/icons-material/Search"

import useScrollTrigger from "@mui/material/useScrollTrigger"
import Slide from "@mui/material/Slide"

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function BottomNav(props) {
  const [state, setState] = React.useState({
    bottom: false,
  })

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  return (
    <HideOnScroll {...props}>
      <Paper // bottom navigation
        elevation={0}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          "@media (min-width: 1081px)": { display: "none" },
        }}
      >
        <BottomNavigation>
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
            label="search"
            icon={<SearchIcon />}
            onClick={handleClickOpen}
          />
          <SearchDialog
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />

          <BottomNavigationAction
            label="Contact"
            onClick={toggleDrawer("bottom", true)}
            icon={<AlternateEmailOutlinedIcon />}
          />
          <ContactDrawer open={state["bottom"]} onClose={toggleDrawer("bottom", false)} />

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
        </BottomNavigation>
      </Paper>
    </HideOnScroll>
  )
}
