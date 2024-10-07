import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here (e.g., sending data to an API)
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 20, mb: 40 }}>
      <Paper elevation={4} sx={{ padding: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#091D35" }}
        >
          Contact Us
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          We're here to help! Send us your questions or feedback.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Box>

          <Grid container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              endIcon={<Send />}
              type="submit"
              sx={{
                backgroundColor: "#091D35",
                "&:hover": {
                  backgroundColor: "#F96F6C",
                },
                paddingX: "30px",
                paddingY: "10px",
                textTransform: "none",
              }}
            >
              Send Message
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactPage;
