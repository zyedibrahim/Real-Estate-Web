import { API } from "./API";
import Box from "@mui/material/Box";
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
export function AllProperties() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "350px",
          backgroundPosition: "center", // Centers the image
          backgroundSize: "cover", // Ensures the image covers the entire box
          backgroundRepeat: "no-repeat", // Prevents repetition of the image
          backgroundAttachment: "fixed", // Fixes the background image while scrolling
          objectFit: "cover",
          marginTop: "20px",
          position: "absolute",
        }}
        component="img"
        src="https://media.istockphoto.com/id/599130788/photo/small-craftsman-one-story-exterior-with-wood-siding.jpg?s=1024x1024&w=is&k=20&c=NjoPHqT5haMsL8BR8VvxDmrQIWSGB27m9-BkEXqwzvI="
        alt="imagebanner"
      ></Box>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "rgba(41,57,76, 0.5)",
          width: "relative",
          height: "350px",
          top: "20px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",

              color: "white",
              position: "relative",
              top: "180px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: '"Roboto Condensed", sans-serif',
                fontWeight: 200,
                letterSpacing: "1px",
              }}
            >
              OUR EXCLUSIVE PROPERTIES
            </Typography>
            <Typography
              sx={{
                fontSize: "50px",
                fontFamily: '"Roboto Condensed", sans-serif',
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              All Properties
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "50px",
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
    </Box>
  );
}
