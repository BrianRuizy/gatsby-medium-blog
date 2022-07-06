// import * as React from "react"

// import Box from "@mui/material/Box"
// import Paper from "@mui/material/Paper"
// import Button from "@mui/material/Button"
// import Container from "@mui/material/Container"
// import Drawer from '@mui/material/Drawer';
// import TextField  from "@mui/material/TextField"
// import Typography from "@mui/material/Typography"


// export default function ContactDrawer() {
//   const [state, setState] = React.useState({
//     bottom: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };


//   return (

//     <Drawer
//     anchor={"bottom"}
//     open={state["bottom"]}
//     onClose={toggleDrawer("bottom", false)}
//     PaperProps={{elevation: 1}}
//   >
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           my: "4rem",
//           gap: "1rem",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Box sx={{ mb: "1rem" }}>
//           <Typography variant="h5" sx={{ fontWeight: 700 }}>
//             Get in touch!
//           </Typography>
//           <Typography variant="body1" sx={{ color: "text.secondary" }}>
//             Want to work together? Let's connect!
//           </Typography>
//         </Box>

//         <TextField
//           id="outlined-name"
//           label="Your name"
//           variant="outlined"
//           autoFocus
//         />
//         <TextField
//           id="outlined-email"
//           label="Email"
//           variant="outlined"
//           required
//         />
//         <TextField
//           id="outlined-message"
//           label="Message"
//           variant="outlined"
//           placeholder="Something nice 😅"
//           required
//           multiline
//           rows={4}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           fullWidth
//           disableElevation
//           sx={{
//             textTransform: "none",
//             fontWeight: 400,
//             backgroundColor: "text.primary",
//             borderColor: "divider",
//           }}
//         >
//           Send
//         </Button>
//       </Box>
//     </Container>
//   </Drawer>


//   )
// }
  


