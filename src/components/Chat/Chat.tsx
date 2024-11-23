import React, { useState, useEffect, useRef } from "react";
import { useChat } from "../../contexts/ChatContext";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Chat = ({ sender, receiver }: { sender: string; receiver: string }) => {
  const { messages, sendMessage, loadMessages } = useChat();
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadMessages(sender, receiver);
  }, [sender, receiver, loadMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage({ sender, receiver, content: newMessage, type: "text" });
      setNewMessage("");
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        sendMessage({
          sender,
          receiver,
          content: reader.result as string,
          type: "file",
          fileName: file.name,
        });
        setFile(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleLogout = () => {
   
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");

 
    navigate("/login");
  };

  const navigateBackToDashboard = () => {
    if (sender === "admin") {
      navigate("/admindashboard");
    } else if (sender === "user") {
      navigate("/userdashboard");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#007bff",
          px: 2,
          "@media (max-width: 768px)": { px: 1 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton onClick={navigateBackToDashboard}>
              <ArrowBackIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Avatar
              src="/images/avatar2.png"
              alt="Receiver Avatar"
              sx={{ width: 40, height: 40 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: "1rem",
                "@media (max-width: 768px)": { fontSize: "0.9rem" },
              }}
            >
              Chat with {receiver === "admin" ? "Admin" : "User"}
            </Typography>
          </Box>
          <IconButton onClick={handleLogout}>
            <LogoutIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Chat Body */}
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 2,
          backgroundColor: "#e5ddd5",
          "@media (max-width: 768px)": {
            padding: 1,
          },
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                msg.sender === sender ? "flex-end" : "flex-start",
              my: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                backgroundColor:
                  msg.sender === sender ? "#dcf8c6" : "#fff",
                color: "#000",
                padding: "8px 12px",
                borderRadius: "10px",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.2)",
                maxWidth: "60%",
                wordWrap: "break-word",
                fontSize: "0.9rem",
                "@media (max-width: 768px)": {
                  fontSize: "0.8rem",
                },
              }}
            >
              {msg.type === "text" ? (
                msg.content
              ) : (
                <>
                  File: {msg.fileName}
                  <a
                    href={msg.content}
                    download={msg.fileName}
                    style={{
                      color: "#007bff",
                      textDecoration: "underline",
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    Download
                  </a>
                </>
              )}
            </Typography>
          </Box>
        ))}
      </Paper>

      {/* Chat Input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#fff",
          boxShadow: "0 -1px 4px rgba(0,0,0,0.1)",
          "@media (max-width: 768px)": {
            padding: 1,
          },
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          sx={{
            backgroundColor: "#f8f9fa",
            borderRadius: "20px",
            "& fieldset": { border: "none" },
          }}
        />
        <IconButton
          onClick={() => fileInputRef.current?.click()}
          sx={{ mx: 1 }}
        >
          <AttachFileIcon />
        </IconButton>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          endIcon={<SendIcon />}
          sx={{
            backgroundColor: "#007bff",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
