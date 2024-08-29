"use client";
import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Grid,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image"; // Import the Next.js Image component

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a90e2",
    },
    secondary: {
      main: "#81c784",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* App Control Bar */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MindfulAI
            </Typography>
            {/* <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button> */}
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            {" "}
            {/* Increase container width for more space */}
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Welcome to MindfulAI
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ color: "text.secondary", mb: 4 }}
                >
                  Your AI-powered companion for mental health support
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "text.secondary" }}
                >
                  MindfulAI is here to listen, support, and guide you on your
                  journey to better mental health. Our AI chatbot offers 24/7
                  support, personalized coping strategies, and a judgment-free
                  space to express yourself.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mr: 2 }}
                  >
                    Start Chatting
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    href="/learnMore"
                  >
                    Learn More
                  </Button>
                </Box>
              </Grid>

              {/* Image Section */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Directly use Image without additional Box */}
                <Image
                  src="/mental.webp" // Replace with your actual image path
                  alt="MindfulAI"
                  layout="responsive"
                  width={600} // Larger width for better space coverage
                  height={400} // Maintain aspect ratio
                  objectFit="cover" // Cover the grid space nicely
                  style={{ borderRadius: "0" }} // Remove any rounded corners for blending
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
