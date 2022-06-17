import * as React from "react"
import { Link } from "gatsby"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: '40px' }}>
        <Typography variant="h1" 
          sx={{
            lineHeight: '52px',
            fontSize: '36px',
            fontWeight: '700',
          }}>
          <Link to="/">{title}</Link>
        </Typography>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>


      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
