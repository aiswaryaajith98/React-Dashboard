import React, { createContext, useContext, useState, useEffect } from "react";
import ChatService from "../services/ChatService";

type ChatMessage = {
  sender: string;
  receiver: string;
  content: string;
  type: "text" | "file";
  fileName?: string;
};

const ChatContext = createContext<{
  messages: ChatMessage[];
  sendMessage: (message: ChatMessage) => void;
  loadMessages: (sender: string, receiver: string) => Promise<void>;
} | null>(null);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    ChatService.connect();

    ChatService.onMessage((message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      ChatService.disconnect();
    };
  }, []);

  const sendMessage = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
    ChatService.sendMessage(message);
  };

  const loadMessages = async (sender: string, receiver: string) => {
    ChatService.fetchMessages(sender, receiver, (history) => {
      setMessages(history);
    });
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, loadMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
