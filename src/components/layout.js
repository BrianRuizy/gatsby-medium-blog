import * as React from "react"
import { Link } from "gatsby"

import AboutDrawer from "./about"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"

import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

import AbcIcon from "@mui/icons-material/Abc";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CssBaseline from "@mui/material/CssBaseline";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles"

let theme = createTheme()
theme = responsiveFontSizes(theme)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} data-is-root-path={isRootPath}>
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
              padding: theme.spacing(4, 2),
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
              gap: theme.spacing(1),
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
        <Container
          maxWidth="string"
          disableGutters
          sx={{
            maxWidth: "692px",
            my: 4,
            "@media (max-width: 900px)": {
              paddingX: 3,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "4rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                lineHeight: "52px",
                fontWeight: "700",
                "@media (max-width: 600px)": {
                  fontSize: "22px",
                },
              }}
            >
              <Link to="/">{title}</Link>
            </Typography>
            <IconButton sx={{ height: "fit-content" }}>
              <MoreHorizIcon />
            </IconButton>
          </Box>

          <main>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {children}
            </Box>
          </main>
        </Container>
        <AboutDrawer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
