import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Home } from "@mui/icons-material";

const NotFoundPage = () => {
  const handleHomeRedirect = () => {
    window.location.href = "/"; // Redirects to the home page
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 40, mb: 40 }}>
      <Typography variant="h1" sx={{ fontWeight: "bold", color: "#FF1744" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mt: 2, color: "#091D35" }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
        The page you are looking for does not exist or has been moved.
      </Typography>

      {/* Illustration */}
      <Box sx={{ mt: 4 }}>
        <img
          src="https://via.placeholder.com/400x200.png?text=404+Not+Found" // Replace with your illustration
          alt="Not Found"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<Home />}
        onClick={handleHomeRedirect}
        sx={{
          mt: 4,
          backgroundColor: "#091D35",
          "&:hover": {
            backgroundColor: "#F96F6C",
          },
        }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
