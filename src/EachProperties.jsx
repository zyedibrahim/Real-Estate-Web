import { Box, Typography } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PhotoSizeSelectSmallIcon from "@mui/icons-material/PhotoSizeSelectSmall";
import Grid from "@mui/material/Grid";
import { API } from "./API";
import { useParams } from "react-router-dom";

export function EachProperties() {
  const { id } = useParams();

  const eachdata = API.find((ele) => ele._id === id);

  console.log();

  return (
    <Box
      sx={{
        mt: 25,
        px: "20px",
        py: "20px",
        mb: 20,
        flexGrow: "1",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
          md={8}
          sm={10}
          xs={12}
          item
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "oswald-medium, oswald, sans-serif",
                fontSize: "40px",
                fontStyle: "normal",
                fontVariantCaps: "normal",
                fontVariantEastAsian: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
                fontWeight: 700,
              }}
            >
              {eachdata?.name}
            </Typography>
          </Box>
          <Box
            sx={{
              fontFamily: "oswald-medium, oswald, sans-serif",
              fontSize: "30px",
              fontWeight: 700,
              color: "#E50E0B",
            }}
            item
          >
            $15000
          </Box>
          <Box
            src={eachdata?.image}
            alt="Property img"
            component="img"
            height="500px"
            sx={{
              objectFit: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "overlay",
              filter: "grayscale(100%)",
              transition: "filter 0.3s ease-in-out",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "40px",
                fontStyle: "normal",
                fontVariantCaps: "normal",
                fontVariantEastAsian: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
                fontWeight: 650,
              }}
            >
              Property Description
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "roboto-thin, roboto, sans-serif",
                fontSize: "20px",
                fontStyle: "normal",
                fontVariantCaps: "normal",
                fontVariantEastAsian: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
                fontWeight: 300,
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              odio porro rerum blanditiis, ut facilis laborum exercitationem
              iure aperiam quo sint laudantium, voluptates sed ipsa doloremque
              iusto perferendis debitis dolorum? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Vitae impedit quasi adipisci odio?
              Rerum incidunt explicabo culpa similique impedit obcaecati veniam
              voluptate excepturi quod, repellendus laudantium ratione in
              inventore tenetur!
            </Typography>
          </Box>

          <Grid container sx={{ display: "flex" }}>
            <Grid
              xs={4}
              md={3}
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2px",
                mb: 5,
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
              <Box sx={{ textAlign: "center" }}>4</Box>
            </Grid>
            <Grid
              md={3}
              xs={4}
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mb: 5,
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
              <Box sx={{ textAlign: "center" }}>2</Box>
            </Grid>
            <Grid
              xs={4}
              md={3}
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mb: 5,
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
              <Box sx={{ textAlign: "center" }}>10</Box>
            </Grid>
            <Grid
              md={3}
              xs={4}
              item
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
              <Box sx={{ textAlign: "center" }}>2000</Box>
            </Grid>
            <Grid
              md={3}
              xs={4}
              item
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
                Build Year
              </Typography>
              <Box sx={{ textAlign: "center" }}>2000</Box>
            </Grid>
            <Grid
              md={3}
              xs={4}
              item
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
                Main Location
              </Typography>
              <Box sx={{ textAlign: "center" }}>2000</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
