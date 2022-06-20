import * as React from "react"

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export default function About() {
  return (
    <Drawer
      sx={{
        display: "none",
        flexShrink: 0,
        "@media (min-width: 1200px)": {
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
          gap: 6,
          alignItems: "start",
          "@media (min-width: 1200px)": {
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
      <TextField label="Search" variant="outlined" size="small" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Avatar
          alt="Brian Ruiz"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEznEUEL5QCMA/profile-displayphoto-shrink_200_200/0/1584754543548?e=2147483647&v=beta&t=6pz6xtlRYMNdakEiOcMfaY3i5urZQZggz3vORlDCJ_A"
          sx={{ width: 56, height: 56 }}
        >
          BR
        </Avatar>
        <Typography variant="h6">Brian Ruiz</Typography>
        <Typography variant="subtitle1">1.6k Followers</Typography>
        <Typography
          variant="body2"
          sx={{ maxWidth: "300px", color: "text.secondary" }}
        >
          Hi, Brian here. I’m a Software Engineer who specializes in Python,
          data analytics, UI/UX, and product design. Here you’ll find my blog
          posts on all things tech.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{ borderRadius: "20px" }}
        >
          Subscribe
        </Button>
        <IconButton color="primary">
          <ForwardToInboxIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "auto",
          flexDirection: "row",
        }}
      >
        <Typography variant="caption">LeetCode |&nbsp;</Typography>
        <Typography variant="caption">GitHub |&nbsp;</Typography>
        <Typography variant="caption">LinkedIn</Typography>
      </Box>
    </Drawer>
  );
}
