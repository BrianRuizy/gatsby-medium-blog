import * as React from "react"
import { Link } from "gatsby"

import PanelLeft from "./PanelLeft"
import PanelRight from "./PanelRight"

import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"

import Paper from "@mui/material/Paper"
import { StaticImage } from "gatsby-plugin-image"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function ThemeBottomNavigationAction() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  return (
    <BottomNavigationAction
      label="theme"
      onClick={colorMode.toggleColorMode}
      icon={
        theme.palette.mode === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )
      }
    />
  )
}

function ThemeIconButton() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  return (
    <Tooltip title="Switch theme" placement="right" arrow>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  )
}

const Layout = ({ location, title, extraDrawerContent, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [mode, setMode] = React.useState("light")
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: '#6B38FB',
                },
                text: {
                  disabled: "rgba(0, 0, 0, 0.48)",
                  postBody: "rgba(0, 0, 0, 0.87)",
                },
                background: {
                  alt: "#fafafa",
                }
              }
            : {
                // palette values for dark mode
                primary: {
                  main: '#BB86FC',
                },
                text: {
                  postBody: "rgba(255, 255, 255, 0.87)",
                },
                background: {
                  alt: "#0f0f0f",
                }
              }),
        },
      }),
    [mode]
  )

  theme = responsiveFontSizes(theme)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "block" }}>
          <Box sx={{ display: "block", margin: "auto", maxWidth: "1504px" }}>
            <Box sx={{ display: "flex" }} data-is-root-path={isRootPath}>
              <PanelLeft
                isRootPath={isRootPath}
                ThemeButton={<ThemeIconButton />}
              />

              <Box sx={{ display: "block", minWidth: 0, flex: "1 1 auto" }}>
                <Container
                  disableGutters
                  maxWidth="string"
                  sx={{
                    maxWidth: "692px",
                    py: "2rem",
                    "@media (max-width: 600px)": {
                      px: "1.5rem",
                      py: "1rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        lineHeight: "52px",
                        fontWeight: "700",
                        "& > a": {
                          color: "text.primary",
                          textDecoration: "none",
                        },
                        "@media (max-width: 600px)": {
                          fontSize: "22px",
                        },
                      }}
                    >
                      <Link to="/">{title}</Link>
                    </Typography>
                    {title && (
                      <IconButton sx={{ height: "fit-content" }}>
                        <MoreHorizIcon alt="More" />
                      </IconButton>
                    )}
                  </Box>
                </Container>
                <main>{children}</main>
              </Box>

              <PanelRight extraDrawerContent={extraDrawerContent} />
            </Box>
          </Box>

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
                component={Link}
                to="/"
                label="Home"
                icon={
                  isRootPath ? (
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
              <ThemeBottomNavigationAction />
              <BottomNavigationAction
                label="user"
                icon={
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "24px",
                      borderRadius: "100px",
                      overflow: "hidden",
                    }}
                  >
                    <StaticImage alt="br" src="../images/avatar.png" />
                  </Box>
                }
              />
            </BottomNavigation>
          </Paper>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Layout
