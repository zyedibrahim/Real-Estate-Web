import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Routes, Route, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import { HomePage } from "./HomePage";
import { BuildingPage } from "./BuildingPage";
import { RentPage } from "./RentPage";
import { LandPage } from "./LandPage";
import { AllProperties } from "./AllProperties";
import ContactPage from "./ContactPage";
import NotFoundPage from "./NotFound";
import { Navbar } from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { EachProperties } from "./EachProperties";

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset CSS */}
      <>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Buildings" element={<BuildingPage />} />
            <Route path="/Rent" element={<RentPage />} />
            <Route path="/Land" element={<LandPage />} />
            <Route path="/All" element={<AllProperties />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/dwell/properties/:id" element={<EachProperties />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <footer>
          <Box
            component="footer"
            sx={{
              backgroundColor: "#091D35",
              color: "#fff",
              paddingY: "70px",
              marginTop: "auto", // Ensure footer is at the bottom
            }}
          >
            <Grid
              container
              display="flex"
              flexDirection="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ marginBottom: 1 }}
                >
                  DWELL Properties
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ marginBottom: 1 }}
                >
                  All Rights Reserved © {new Date().getFullYear()}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
