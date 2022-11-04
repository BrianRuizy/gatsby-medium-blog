import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

import { MdNorthEast } from "react-icons/md"



const profiles = {
  github: {
    name: "GitHub",
    url: "https://github.com/BrianRuizy",
    icon: <FaGithub />,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brianruizy/",
    icon: <FaLinkedin />,
  },
  youtube: {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCCIFp-Se_xjfYc94H04oK7Q",
    icon: <FaYoutube />,
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/brianruizy/",
    icon: <FaInstagram />,
  },
}

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout
      location={location}
      title={
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Brian Ruiz"
            src="https://www.b-r.io/avatar.png"
            sx={{
              width: 48,
              height: 48,
              backgroundColor: "divider",
              "@media (min-width: 1080px)": {
                display: "none !important",
              },
            }}
          >
            BR
          </Avatar>

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
            <Link to="/">Brian's Links</Link>
          </Typography>
        </Box>
      }
    >
      <Seo title={"Links"} />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "692px",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
            value={2}
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: "1rem",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "text.primary",
                height: "1px",
              },
            }}
          >
            <Tab
              label="Home"
              active
              component="a"
              href="/"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="My Gear"
              active
              component="a"
              href="/gear"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="My Links"
              component="a"
              href="/links"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
          </Tabs>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {Object.keys(profiles).map(key => {
            const profile = profiles[key]
            return (
              <Button
                key={profile.name}
                href={profile.url}
                target="_blank"
                variant="outlined"
                fullWidth
                size="large"
                endIcon={profile.icon}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {profile.name}
              </Button>
            )
          })}
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
