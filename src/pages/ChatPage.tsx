import Chat from "../components/Chat/Chat";
import { AuthService } from "../services/AuthService";

const ChatPage = () => {
  const role = AuthService.getRole();
  const username = AuthService.getUsername();

  if (!role || !username) {
    return <p>User not authenticated. Please log in.</p>;
  }


  const sender = role === "admin" ? "admin" : "user";
  const receiver = role === "admin" ? "user" : "admin";

  return (
    <div>
      {/* <h1>Chat with {receiver === "admin" ? "Admin" : "User"}</h1> */}
      <Chat sender={sender} receiver={receiver} />
    </div>
  );
};

export default ChatPage;
