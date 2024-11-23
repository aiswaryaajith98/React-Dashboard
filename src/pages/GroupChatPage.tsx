import GroupChat from "../components/GroupChat";
import { AuthService } from "../services/AuthService";

const GroupChatPage = () => {
  const username = AuthService.getUsername();
  const role = AuthService.getRole();

  if (!username || !role) {
    return <p>User not authenticated. Please log in.</p>;
  }

  

  return (
    <div>
      <GroupChat username={username} />
    </div>
  );
};

export default GroupChatPage;



