import * as React from "react"
import { Link } from "gatsby"

import DrawerLeft from "./DrawerLeft"
import DrawerRight from "./DrawerRight"
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
                text: {
                  disabled: "rgba(0, 0, 0, 0.48)",
                  postBody: "rgba(0, 0, 0, 0.87)",
                },
              }
            : {
                // palette values for dark mode
                text: {
                  postBody: "rgba(255, 255, 255, 0.87)",
                },
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

        <Box sx={{ display: "flex" }} data-is-root-path={isRootPath}>
          <DrawerLeft
            isRootPath={isRootPath}
            ThemeButton={<ThemeIconButton />}
          />
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
                "@media (max-width: 600px)": { mb: "1rem" },
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
          // bottom navigation
          elevation={2}
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Layout
