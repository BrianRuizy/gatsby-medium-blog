import * as React from "react"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"

import BottomNav from "./BottomNav"
import PanelLeft from "./PanelLeft"
import PanelRight from "./PanelRight"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

function ThemeIconButton({ darkModeHook }) {
  return (
    <Tooltip title="Switch theme" placement="right" arrow>
      <IconButton onClick={darkModeHook.toggle}>
        {darkModeHook.value === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  )
}

const Layout = ({
  location,
  title,
  extraDrawerContent,
  extraFooterContent,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const darkModeHook = useDarkMode(false)
  const mode = darkModeHook.value === false ? "light" : "dark"

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#007aff",
                },
                text: {
                  primary: "#1d1d1f",
                  disabled: "rgba(0, 0, 0, 0.48)",
                },
                background: {
                  alt: "#fafafa",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#0a84ff",
                },
                text: {
                  primary: "#f5f5f7",
                  postBody: "#B1B1B6",
                  secondary: "#A1A1A6",
                  disabled: "#86868b",
                },
                background: {
                  alt: "rgb(22,22,22)",
                },
              }),
        },
      }),
    [mode]
  )

  theme = responsiveFontSizes(theme)

  return (
    <>
      <meta
        content={darkModeHook.value === true ? "#000" : "#fff"}
        name="theme-color"
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "block" }}>
          <Box sx={{ display: "block", margin: "auto", maxWidth: "1504px" }}>
            <Box sx={{ display: "flex" }} data-is-root-path={isRootPath}>
              <PanelLeft
                isRootPath={isRootPath}
                ThemeButton={<ThemeIconButton darkModeHook={darkModeHook} />}
              />
              <Box sx={{ display: "block", minWidth: 0, flex: "1 1 auto" }}>
                <Container
                  disableGutters
                  maxWidth="string"
                  sx={{
                    maxWidth: "692px",
                    py: "2rem",
                    "@media (max-width: 600px)": {
                      py: "1rem",
                      px: "1.5rem",
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
                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      {isRootPath && (
                        <Avatar
                          alt="Brian Ruiz"
                          src="https://www.b-r.io/avatar.png"
                          sx={{
                            width: 48,
                            height: 48,
                            backgroundColor: "divider",
                            "@media (min-width: 1080px)": {
                              display: "none",
                            },
                            "@media (max-width: 600px)": {
                              width: 40,
                              height: 40,
                            },
                          }}
                        >
                          BR
                        </Avatar>
                      )}

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
                    </Box>

                    {title && (
                      <IconButton sx={{ height: "fit-content" }}>
                        <MoreHorizIcon alt="More" />
                      </IconButton>
                    )}
                  </Box>
                </Container>
                <main style={{ minHeight: "calc((100vh - 360px) - 116px)" }}>
                  {children}
                </main>
                <footer>
                  <Container
                    disableGutters
                    sx={{
                      backgroundColor: "background.alt",
                      py: "4rem",
                      mt: "4rem",
                      pb: "8rem",
                    }}
                  >
                    <Container
                      disableGutters
                      maxWidth="string"
                      sx={{
                        maxWidth: "692px",
                        "@media (max-width: 600px)": {
                          px: "1.5rem",
                        },
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: "text.primary",
                              letterSpacing: 0,
                              fontWeight: "500",
                              lineHeight: "20px",
                            }}
                          >
                            More stories from Brian
                          </Typography>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            sx={{
                              borderRadius: "2rem",
                              textTransform: "none",
                              fontWeight: 400,
                            }}
                          >
                            Get Newsletter
                          </Button>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ maxWidth: "330px", color: "text.disabled" }}
                        >
                          Hey, enjoying the content? Subscribe to my newsletter
                          to stay up to date on new posts and more. P.S. No
                          spam, unsubscribe any time.
                        </Typography>
                      </Box>
                      {extraFooterContent}
                    </Container>
                  </Container>
                </footer>
              </Box>
              <PanelRight extraDrawerContent={extraDrawerContent} />
            </Box>
          </Box>
          <BottomNav isRootPath={isRootPath} darkModeHook={darkModeHook} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Layout
