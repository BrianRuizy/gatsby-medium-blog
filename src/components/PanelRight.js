import * as React from "react"

// import TagsPopular from "./tagsPopular"
import Socials from "./socials"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"

import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import Typography from "@mui/material/Typography"

export default function RightDrawer({ extraDrawerContent }) {
  return (
    <Box
      sx={{
        display: "block",
        minHeight: "100vh",
        borderLeft: "1px solid",
        borderColor: "divider",
        width: "394px",
        "@media (max-width: 1240px)": {
          width: "280px",
        },
        "@media (max-width: 1080px)": {
          display: "none",
        }
      }}
    >
      <Box
        sx={{
          height: "100%",
          position: "relative",
          display: "inline-block",
          width: "100%",
        }}
      >
        <Box sx={{ position: "sticky", top: "0px", marginTop: "0px", display: "block"}}>
          <Box
            sx={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "packed",
              gap: "4rem",
            }}
          >
            <Box
              //action buttons
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                disableElevation
                fullWidth
                sx={{
                  backgroundColor: "text.primary",
                  borderColor: "divider",
                  borderRadius: "2rem",
                  textTransform: "none",
                  fontWeight: 400,
                }}
              >
                Subscribe to newsletter
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  color: "text.primary",
                  borderColor: "divider",
                  borderRadius: "2rem",
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontWeight: 400,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <SearchIcon fontSize="small" />
                  Search
                </Box>
                ⌘K
              </Button>
            </Box>
            {extraDrawerContent ? null : (
              <Box
                // user info
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Avatar
                  alt="Brian Ruiz"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQEznEUEL5QCMA/profile-displayphoto-shrink_200_200/0/1584754543548?e=2147483647&v=beta&t=6pz6xtlRYMNdakEiOcMfaY3i5urZQZggz3vORlDCJ_A"
                  sx={{ width: 64, height: 64 }}
                >
                  BR
                </Avatar>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "16px !important",
                    letterSpacing: 0,
                    fontWeight: "500",
                    lineHeight: "20px",
                    color: "text.primary",
                  }}
                >
                  Brian Ruiz
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ maxWidth: "300px", color: "text.secondary" }}
                >
                  Hi, Brian here. I’m a Software Engineer who specializes in
                  Python, data analytics, UI/UX, and product design. Here you’ll
                  find my blog posts on all things tech.
                </Typography>
              </Box>
            )}
            {extraDrawerContent}
            <Socials />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
