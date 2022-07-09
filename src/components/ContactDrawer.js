<Drawer
anchor={"bottom"}
open={state["bottom"]}
onClose={toggleDrawer("bottom", false)}
PaperProps={{ elevation: 0 }}
sx={{
  backdropFilter: "blur(4px)",
}}
>
<Container maxWidth="sm">
  <form
    action="https://getform.io/f/faf8d119-4334-4fcc-ae56-2dc4de9cb453"
    method="POST"
    autocomplete="off"
  >
    <Box
      sx={{
        my: "2rem",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ mb: "1rem" }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Get in touch!
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary" }}
        >
          Want to work together? Let's connect!
        </Typography>
      </Box>
      <TextField
        id="outlined-name"
        label="Your name"
        variant="outlined"
        name="name"
        type={"text"}
      />
      <TextField
        id="outlined-email"
        label="Email"
        variant="outlined"
        name="email"
        type={"email"}
        required
      />
      <TextField
        id="outlined-message"
        label="Message"
        variant="outlined"
        placeholder="Something nice 😅"
        name="message"
        type={"text"}
        required
        multiline
        rows={4}
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