import * as React from "react"
import { Link } from "gatsby"

import ContactDrawer from "./ContactDrawer"
import SearchDialog from "./search/search-dialog"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SearchIcon from "@mui/icons-material/Search"

export default function RightDrawer({ isRootPath, ThemeButton }) {
  const [state, setState] = React.useState({
    bottom: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "80px",
        borderRight: "1px solid",
        borderColor: "divider",
        padding: "2.5rem 0",
        position: "sticky",
        top: 0,
        "@media (max-width: 1080px)": {
          display: "none",
        },
      }}
    >
      <Box>
        <IconButton
          sx={{ color: "text.primary" }}
          size="small"
          component={Link}
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 375 375"
            version="1.2"
          >
            <defs>
              <clipPath id="clip1">
                <path d="M 103.636719 64.171875 L 271.476562 64.171875 L 271.476562 310 L 103.636719 310 Z M 103.636719 64.171875 " />
              </clipPath>
            </defs>
            <g id="surface1">
              <g clipPath="url(#clip1)" clipRule="nonzero">
                <path
                  fill="currentColor"
                  d="M 211.375 151.808594 C 203.050781 149.433594 194.765625 155.722656 194.765625 164.390625 L 194.765625 297.785156 C 194.765625 305.234375 201.695312 310.808594 208.941406 309.09375 C 244.675781 300.671875 271.355469 268.492188 271.355469 230.195312 C 271.355469 193.117188 246.363281 161.785156 211.375 151.808594 Z M 180.15625 144.734375 L 180.15625 297.785156 C 180.15625 305.234375 173.230469 310.808594 165.980469 309.09375 C 130.246094 300.675781 103.566406 268.492188 103.566406 230.195312 L 103.566406 74.296875 C 103.566406 68.449219 108.902344 64.046875 114.640625 65.164062 C 151.925781 72.410156 180.15625 105.335938 180.15625 144.734375 Z M 180.15625 144.734375 "
                />
              </g>
            </g>
          </svg>
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
        <React.Fragment>
          <Tooltip title="Search" placement="right" arrow>
            <IconButton onClick={handleClickOpen}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <SearchDialog
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />
        </React.Fragment>
        <React.Fragment>
          <Tooltip title="Contact" placement="right" arrow>
            <IconButton onClick={toggleDrawer("bottom", true)}>
              <AlternateEmailOutlinedIcon />
            </IconButton>
          </Tooltip>
          <ContactDrawer
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          />
        </React.Fragment>
        {ThemeButton}
      </Box>
      <Box>
        <Avatar
          alt="Brian Ruiz"
          src="https://www.b-r.io/avatar.png"
          sx={{ width: 32, height: 32, backgroundColor: "divider" }}
        >
          BR
        </Avatar>
      </Box>
    </Box>
  )
}
