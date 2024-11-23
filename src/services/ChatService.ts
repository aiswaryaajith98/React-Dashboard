// import { io, Socket } from "socket.io-client";

// class ChatService {
//   private socket: Socket | null = null;

//   connect() {
//     this.socket = io("http://localhost:5000");
//   }

//   disconnect() {
//     if (this.socket) {
//       this.socket.disconnect();
//     }
//   }

//   sendMessage(message: { sender: string; receiver: string; content: string; type: string; fileName?: string }) {
//     this.socket?.emit("sendMessage", message);
//   }

//   onMessage(callback: (message: any) => void) {
//     this.socket?.on("receiveMessage", callback);
//   }

//   fetchMessages(sender: string, receiver: string, callback: (messages: any[]) => void) {
//     this.socket?.emit("fetchMessages", { sender, receiver });
//     this.socket?.on("chatHistory", callback);
//   }
// }

// export default new ChatService();



import { io, Socket } from "socket.io-client";

class ChatService {
  private socket: Socket | null = null;

  connect() {
    this.socket = io("http://localhost:5000");
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  // Private Chat Functionality
  sendMessage(message: { sender: string; receiver: string; content: string }) {
    this.socket?.emit("sendMessage", message);
  }

  onMessage(callback: (message: any) => void) {
    this.socket?.on("receiveMessage", callback);
  }

  fetchMessages(sender: string, receiver: string, callback: (messages: any[]) => void) {
    this.socket?.emit("fetchMessages", { sender, receiver });
    this.socket?.on("chatHistory", callback);
  }

  // Group Chat Functionality
  sendGroupMessage(message: { sender: string; content: string }) {
    this.socket?.emit("sendGroupMessage", message);
  }

  onGroupMessage(callback: (message: any) => void) {
    this.socket?.on("receiveGroupMessage", callback);
  }

  fetchGroupMessages(callback: (messages: any[]) => void) {
    this.socket?.emit("fetchGroupMessages");
    this.socket?.on("groupChatHistory", callback);
  }

}

export default new ChatService();
