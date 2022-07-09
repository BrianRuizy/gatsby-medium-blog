import * as React from "react"
import { navigate } from "gatsby"

import SearchDialog from "./search/search-dialog"

import Avatar from "@mui/material/Avatar"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography"

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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        elevation={2}
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
          <Drawer
            anchor={"bottom"}
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
            PaperProps={{ elevation: 0 }}
            sx={{
              backdropFilter: "blur(4px)",
            }}
          >
            <Container maxWidth="sm">
              <form
                action="https://getform.io/f/faf8d119-4334-4fcc-ae56-2dc4de9cb453"
                method="POST"
                autocomplete="off"
              >
                <Box
                  sx={{
                    my: "2rem",
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ mb: "1rem" }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Get in touch!
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Want to work together? Let's connect!
                    </Typography>
                  </Box>
                  <TextField
                    id="outlined-name"
                    label="Your name"
                    variant="outlined"
                    name="name"
                    type={"text"}
                  />
                  <TextField
                    id="outlined-email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    type={"email"}
                    required
                  />
                  <TextField
                    id="outlined-message"
                    label="Message"
                    variant="outlined"
                    placeholder="Something nice 😅"
                    name="message"
                    type={"text"}
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disableElevation
                    type="submit"
                    sx={{
                      textTransform: "none",
                      fontWeight: 400,
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </form>
            </Container>
          </Drawer>
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
