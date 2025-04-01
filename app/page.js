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
import Image from "next/image";
import Link from "next/link";

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
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MindfulAI
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
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
                    href="/chat"
                  >
                    Start Chatting
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    href="/learnMore"
                    sx={{ mr: 2 }}
                  >
                    Learn More
                  </Button>

                  <Link href="/therapy" passHref>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="large"
                      sx={{
                        margin: {
                          xs: "20px 0",
                        },
                        fontSize: {
                          xs: "13px",
                        },
                      }}
                    >
                      Therapy Centers
                    </Button>
                  </Link>
                </Box>
              </Grid>

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
                <Image
                  src="/mental.webp"
                  alt="MindfulAI"
                  layout="responsive"
                  width={600}
                  height={400}
                  objectFit="cover"
                  style={{ borderRadius: "0" }}
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
