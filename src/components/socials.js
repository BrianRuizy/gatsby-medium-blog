import * as React from "react"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const profiles = {
  github: {
    name: "GitHub",
    url: "https://github.com/BrianRuizy",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    followers: "52",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brianruizy/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png",
    followers: "1227",
  },
  medium: {
    name: "Medium",
    url: "https://medium.com/@brianruizy",
    icon: "https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png",
    followers: "10",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/brianruizy/",
    icon: "https://johnhoward.on.ca/peterborough/wp-content/uploads/sites/12/2021/03/instagram-logo-svg-vector-for-print.svg",
    followers: "1117",
  },
}

const socials = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "300px",
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

      {Object.keys(profiles).map(key => {
        const profile = profiles[key]
        return (
          <Box
            key={profile.name}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Box>
                <Avatar
                  variant="square"
                  alt="avatar"
                  src={profile.icon}
                  sx={{ width: 24, height: 24 }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 500 }}>{profile.name}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {profile.followers} followers
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                height: "fit-content",
                borderRadius: "99em",
                textTransform: "capitalize",
              }}
              href={profile.url}
            >
              Follow
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}

export default socials
