import * as React from "react"

// import TagsPopular from "./tagsPopular"
import Socials from "./socials"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"

import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Avatar from "@mui/material/Avatar"


export default function RightDrawer({ extraDrawerContent }) {
  return (
    <Drawer
      sx={{
        display: "none",
        flexShrink: 0,
        "@media (min-width: 1080px)": {
          display: "flex",
          width: "25%",
        },
        "@media (min-width: 1536px)": {
          width: "29.16666667%",
        },
        "& .MuiDrawer-paper": {
          display: "none",
          justifyContent: "packed",
          padding: 4,
          gap: "4rem",
          alignItems: "start",
          "@media (min-width: 1080px)": {
            display: "flex",
            width: "25%",
          },
          "@media (min-width: 1536px)": {
            width: "29.16666667%",
          },
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        sx={{ maxWidth: "330px", width: "100%", borderRadius: "10px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        { extraDrawerContent ? null : 
          <Avatar
            alt="Brian Ruiz"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEznEUEL5QCMA/profile-displayphoto-shrink_200_200/0/1584754543548?e=2147483647&v=beta&t=6pz6xtlRYMNdakEiOcMfaY3i5urZQZggz3vORlDCJ_A"
            sx={{ width: 64, height: 64 }}
          >
            BR
          </Avatar>
        }
      
        <Typography variant="h3"   
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
          Hi, Brian here. I’m a Software Engineer who specializes in Python,
          data analytics, UI/UX, and product design. Here you’ll find my blog
          posts on all things tech.
        </Typography>
      </Box>
      {extraDrawerContent}
      <Socials />     
    </Drawer>
  )
}
