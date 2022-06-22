// defines mdx components styles to be used for post content
import * as React from "react"
import { Link } from "gatsby"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

const shortcodes = {
  p: props => (
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
        mt: "1.5rem",
        "@media (max-width: 900px)": {
          fontSize: "18px",
          lineHeight: "28px",
          mt: "1rem",
        },
      }}
      {...props}
    />
  ),
  h1: props => (
    <Typography
      variant="h2"
      sx={{
        fontSize: "22px !important",
        fontWeight: "900",
        lineHeight: "28px",
        letterSpacing: "0",
        mt: "3.14em",
        "@media (max-width: 900px)": {
          fontSize: "20px !important",
        },
      }}
      {...props}
    />
  ),
  h2: props => (
    <Typography
      variant="h3"
      sx={{
        fontSize: "20px !important",
        letterSpacing: "0",
        mt: "2.37em",
        fontWeight: "700",
        "@media (max-width: 900px)": {
          fontSize: "18px !important",
        },
      }}
      {...props}
    />
  ),
  blockquote: props => (
    <Typography
      variant="h2"
      sx={{
        pl: 2,
        my: "2rem",
        color: "text.secondary",
        lineHeight: "32px",
        borderLeft: "2px solid ",
        borderColor: "text.primary",
        fontStyle: "italic",
        "& > p": {
          fontWeight: "400",
          letterSpacing: "-0.003em",
          lineHeight: "inherit",
          m: "unset",
        },
        "@media (max-width: 900px)": {
          "& > p": {
            fontSize: "20px",
          },
        },
      }}
      {...props}
    />
  ),
  ul: props => (
    <ul
      {...props}
      style={{ 
        paddingLeft: "1rem", 
        marginBottom: "4rem", 
        marginTop: "2rem" 
      }}
    />
  ),
  li: props => (
    <li
      {...props}
      style={{
        marginTop: "1.14em",
        marginBottom: "-0.46em",
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
      }}
    />
  ),
  hr: props => <Divider sx={{ mt: 6 }} />,
  a: props => <Link {...props} />,
  img: props => (
    <Box {...props} sx={{ mt: "2rem", textAlign: "center" }}>
      <img {...props} style={{ width: "100%" }} />
      <figcaption>
        <Typography
          variant="caption"
          sx={{
            lineHeight: "20px",
            fontSize: "14px",
            color: "text.secondary",
            letterSpacing: 0,
          }}
        >
          {props.alt}
        </Typography>
      </figcaption>
    </Box>
  ),
}

export default shortcodes
