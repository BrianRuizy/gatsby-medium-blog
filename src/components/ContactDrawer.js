import * as React from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

export default function ContactDrawer(props) {
  return (
    <Drawer
      anchor={"bottom"}
      open={props.open}
      onClose={props.onClose}
      PaperProps={{ elevation: 0 }}
      sx={{
        backdropFilter: "blur(4px)",
      }}
    >
      <Container maxWidth="sm">
        <form
          action="https://getform.io/f/faf8d119-4334-4fcc-ae56-2dc4de9cb453"
          method="POST"
        >
          <Box
            sx={{
              my: "2rem",
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: "1.5rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Reach out anytime! 👋
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: "360px",
                  lineHeight: "1.43",
                }}
              >
                Have any questions, feedback or want to say hi? Fill the form,
                or{" "}
                <Link href="mailto:brianruiz0123@gmail.com" color={"inherit"}>
                  email me
                </Link>{" "}
                whenever convenient.
              </Typography>
            </Box>
            <TextField
              id="outlined-name"
              label="Name"
              variant="filled"
              name="name"
              type={"text"}
            />
            <TextField
              id="outlined-email"
              label="Email"
              variant="[filled]"
              name="email"
              type={"email"}
              required
            />
            <TextField
              id="outlined-message"
              label="Message"
              variant="filled"
              placeholder="Something nice 😅"
              name="message"
              type={"text"}
              required
              multiline
              rows={3}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disableElevation
              type="submit"
              sx={{
                textTransform: "none",
                fontWeight: 400,
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </Drawer>
  )
}
