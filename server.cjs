// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");
// const cors = require("cors");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// // In-memory message storage
// const messages = [];

// // Fetch messages for a specific conversation
// const getMessagesForConversation = (sender, receiver) => {
//   return messages.filter(
//     (msg) =>
//       (msg.sender === sender && msg.receiver === receiver) ||
//       (msg.sender === receiver && msg.receiver === sender)
//   );
// };

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   // Handle request to fetch chat history
//   socket.on("fetchMessages", ({ sender, receiver }) => {
//     const chatHistory = getMessagesForConversation(sender, receiver);
//     socket.emit("chatHistory", chatHistory);
//   });

//   // Handle sending messages
//   socket.on("sendMessage", (message) => {
//     messages.push(message); // Save the message in memory
//     io.emit("receiveMessage", message); // Broadcast to all clients
//   });

  

//   socket.on("disconnect", () => {
//     console.log("A user disconnected:", socket.id);
//   });
// });

// server.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });



const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


const messages = []; 
const groupMessages = []; 

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  
  socket.on("fetchMessages", ({ sender, receiver }) => {
    const chatHistory = messages.filter(
      (msg) =>
        (msg.sender === sender && msg.receiver === receiver) ||
        (msg.sender === receiver && msg.receiver === sender)
    );
    socket.emit("chatHistory", chatHistory);
  });

  socket.on("sendMessage", (message) => {
    messages.push(message); 
    io.emit("receiveMessage", message); 
  });

  
  socket.on("fetchGroupMessages", () => {
    socket.emit("groupChatHistory", groupMessages);
  });

  socket.on("sendGroupMessage", (message) => {
    if (message.sender && message.content) {
      groupMessages.push(message);
      io.emit("receiveGroupMessage", message); 
    } else {
      console.error("Invalid group message format:", message);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
