import * as React from "react"
import { Link } from "gatsby"

import DrawerLeft from "./DrawerLeft"
import DrawerRight from "./DrawerRight"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles"

let theme = createTheme()
theme = responsiveFontSizes(theme)

const Layout = ({ location, title, extraDrawerContent, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} data-is-root-path={isRootPath}>
        <DrawerLeft isRootPath={isRootPath} />
        <Container
          maxWidth="string"
          disableGutters
          sx={{
            maxWidth: "692px",
            mt: 4,
            mb: 12,
            "@media (max-width: 900px)": {
              paddingX: 3,
              mt: 2,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "2rem",
              "@media (max-width: 600px)": { mb: "1.5rem" },
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
            {title && (
              <IconButton sx={{ height: "fit-content" }}>
                <MoreHorizIcon />
              </IconButton>
            )}
          </Box>

          <main>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                "@media (max-width: 600px)": { gap: "1.5rem" },
              }}
            >
              {children}
            </Box>
          </main>
        </Container>
        <DrawerRight extraDrawerContent={extraDrawerContent} />
      </Box>
      <Paper
        elevation={3}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          "@media (min-width: 1080px)": { display: "none" },
        }}
      >
        <BottomNavigation>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            sx={{mb: "-4px"}}
            icon={
              isRootPath ? (
                <HomeIcon sx={{ color: "text.primary" }} />
              ) : (
                <HomeOutlinedIcon />
              )
            }
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<AlternateEmailOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Archive"
            icon={<DarkModeOutlinedIcon />}
          />
          <BottomNavigationAction 
          label="Archive" icon={<SendOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  )
}

export default Layout
