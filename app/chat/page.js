"use client";

import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "model",
      parts: [
        {
          text: "Hi there! I'm MindfulAI, here to listen and support you. How are you feeling today?",
        },
      ],
    },
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true);

    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", parts: [{ text: message }] },
      { role: "model", parts: [{ text: "" }] },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ history: [...messages], msg: message }),
      });

      if (!response.ok) {
        throw new Error("The network did not respond");
      }

      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const text = decoder.decode(value || new Uint8Array(), {
            stream: true,
          });
          setMessages((messages) => {
            let lastMessage = messages[messages.length - 1];
            let otherMessages = messages.slice(0, messages.length - 1);
            return [
              ...otherMessages,
              {
                ...lastMessage,
                parts: [{ text: lastMessage.parts[0].text + text }],
              },
            ];
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((messages) => [
        ...messages,
        {
          role: "model",
          parts: [
            {
              text: "An error occurred, please try again",
            },
          ],
        },
      ]);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#4a90e2",
      },
      secondary: {
        main: "#81c784",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="background.default"
        color="text.primary"
        overflow="hidden"
        position="relative"
        padding="0 16px"
      >
        <Button
          variant="contained"
          color="primary"
          href="/"
          sx={{ position: "absolute", top: 20, right: 20 }}
        >
          Home
        </Button>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          fontFamily={"monospace"}
          sx={{ mb: 3, mt: 3, textAlign: "left", width: "100%" }}
        >
          MindfulAI Chat
        </Typography>
        <Stack
          direction={"column"}
          width="100%"
          maxWidth="800px"
          height="100%"
          p={2}
          spacing={3}
          borderRadius={2}
          boxShadow={3}
          bgcolor="background.paper"
          overflow="hidden"
          sx={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            flexGrow={1}
            overflow="auto"
            sx={{
              paddingBottom: "20px",
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems={
                  message.role === "model" ? "flex-start" : "flex-end"
                }
                paddingX={1.5}
                width="100%"
                sx={{
                  backgroundColor:
                    message.role === "model" ? "#f0f0f0" : "#e0f7fa",
                  borderRadius: 2,
                  padding: 2,
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.primary"
                  component="div" // This line prevents wrapping <p> in <p>
                  sx={{ wordWrap: "break-word" }}
                >
                  <ReactMarkdown components={{ p: "span" }}>
                    {message.parts[0].text}
                  </ReactMarkdown>
                </Typography>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems="center"
            sx={{ mt: 1 }}
          >
            <TextField
              label="Send a message..."
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: 3,
                backgroundColor: "#fff",
              }}
            />
            <IconButton
              onClick={sendMessage}
              disabled={isLoading}
              color="primary"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
                borderRadius: "50%",
                padding: 1.5,
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <SendIcon />
              )}
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
