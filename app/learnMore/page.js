"use client";
import React from "react";
import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

const LearnMorePage = () => {
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
            <Button color="inherit" href="/">
              Home
            </Button>
            {/* <Button color="inherit" href="/learn-more">
              Learn More
            </Button> */}
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 8,
          }}
        >
          <Container maxWidth="md">
            {/* Introduction to MindfulAI */}
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              About MindfulAI
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "text.secondary", mb: 4, textAlign: "center" }}
            >
              MindfulAI is your AI-powered companion designed to provide
              emotional support and mental well-being assistance. Whether you
              are feeling stressed, anxious, or just need someone to talk to,
              MindfulAI is here to listen and offer personalized support
              strategies.
            </Typography>

            {/* Key Features Section */}
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textAlign: "center",
                mt: 6,
              }}
            >
              Key Features
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    component="img"
                    src="/247.png"
                    alt="24/7 Availability"
                    sx={{ height: 60, width: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      24/7 Availability
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      MindfulAI is always available, day or night, to provide
                      support whenever you need it. No waiting times or
                      appointments needed.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    component="img"
                    src="/personalised.png"
                    alt="Personalized Responses"
                    sx={{ height: 60, width: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      Personalized Responses
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      By learning from your interactions, MindfulAI tailors its
                      responses to your unique emotional needs, offering
                      personalized coping strategies.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    component="img"
                    src="/judgy.png"
                    alt="Judgment-Free Space"
                    sx={{ height: 60, width: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      Judgment-Free Space
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Feel comfortable expressing your thoughts and emotions in
                      a safe, non-judgmental environment.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    component="img"
                    src="/confidential.png"
                    alt="Confidential Support"
                    sx={{ height: 60, width: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      Confidential Support
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Your privacy is important. MindfulAI keeps your
                      conversations confidential, ensuring a secure environment
                      for open dialogue.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Benefits of AI in Therapy */}
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textAlign: "center",
                mt: 6,
              }}
            >
              Benefits of AI in Therapy
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "text.secondary", textAlign: "center", mb: 4 }}
            >
              Using AI for emotional support offers unique benefits, including
              constant availability, scalability to help many people at once,
              and the ability to provide immediate assistance during moments of
              distress. MindfulAI is an innovative tool that bridges the gap
              between traditional therapy and the need for ongoing mental health
              support.
            </Typography>

            {/* Psychology Facts Section */}
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textAlign: "center",
                mt: 6,
              }}
            >
              Did You Know?
            </Typography>
            <Grid container spacing={4}>
              {/* Fact 1 */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/brain3.png"
                    alt="Brain"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      The brain is the most energy-consuming organ, using up to
                      20% of the energy the body generates, despite being only
                      about 2% of the weight of the body.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Fact 2 */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/stress.jpg"
                    alt="Stress"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Chronic stress can lead to changes in the brain structure,
                      affecting areas responsible for memory and emotional
                      regulation, like the hippocampus.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Fact 3 */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/dream.jpg"
                    alt="Dreaming"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Dreaming is believed to play a crucial role in processing
                      emotions, consolidating memories, and problem-solving,
                      making it vital for mental health.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Fact 4 */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/empathy.jpg"
                    alt="Empathy"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Empathy, the ability to understand and share the feelings
                      of another, is linked to mirror neurons in the brain,
                      which activate when observing emotions of others.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LearnMorePage;
