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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Alert from "@mui/material/Alert"
import Chip from "@mui/material/Chip"
import MuiLink from "@mui/material/Link"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"

const gear = {
  "Orbitkey Desk Mat": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/61Du63bfnlL._AC_SL1500_.jpg",
    desc: "Leather and Recycled PET Felt | Document Hideaway | Magnetic Cable Holder",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3Dm37eu",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Glorious GMMK Pro Mechanical keyboard": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/71Nk1Qb3PhS._AC_SL1500_.jpg",
    desc: "A 75% with rotary knob and hot swappable switches.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3U9tcE9",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Glorious Coiled Keyboard Cables": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/71lpNM41jVS._AC_SL1500_.jpg",
    desc: "USB-C Artisan Braided, Mechanical Keyboards",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3NSznKR",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Logitech MX Master 3S Mouse": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
    desc: "Ergonomic and comfortable to be used for all day use, love the scrolling!",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3U5syHG",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "BenQ ScreenBar Monitor Light": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/71FpP6myfPL._AC_SL1500_.jpg",
    desc: "Enhances immersion and focus, creates a comfortable environment",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3fUAfCi",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Anker USB C Hub, 341 USB-C Hub (7-in-1) with 4K HDMI": {
    category: "Desk Setup",
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
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/81ewD+orLSL._AC_SL1500_.jpg",
    desc: "A 3440 x 1440 IPS Display, great for multitasking.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3DJd86G",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Cable adhesive management clips": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/51SUkNq0zDL._AC_SL1000_.jpg",
    desc: "50pcs Cable Clips, Organizer Cord Holder, these are a must for a clean setup!",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3hjEiIy",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Brevite laptop and camera bag": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61kuICMElAL._AC_SL1500_.jpg",
    desc: "Compact Camera Backpack - A Minimalist & Travel-friendly",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3U5PTJo",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Nikon Z6 Full Frame Mirrorless": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61h9UPZ40TL._AC_SL1000_.jpg",
    desc: "Love the Z6 because it's great for photos and videos.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3T1CvGa",
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
    image: "https://m.media-amazon.com/images/I/61u8mYpACQL._AC_SL1500_.jpg",
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
    image: "https://m.media-amazon.com/images/I/61p2fYdYP+L._AC_SX679_.jpg",
    desc: "Awesome for action video, I use it for my POV shots.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3exkZuq",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },

  "Suptig Chest Mount for GoPro": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/81y-UqVnYAL._AC_SL1500_.jpg",
    desc: "This is how I record my bike rides :)",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3DonSG9",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Movo VXR10-PRO": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/71CUGiUL2dL._AC_SL1500_.jpg",
    desc: "Compact Shotgun Mic Compatible with Cameras and phones.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3EjYzH7",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "Movo LV1-USB Lavalier Microphone": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61eFtjXUWkL._AC_SL1500_.jpg",
    desc: "Lapel Microphone, Lav Mic, Clip on Microphone",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3WQ1nDe",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
    },
  },
  "ULANZI Camera Tripod": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61FTKuvhBeL._AC_SL1500_.jpg",
    desc: "Mini Flexible Tripod Stand, Universal use",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3Elzw6G",
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
          {"Brian's Gear"}
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
              label="Blog"
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
              label="Gear List"
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
          This is a list of the gear I actually own and recommend. The affiliate
          links come at no extra cost but it does however help support my
          content creation!
        </Alert>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {categories.map(category => (
            <Accordion
            defaultExpanded
              elevation={0}
              sx={{
                "& .MuiButtonBase-root.MuiAccordionSummary-root, .MuiAccordionDetails-root":
                  { padding: 0 }
              }}
            >
              <AccordionSummary
                id={category + "-header"}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                sx={{
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  },
                }}
              >
                <MuiLink
                  variant="h6"
                  underline="none"
                  sx={{
                    color: "text.primary",
                    fontWeight: "500",
                  }}
                  component="a"
                  href={"#" + category}
                >
                  {category}
                </MuiLink>
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
              </AccordionSummary>
              <AccordionDetails>
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
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.desc}
                              </Typography>
                              <Box sx={{ textAlign: "center", mt: 2 }}>
                                <Typography
                                  variant="caption"
                                  color="text.disabled"
                                >
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
                                      fullWidth
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
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
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
