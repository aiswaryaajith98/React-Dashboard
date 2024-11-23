// import { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   IconButton,
//   AppBar,
//   Toolbar,
// } from "@mui/material";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import SendIcon from "@mui/icons-material/Send";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import LogoutIcon from "@mui/icons-material/Logout";
// import ChatService from "../services/ChatService";
// import { useNavigate } from "react-router-dom";

// interface GroupMessage {
//   sender: string;
//   content: string;
// }

// const GroupChat = ({ username }: { username: string }) => {
//   const [messages, setMessages] = useState<GroupMessage[]>([]);
//   const [newMessage, setNewMessage] = useState<string>("");
//   const [file, setFile] = useState<File | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const navigate = useNavigate();


//   useEffect(() => {
//     ChatService.connect();


//     ChatService.fetchGroupMessages((fetchedMessages) => {
//       setMessages(fetchedMessages);
//     });


//     ChatService.onGroupMessage((message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       ChatService.disconnect();
//     };
//   }, []);

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return;

//     const message = {
//       sender: username, 
//       content: newMessage,
//     };

//     ChatService.sendGroupMessage(message);
//     setNewMessage(""); 
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     localStorage.removeItem("username");
//     navigate("/login");
//   };

//   const navigateBackToDashboard = () => {
    
//     const role = localStorage.getItem("role");
//     if (role === "admin") {
//       navigate("/admindashboard");
//     } else {
//       navigate("/userdashboard");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh",
//         backgroundColor: "#f0f0f0",
//       }}
//     >
    
//       <AppBar position="static" sx={{ backgroundColor: "#007bff", px: 2 }}>
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
        
//           <IconButton onClick={navigateBackToDashboard}>
//             <ArrowBackIcon sx={{ color: "#fff" }} />
//           </IconButton>
//           <Typography
//             variant="h6"
//             sx={{ fontWeight: "bold", color: "#fff", fontSize: "1.1rem" }}
//           >
//             ThriveSync Group Chat
//           </Typography>
         
//           <IconButton onClick={handleLogout}>
//             <LogoutIcon sx={{ color: "#fff" }} />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

     
//       <Paper
//         elevation={1}
//         sx={{
//           flex: 1,
//           padding: 2,
//           margin: 2,
//           borderRadius: "12px",
//           overflowY: "auto",
//           backgroundColor: "#e5ddd5",
//         }}
//       >
//         {messages.map((message, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               justifyContent:
//                 message.sender === username ? "flex-end" : "flex-start",
//               my: 1,
//             }}
//           >
//             <Typography
//               sx={{
//                 backgroundColor:
//                   message.sender === username ? "#dcf8c6" : "#fff",
//                 padding: "8px 12px",
//                 borderRadius: "10px",
//                 boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
//                 maxWidth: "60%",
//                 wordWrap: "break-word",
//               }}
//             >
//               <strong>{message.sender}:</strong> {message.content}
//             </Typography>
//           </Box>
//         ))}
//       </Paper>

      
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           padding: 2,
//           backgroundColor: "#fff",
//           boxShadow: "0 -1px 4px rgba(0,0,0,0.1)",
//         }}
//       >
//         <TextField
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message"
//           sx={{
//             backgroundColor: "#f8f9fa",
//             borderRadius: "20px",
//             "& fieldset": { border: "none" },
//           }}
//         />
//         <IconButton onClick={() => fileInputRef.current?.click()} sx={{ mx: 1 }}>
//           <AttachFileIcon />
//         </IconButton>
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           onChange={handleFileChange}
//         />
//         <Button
//           variant="contained"
//           onClick={handleSendMessage}
//           endIcon={<SendIcon />}
//           sx={{
//             backgroundColor: "#007bff",
//             textTransform: "none",
//             ":hover": {
//               backgroundColor: "#0056b3",
//             },
//           }}
//         >
//           Send
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default GroupChat;


import { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatService from "../services/ChatService";
import { useNavigate } from "react-router-dom";

interface GroupMessage {
  sender: string;
  content: string;
}

const mockUsers = ["Alice", "Bob", "Charlie"]; // Mock user names
const mockMessages = [
  "Hello everyone!",
  "How's it going?",
  "This chat is awesome!",
  "What are you all up to?",
  "Good to see everyone here!",
]; // Mock messages

const GroupChat = ({ username }: { username: string }) => {
  const [messages, setMessages] = useState<GroupMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    ChatService.connect();

    ChatService.fetchGroupMessages((fetchedMessages) => {
      setMessages(fetchedMessages);
    });

    ChatService.onGroupMessage((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    const interval = setInterval(() => {
      const randomUser =
        mockUsers[Math.floor(Math.random() * mockUsers.length)];
      const randomMessage =
        mockMessages[Math.floor(Math.random() * mockMessages.length)];

      const mockMessage: GroupMessage = {
        sender: randomUser,
        content: randomMessage,
      };

      setMessages((prevMessages) => [...prevMessages, mockMessage]);
    }, 5000); // Sends a mock message every 5 seconds

    return () => {
      ChatService.disconnect();
      clearInterval(interval); 
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      sender: username,
      content: newMessage,
    };

    ChatService.sendGroupMessage(message); // Send message to the server
    setNewMessage(""); // Clear the input field
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
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admindashboard");
    } else {
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
      <AppBar position="static" sx={{ backgroundColor: "#007bff", px: 2 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton onClick={navigateBackToDashboard}>
            <ArrowBackIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", fontSize: "1.1rem" }}
          >
            ThriveSync Group Chat
          </Typography>
          <IconButton onClick={handleLogout}>
            <LogoutIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Paper
        elevation={1}
        sx={{
          flex: 1,
          padding: 2,
          margin: 2,
          borderRadius: "12px",
          overflowY: "auto",
          backgroundColor: "#e5ddd5",
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                message.sender === username ? "flex-end" : "flex-start",
              my: 1,
            }}
          >
            <Typography
              sx={{
                backgroundColor:
                  message.sender === username ? "#dcf8c6" : "#fff",
                padding: "8px 12px",
                borderRadius: "10px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                maxWidth: "60%",
                wordWrap: "break-word",
              }}
            >
              <strong>{message.sender}:</strong> {message.content}
            </Typography>
          </Box>
        ))}
      </Paper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#fff",
          boxShadow: "0 -1px 4px rgba(0,0,0,0.1)",
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
        <IconButton onClick={() => fileInputRef.current?.click()} sx={{ mx: 1 }}>
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

export default GroupChat;
