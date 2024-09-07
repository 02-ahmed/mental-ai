"use client";
import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Reuse the same theme as in the LandingPage
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

const therapyCenters = [
  {
    name: "Hope Therapy Center",
    address: "123 Main Street, Accra, Ghana",
    phone: "+233 24 123 4567",
  },
  {
    name: "Peace of Mind Clinic",
    address: "456 Peace Avenue, Kumasi, Ghana",
    phone: "+233 55 987 6543",
  },
  {
    name: "Serenity Counseling Center",
    address: "789 Wellness Road, Takoradi, Ghana",
    phone: "+233 20 111 2233",
  },
  {
    name: "Methuselah Ministry",
    address: "South La, Osu, Accra,",
    phone: "+233 30 290 4842",
  },
  {
    name: "Sena Pediatric Therapy",
    address: "Plot 2103, Adjirigano, First Block Factory, Accra",
    phone: "+233 54 747 6748",
  },
  {
    name: "University of Ghana Career and Counselling Centre (UGCCC)",
    address: "University of Ghana, Legon",
  },
];

const TherapyCentersPage = () => {
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
        {/* AppBar for consistent header */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MindfulAI
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                color="inherit"
                href="/" // Adjust the href to point to the home page
              >
                Home
              </Button>
              <Button
                color="inherit"
                href="/chat" // Adjust the href to point to the chat page
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#4a90e2",
                  },
                }}
              >
                Start Chatting
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="md" sx={{ mt: 4, flex: 1 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
              mt: 2,
            }}
          >
            Therapy Centers in Ghana
          </Typography>
          <List>
            {therapyCenters.map((center, index) => (
              <ListItem
                key={index}
                sx={{
                  borderBottom: "1px solid #ccc",
                  mb: 2,
                  p: 2,
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      {center.name}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        {center.address}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Phone: {center.phone}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default TherapyCentersPage;
