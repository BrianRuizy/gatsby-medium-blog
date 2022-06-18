// defines mdx components styles to be used for post content
import * as React from "react"
import { Link } from "gatsby"

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
        mt: "2rem",
        "@media (max-width: 900px)": {
          fontSize: "18px",
          lineHeight: "30px",
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
        // mb: -2,
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
        // mb: -2,
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
  ul: props => <ul {...props} />,
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
        "@media (max-width: 900px)": {
          fontSize: "18px",
          lineHeight: "30px",
        },
      }}
    />
  ),
  hr: props => <Divider sx={{ mt: 6 }} />,
  a: props => <Link {...props} />,
}

export default shortcodes
