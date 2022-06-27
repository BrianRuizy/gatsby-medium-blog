import * as React from "react"
import { Link } from "gatsby"

import DrawerLeft from "./DrawerLeft"
import DrawerRight from "./DrawerRight"
import { Profiles } from "./socials"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import { StaticImage } from "gatsby-plugin-image"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"

import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';


import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";
import { Divider } from "@mui/material"


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

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
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box sx={{ display: "flex" }} data-is-root-path={isRootPath}>
          <DrawerLeft isRootPath={isRootPath} ThemeButton={<ThemeIconButton />} />
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
                  <MoreHorizIcon  alt="More"/>
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
          elevation={0}
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
              // open menu on click
              label="user"
              icon={
                <Box sx={{ width: "100%", maxWidth: "24px", borderRadius: "100px", overflow: "hidden"}}>
                  <StaticImage alt="br" src="../images/avatar.png" />
                </Box>
              }
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </BottomNavigation>
        </Paper>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={2}
      >
        <MenuList dense>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><AlternateEmailOutlinedIcon/></ListItemIcon>
            <ListItemText>Contact form</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><EmailOutlinedIcon/></ListItemIcon>
            <ListItemText>Subscribe to mail</ListItemText>
          </MenuItem>

          <Divider/>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><InstallMobileIcon/></ListItemIcon>
            <ListItemText>Install</ListItemText>
          </MenuItem>
{/* 
          {Object.keys(Profiles).map(key => {
          const profile = Profiles[key]
            return (
              <MenuItem key={key} onClick={handleClose}>
                <ListItemIcon><OpenInNewOutlinedIcon/></ListItemIcon>
                <ListItemText>
                  {profile.name}
                </ListItemText>
              </MenuItem>
            )
          })} */}

        </MenuList>
      </Menu>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Layout
