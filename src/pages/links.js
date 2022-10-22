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

const profiles = {
  github: {
    name: "GitHub",
    url: "https://github.com/BrianRuizy",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brianruizy/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/brianruizy/",
    icon: "https://johnhoward.on.ca/peterborough/wp-content/uploads/sites/12/2021/03/instagram-logo-svg-vector-for-print.svg",
  },
  youtube: {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCCIFp-Se_xjfYc94H04oK7Q",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/768px-YouTube_full-color_icon_%282017%29.svg.png",
  },
  medium: {
    name: "Medium",
    url: "https://medium.com/@brianruizy",
    icon: "https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png",
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
            <Link to="/">Brian's Link tree</Link>
          </Typography>
        </Box>
      }
    >
      <Seo title={"Links"} />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          maxWidth: "692px",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
      >
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
