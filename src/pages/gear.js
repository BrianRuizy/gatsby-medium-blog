import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import BackpackIcon from "@mui/icons-material/Backpack"
import Alert from "@mui/material/Alert"
import Chip from "@mui/material/Chip"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

const gear = {
  "Glorious GMMK Pro Mechanical keyboard": {
    category: "My Desk setup",
    image: "https://m.media-amazon.com/images/I/71Nk1Qb3PhS._AC_SL1500_.jpg",
    desc: "A 75% with rotary knob and hot swappable switches.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3U9tcE9",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Logitech MX Master 3S Mouse": {
    category: "My Desk setup",
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
    desc: "Ergonomic and perfect for all day use, love the scrolling!",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3U5syHG",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Nikon Z6 Full Frame Mirrorless": {
    category: "Camera Gear",
    image:
      "https://m.media-amazon.com/images/I/61h9UPZ40TL._AC_SL1000_.jpg",
    desc: "Love the Z6 because it's great for photos and videos.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3T1CvGa",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Orbitkey Desk Mat": {
    category: "My Desk setup",
    image: "https://m.media-amazon.com/images/I/61Du63bfnlL._AC_SL1500_.jpg",
    desc: "Leather and Recycled PET Felt | Document Hideaway | Magnetic Cable Holder",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3Dm37eu",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Anker USB C Hub, 341 USB-C Hub (7-in-1) with 4K HDMI": {
    category: "My Desk setup",
    image: "https://m.media-amazon.com/images/I/61thMtrP5rL._AC_SL1500_.jpg",
    desc: "The one cable solution for my MacBook Pro.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3Dk9vCV",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "LG 34WN780-B UltraWide Monitor 34in 21:9 QHD": {
    category: "My Desk setup",
    image: "https://m.media-amazon.com/images/I/81ewD+orLSL._AC_SL1500_.jpg",
    desc: "A 3440 x 1440 IPS Display, great for multitasking.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3DJd86G",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Nikon NIKKOR Z 28mm f/2.8": {
    category: "Camera Gear",
    image:
      "https://ik.imagekit.io/kit/products/e4/bb/nikkor-z-28mm-f-2-8-e4bbd44f78ee3423c2db3a13f117e0e8.png?tr=dpr-1,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
    desc: "My main for walking around, with very useful aperture.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3To5UdA",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "NIKON NIKKOR Z 50mm f/1.8 S": {
    category: "Camera Gear",
    image:
      "https://m.media-amazon.com/images/I/61u8mYpACQL._AC_SL1500_.jpg",
    desc: "One of my main sit down lenses, with awesome bokeh.",

    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3yEqnmj",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "GoPro HERO10 Black action camera": {
    category: "Camera Gear",
    image:
      "https://m.media-amazon.com/images/I/61p2fYdYP+L._AC_SX679_.jpg",
    desc: "Awesome for action video, I use it for my POV shots.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3exkZuq",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
 
}

const GearPage = ({ data, location }) => {

  const categories = Object.keys(gear).reduce((acc, key) => {
    const category = gear[key].category
    if (!acc.includes(category)) {
      acc.push(category)
    }
    return acc
  }, [])

  return (
    <Layout
      location={location}
      title={
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            sx={{
              mr: 1,
              backgroundColor: "action.selected",
              color: "text.primary",
            }}
          >
            <BackpackIcon fontSize="small" />
          </IconButton>
          {"Brian's Gear List"}
        </Box>
      }
    >
      <Seo title={"My Gear"} />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          maxWidth: "692px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          "@media (max-width: 600px)": {
            gap: "1.5rem",
            px: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
            value={1}
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: "1rem",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "text.primary",
                height: "1px",
              },
            }}
          >
           
          <Tab
              label="Home"
              active
              component="a"
              href="/"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="My Gear"
              active
              component="a"
              href="/gear"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="My Links"
              component="a"
              href="/links"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
          </Tabs>
        </Box>
        <Alert
          severity="info"
          sx={{
            backgroundColor: "primary.light",
            color: "primary.dark",
            "& .MuiSvgIcon-root": { color: "primary.dark" },
          }}
          icon={"🧐"}
        >
          This is a list of the gear I actually own and recommend. The
          affiliate links come at no extra cost but it does 
          however help support my content creation!
        </Alert>

        {categories.map(category => (
          <>
            <Box
              sx={{
                display: "flex",
                // borderBottom: 1,
                borderColor: "divider",
                pt: "1rem",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "500" }}>
                {category}
              </Typography>
              <Chip
                disabled
                size="small"
                label={
                  Object.keys(gear).filter(
                    key => gear[key].category === category
                  ).length > 1
                    ? `${
                        Object.keys(gear).filter(
                          key => gear[key].category === category
                        ).length
                      } items`
                    : `${
                        Object.keys(gear).filter(
                          key => gear[key].category === category
                        ).length
                      } item`
                }
              />
            </Box>
            <Grid container spacing={2}>
              {Object.keys(gear).map(key => {
                const item = gear[key]
                if (item.category === category) {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={key}>
                      <Card
                        variant="outlined"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          "@media (max-width: 600px)": {
                            flexDirection: "row",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt="green iguana"
                          height={160}
                          width={160}
                          sx={{
                            objectFit: "contain",
                            padding: 1,
                            height: "160px !important",
                            width: "160px !important",
                            "@media (max-width: 600px)": {
                              height: "120px !important",
                              width: "120px !important",
                            },
                          }}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            sx={{
                              fontWeight: "700",
                              lineHeight: "22px",
                              fontSize: "18px !important",
                              letterSpacing: "0",
                              color: "text.primary",
                              transition: "color 0.2s ease-in-out",
                              "@media (max-width: 600px)": {
                                fontSize: "16px !important",
                              },
                            }}
                          >
                            {key}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.desc}
                          </Typography>
                          <Box sx={{ textAlign: "center", mt: 2 }}>
                            <Typography variant="caption" color="text.disabled">
                              Buy it on
                            </Typography>
                          </Box>
                          <CardActions
                            sx={{
                              p: 0,
                              justifyContent: "center",
                              flexWrap: "wrap",
                              rowGap: "6px",
                            }}
                          >
                            {Object.keys(item.stores).map(key => {
                              const store = item.stores[key]
                              return (
                                <Button
                                  key={key}
                                  variant="outlined"
                                  sx={{
                                    height: "28px",
                                    borderColor: "divider",
                                  }}
                                  href={store.affiliateLink}
                                  target="_blank"
                                >
                                  <img
                                    src={store.icon}
                                    alt={key}
                                    style={{
                                      objectFit: "contain",
                                      backgroundPosition: "center center",
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",
                                      height: "100%",
                                    }}
                                  />
                                </Button>
                              )
                            })}
                          </CardActions>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                }
              })}
            </Grid>
          </>
        ))}
      </Container>
    </Layout>
  )
}

export default GearPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
