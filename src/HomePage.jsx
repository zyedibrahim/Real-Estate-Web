import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PhotoSizeSelectSmallIcon from "@mui/icons-material/PhotoSizeSelectSmall";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { API } from "./API";
import { useNavigate } from "react-router-dom";
export function HomePage() {
  const [Bdata, setBdata] = useState([
    {
      icon: <LocalPhoneIcon sx={{ color: "red", fontSize: "50px" }} />,
      name: "Call Us",
      name2: "Free Call",
      name3: "1-800-000-000",
    },
    {
      icon: <LocationOnIcon sx={{ color: "red", fontSize: "50px" }} />,
      name: "Call Us",
      name2: "500 Terry Francine St.",
      name3: "San Francisco, CA 94158",
    },
    {
      icon: <EmailIcon sx={{ color: "red", fontSize: "50px" }} />,
      name: "Email Us",
      name2: "Direct Email",
      name3: "info@mysite.com",
    },
  ]);

  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: "20px", marginBottom: "150px" }}>
      <Box
        sx={{
          position: "absolute",
          backgroundImage:
            'url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundPosition: "center", // Centers the image
          backgroundSize: "cover", // Ensures the image covers the entire box
          backgroundRepeat: "no-repeat", // Prevents repetition of the image
          backgroundAttachment: "fixed", // Fixes the background image while scrolling
          width: "100%",
          height: "600px",
        }}
        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="houseimg"
      />
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "600px",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black color with 50% opacity
          zIndex: 1, // Makes sure the overlay is on top of the background image
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                position: "relative",
                marginTop: "200px",
                fontSize: "62px",
                fontFamily: '"Roboto Condensed", sans-serif',
                fontWeight: 400,
                letterSpacing: "1px",
                textAlign: "center",
              }}
            >
              NEW PEROPERTIES
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "white",
                position: "relative",
                marginTop: "5px",
                fontSize: "25px",
                fontFamily: '"Roboto Condensed", sans-serif',
                fontWeight: 200,
                letterSpacing: "4px",
                textAlign: "center",
              }}
            >
              EXCLUSIVELY BY DWELL
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: "80px",
            }}
          >
            <Button
              sx={{
                paddingX: "50px",
                backgroundColor: "#E50E0B",
                borderRadius: "0px",
              }}
              variant="contained"
              onClick={() => navigate("/All")}
            >
              Explore
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          paddingY: "65px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          letterSpacing: "5px",
        }}
      >
        <Typography
          sx={{
            letterSpacing: "5px",
            fontSize: "20px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          WHAT ARE YOU LOOKING FOR?
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {/* BUY Section */}
          <Grid
            onClick={() => navigate("/Buildings")}
            item
            xs={10}
            md={5}
            sx={{
              width: "400px", // Custom width
              height: "430px", // Custom height
              fontSize: "60px",
              fontFamily: '"Roboto Condensed", sans-serif',
              fontWeight: 500,
              letterSpacing: "2px",
              position: "relative",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              zIndex: 2,
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "red",
              },
            }}
          >
            {/* Dark Layer Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black opacity layer
                zIndex: 1,
              }}
            />
            {/* Text Content */}
            <Box sx={{ zIndex: 2 }}>BUY</Box>
          </Grid>

          {/* RENT Section */}
          <Grid
            onClick={() => navigate("/Rent")}
            item
            xs={10}
            md={5}
            sx={{
              width: "400px", // Custom width
              height: "430px", // Custom height
              fontSize: "60px",
              fontFamily: '"Roboto Condensed", sans-serif',
              fontWeight: 500,
              letterSpacing: "2px",
              position: "relative",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              zIndex: 2,
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "red",
              },
            }}
          >
            {/* Dark Layer Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgb(245,134,132,0.5)", // Custom opacity layer
                zIndex: 1,
              }}
            />
            {/* Text Content */}
            <Box sx={{ zIndex: 2 }}>RENT</Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          paddingY: "50px",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "300",
            color: "rgb(139,90,139)",
            fontFamily: '"Roboto Condensed", sans-serif',
          }}
        >
          NEW PROPERTIES
        </Typography>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "600",
            fontFamily: '"Roboto Condensed", sans-serif',
          }}
        >
          For Sale
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,

          padding: "20px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "center",
            },
            gap: "2px",
          }}
        >
          {API.slice(0, 4).map((ele, index) => (
            <Grid
              sx={{
                marginBottom: "20px",

                display: "flex",
                justifyContent: "center",
                // Set the Grid item width equal to the card width
                width: "370px",
              }}
              key={index}
              item
            >
              <Card sx={{ maxWidth: "370px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={ele.image}
                    alt={ele.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {ele.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      $ {ele.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingY: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "2px",

                      padding: "2px",
                    }}
                  >
                    <BedIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      Beds
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.beds}</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BathtubIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      Baths
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.baths}</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DomainAddIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      Level
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.level}</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PhotoSizeSelectSmallIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      sqfts
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.sqfts}</Box>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          marginTop: "0px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => navigate("/Buildings")}
          sx={{
            paddingX: "20px",
            backgroundColor: "#E50E0B",
            borderRadius: "0px",
          }}
          variant="contained"
        >
          VIEW MORE
        </Button>
      </Box>

      <Box
        sx={{
          paddingY: "80px",
          paddingX: "15px",
          mt: "50px",
          mb: "50px",
          backgroundColor: "#091D35",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "300",
            color: "white",
            fontFamily: '"Roboto Condensed", sans-serif',
            width: "1000px",
            textAlign: "center",
          }}
        >
          Investing in real estate is not just about acquiring property; it’s
          about creating a secure future, building wealth, and finding a place
          to call home. Choose wisely, for each property holds the potential to
          shape your financial landscape.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          paddingY: "50px",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "300",
            color: "rgb(139,90,139)",
            fontFamily: '"Roboto Condensed", sans-serif',
          }}
        >
          NEW PROPERTIES
        </Typography>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "600",
            fontFamily: '"Roboto Condensed", sans-serif',
          }}
        >
          For Rent
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,

          padding: "20px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "center",
            },
            gap: "2px",
          }}
        >
          {API.slice(0, 4).map((ele, index) => (
            <Grid
              sx={{
                marginBottom: "20px",

                display: "flex",
                justifyContent: "center",
                // Set the Grid item width equal to the card width
                width: "370px",
              }}
              key={index}
              item
            >
              <Card sx={{ maxWidth: "370px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={ele.image}
                    alt={ele.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {ele.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      $ {ele.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingY: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "2px",

                      padding: "2px",
                    }}
                  >
                    <BedIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      Beds
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.beds}</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BathtubIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      Baths
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.baths}</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DomainAddIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      Level
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.level}</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PhotoSizeSelectSmallIcon />
                    <Typography
                      sx={{
                        color: "#698CD0",
                        fontWeight: "300",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      sqfts
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>{ele.sqfts}</Box>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          marginTop: "0px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => navigate("/Rent")}
          sx={{
            paddingX: "20px",
            backgroundColor: "#E50E0B",
            borderRadius: "0px",
          }}
          variant="contained"
        >
          KNOW MORE
        </Button>
      </Box>
      <Box sx={{ marginY: "50px" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: '"Roboto Condensed", sans-serif',
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          YOUR DREAM HOUSE IS ONE STEP AWAY!
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "black",
          }}
        >
          {Bdata.map((ele, index) => (
            <Grid
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "red",
                marginY: "20px",
                padding: "20px",
              }}
              md={4}
              sm={10}
              xs={10}
              item
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <Box>{ele.icon}</Box>
                <Typography>{ele.name}</Typography>
                <Typography>{ele.name2}</Typography>
                <Typography>{ele.name3}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
