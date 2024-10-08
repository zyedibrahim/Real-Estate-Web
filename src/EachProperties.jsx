import { Box, Typography } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PhotoSizeSelectSmallIcon from "@mui/icons-material/PhotoSizeSelectSmall";

export function EachProperties() {
  return (
    <Box
      sx={{
        mt: 10,
        px: 10,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        textAlign: "center",
      }}
    >
      <Box sx={{ backgroundColor: "pink" }}>
        <Box component="h2">111251 terry street</Box>
        <Box>$15000</Box>
        <Box
          src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Property img"
          component="img"
          width="900px"
          height="500px"
          sx={{ objectFit: "cover" }}
        />

        <Box component="h3">Property Description</Box>
        <Box>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde odio
          porro rerum blanditiis, ut facilis laborum exercitationem iure aperiam
          quo sint laudantium, voluptates sed ipsa doloremque iusto perferendis
          debitis dolorum?
        </Box>

        <Box>
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
            <Box sx={{ textAlign: "center" }}>4</Box>
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
            <Box sx={{ textAlign: "center" }}>2</Box>
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
            <Box sx={{ textAlign: "center" }}>10</Box>
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
            <Box sx={{ textAlign: "center" }}>2000</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
