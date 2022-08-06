import * as React from "react"
import { navigate } from "gatsby"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"

import ClearIcon from "@mui/icons-material/Clear"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Fade from "@mui/material/Fade"

export default function ProgressAppBar(props) {
  const { window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: false,
    threshold: 300,
  })

  return (
    <Fade in={trigger}>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "background.appBar",
          color: "text.primary",
          backdropFilter: "blur(4px)",
          "@media (min-width: 1081px)": { display: "none" },
        }}
      >
        <Toolbar
          sx={{
            gap: 4,
            maxWidth: "692px",
            width: "100%",
            mx: "auto",
            p: "0 !important",
            justifyContent: "space-between",
            "@media (max-width: 600px)": {
              px: "1.5rem !important",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "16px",
              "@media (max-width: 600px)": {
                fontSize: "14px",
              },
            }}
          >
            {props.text}
          </Typography>
          <IconButton size="small" onClick={() => navigate(-1)}>
            <ClearIcon sx={{ fontSize: "16px" }} />
          </IconButton>
        </Toolbar>
        <Box sx={{ width: "100%" }} ref={props.ref}>
          <LinearProgress variant="determinate" value={props.percent} />
        </Box>
      </AppBar>
    </Fade>
  )
}
