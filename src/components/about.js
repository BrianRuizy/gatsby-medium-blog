import React, { useState, useEffect } from "react"

import Tags from "./tagsPopular"

import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"

import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox"


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
          gap: "4rem",
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
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        sx={{ maxWidth: "330px", borderRadius: "10px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* <Avatar
          alt="Brian Ruiz"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEznEUEL5QCMA/profile-displayphoto-shrink_200_200/0/1584754543548?e=2147483647&v=beta&t=6pz6xtlRYMNdakEiOcMfaY3i5urZQZggz3vORlDCJ_A"
          sx={{ width: 56, height: 56 }}
        >
          BR
        </Avatar> */}
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
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
        <Button
          variant="text"
          size="small"
          sx={{ width: "fit-content", ml: "-5px" }}
        >
          Subscribe
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "330px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px !important",
            letterSpacing: 0,
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          Socials 
        </Typography>
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
            <Box>
              <Avatar
                alt="Brian Ruiz"
                src={"https://avatars.githubusercontent.com/u/23439187?v=4"}
                sx={{ width: 40, height: 40 }}
              />
              <Typography></Typography>
            </Box>
            <Box>
              <Typography sx={{fontWeight: 500}}>GitHub</Typography>
              <Typography variant="body2" sx={{color: 'text.secondary'}}>🎯 Focusing</Typography>
            </Box>
          </Box>
          <Button variant="outlined" size="small" sx={{height: 'fit-content', borderRadius: "99em", textTransform: "capitalize"}} href="https://github.com/BrianRuizy">Follow</Button>
        </Box>
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
            <Box>
              <Avatar
                alt="Brian Ruiz"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEznEUEL5QCMA/profile-displayphoto-shrink_200_200/0/1584754543548?e=2147483647&v=beta&t=6pz6xtlRYMNdakEiOcMfaY3i5urZQZggz3vORlDCJ_A"
                sx={{ width: 40, height: 40 }}
              />
              <Typography></Typography>
            </Box>
            <Box>
              <Typography sx={{fontWeight: 500}}>LinkedIn</Typography>
              <Typography variant="body2" sx={{color: 'text.secondary'}}>Software Engineer @ Hines</Typography>
            </Box>
          </Box>
          <Button variant="outlined" size="small" sx={{height: 'fit-content', borderRadius: "99em", textTransform: "capitalize"}}>Follow</Button>
        </Box>
   
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
            <Box>
              <Avatar
                alt="Brian Ruiz"
                src="https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/285163143_960347381277420_773234592344569591_n.webp?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=M6omc9Xu8HcAX8PiN6S&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MDcxMDM1NjQ4MzAzODMyOA%3D%3D.2-ccb7-5&oh=00_AT-EEptyTOT5gYxet_yAetLm1tsko4LEQwgYBRpxbG6-zA&oe=62B7F87D&_nc_sid=30a2ef 1080w,https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/285163143_960347381277420_773234592344569591_n.webp?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=M6omc9Xu8HcAX8PiN6S&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MDcxMDM1NjQ4MzAzODMyOA%3D%3D.2-ccb7-5&oh=00_AT-ndnX7gkCm6aY00QElKOpYfIle-gHDevJ1NMIPj9bjww&oe=62B7F87D&_nc_sid=30a2ef 750w,https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/285163143_960347381277420_773234592344569591_n.webp?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=M6omc9Xu8HcAX8PiN6S&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MDcxMDM1NjQ4MzAzODMyOA%3D%3D.2-ccb7-5&oh=00_AT9HnwV-8Ora2MwoGI7mGsTAv-1LrknaFj13-7BbWNkyZg&oe=62B7F87D&_nc_sid=30a2ef 640w,https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/285163143_960347381277420_773234592344569591_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=M6omc9Xu8HcAX8PiN6S&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MDcxMDM1NjQ4MzAzODMyOA%3D%3D.2-ccb7-5&oh=00_AT-JxDwbxx83xwAoKBCxwd2G2UHrz9GvIyEKntwkG899LQ&oe=62B7F87D&_nc_sid=30a2ef 480w,https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/285163143_960347381277420_773234592344569591_n.webp?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=M6omc9Xu8HcAX8PiN6S&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MDcxMDM1NjQ4MzAzODMyOA%3D%3D.2-ccb7-5&oh=00_AT-tDI8_zNCC4JDmcshiR_MNcS_8y0wUfUM9PknwCTk9Hw&oe=62B7F87D&_nc_sid=30a2ef 320w,https://instagram.fhou1-1.fna.fbcdn.net/v/t51.2885-15/285163143_960347381277420_773234592344569591_n.webp?stp=dst-jpg_e35_p240x240&_nc_ht=instagram.fhou1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=M6omc9Xu8HcAX8PiN6S&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MDcxMDM1NjQ4MzAzODMyOA%3D%3D.2-ccb7-5&oh=00_AT_h81TFxrO-j5TBVjLwHbBAibtIPoUtWUCgcBONNQp7dg&oe=62B7F87D&_nc_sid=30a2ef 240w"
                sx={{ width: 40, height: 40 }}
              />
              <Typography></Typography>
            </Box>
            <Box>
              <Typography sx={{fontWeight: 500}}>Instagram</Typography>
              <Typography variant="body2" sx={{color: 'text.secondary'}}>Houston | 🇭🇳 | 👨‍💻</Typography>
            </Box>
          </Box>
          <Button variant="outlined" size="small" sx={{height: 'fit-content', borderRadius: "99em", textTransform: "capitalize"}}>Follow</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "330px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px !important",
            letterSpacing: 0,
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          Recommended Tags
        </Typography>
        <Tags />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px !important",
            letterSpacing: 0,
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          Pinned 
        </Typography>
      </Box>
    </Drawer>
  )
}
