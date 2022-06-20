// import * as React from "react"
// import { Link, graphql } from "gatsby"

// // Utilities
// import kebabCase from "lodash/kebabCase"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

// import Box from "@mui/material/Box"
// import Tabs from "@mui/material/Tabs"
// import Tab from "@mui/material/Tab"

// function LinkTab(props) {
//   return (
//     <Tab
//       disableRipple
//       component="a"
//       onChange={<Link to="/myPath"></Link>}
//       sx={{
//         "&.Mui-selected": {
//           color: "text.primary",
//         },
//       }}
//       {...props}
//     />
//   )
// }

// const About = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMdx.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Seo title="About" />
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/posts" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Seo title="About" />
//       <Box
//         sx={{
//           width: "100%",
//           borderBottom: 1,
//           borderColor: "divider",
//           mb: "32px",
//         }}
//       >
//         <Tabs
//           value={4}
//           aria-label="nav tabs example"
//           sx={{
//             "& .MuiTabs-indicator": {
//               backgroundColor: "text.primary",
//               height: "1px",
//             },
//           }}
//         >
//           <LinkTab label="Home" href="/" />
//           {data.allMdx.group.map(category => {
//             return (
//               <LinkTab
//                 label={category.fieldValue}
//                 to={`/${kebabCase(category.fieldValue)}/`}
//               />
//             )
//           })}
//           <LinkTab label="About" href="/about" />
//         </Tabs>
//       </Box>
//       <Bio />
//     </Layout>
//   )
// }

// export default About

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 200) {
//       group(field: frontmatter___category) {
//         fieldValue
//       }
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         timeToRead
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//           tags
//           featuredImage {
//             childImageSharp {
//               fluid(maxWidth: 800) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
