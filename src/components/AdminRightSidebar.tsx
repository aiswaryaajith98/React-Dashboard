import { Box, Typography, Avatar, Paper, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, IconButton } from "@mui/material";
import { Link, useNavigate} from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";



const AdminRightSidebar = () => {
  const navigate = useNavigate();
  const usersForMessaging = [
    { id: 1, name: "Elle Mies", avatar: "/images/female.jpeg" },
  
  ];

  const groupsForMessaging = [
    { id: 1, groupName: "ThriveSync", avatar: "/images/group-icon.png" },
  ];

  const navigateToGroupChat = (groupName: string) => {
    navigate("/groupchat", { state: { groupName } });
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        padding: 3,
        backgroundColor: "#f7f9fc",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderLeft: "1px solid #e0e0e0",
        position: "fixed",
        right: 0,
        top: 0,
        overflowY: "auto",
        fontFamily: "'Open Sans', sans-serif",
        
        scrollbarWidth: "none", 
        "&::-webkit-scrollbar": {
          display: "none", 
        },
        scrollBehavior: "smooth", 
      }}
    >
      {/* Admin Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar src="/images/admin-avatar.png" alt="Admin User" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Admin
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Administrator
          </Typography>
        </Box>
      </Box>

      {/* Statistics Section */}
      <Paper
        sx={{
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Key Metrics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} textAlign="center">
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff" }}>
              25
            </Typography>
            <Typography variant="body2">Active Users</Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff0000" }}>
              5
            </Typography>
            <Typography variant="body2">Pending Issues</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Messaging Section */}
      <Paper sx={{ padding: 2, borderRadius: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Messaging
        </Typography>
        <List>
          {usersForMessaging.map((user) => (
            <ListItem
              key={user.id}
              sx={{
                display: "flex",
                alignItems: "center",
               
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f1f3f5" },
              }}
            >
              <ListItemAvatar>
                <Avatar src={user.avatar} alt={user.name} />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                primaryTypographyProps={{
                  sx: {  color: "#333" },
                }}
              />
              <Link to="/chat" style={{ textDecoration: "none" }}>
                <IconButton color="primary">
                  <MessageIcon />
                </IconButton>
              </Link>
            </ListItem>
          ))}

          {groupsForMessaging.map((group) => (
            <ListItem
              key={group.id}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f1f3f5" },
              }}
              onClick={() => navigateToGroupChat(group.groupName)}
            >
              <ListItemAvatar>
                <Avatar src={group.avatar} alt={group.groupName} />
              </ListItemAvatar>
              <ListItemText
                primary={group.groupName}
                primaryTypographyProps={{
                  sx: { color: "#333" },
                }}
              />
              <IconButton color="primary">
                <MessageIcon />
              </IconButton>
            </ListItem>
          ))}
       
          
        </List>
      </Paper>

      {/* Recent Activities */}
      <Paper
        sx={{
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Recent Activities
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            { activity: "Added a new user role", time: "2 hours ago" },
            { activity: "Resolved an issue report", time: "5 hours ago" },
            { activity: "Updated system settings", time: "Yesterday" },
          ].map((activity, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">{activity.activity}</Typography>
              <Typography variant="caption" color="textSecondary">
                {activity.time}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

     

      {/* Admin Controls */}
      <Paper
        sx={{
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Admin Controls
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#007bff",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Add New User
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderColor: "#007bff",
              color: "#007bff",
            }}
          >
            Generate Reports
          </Button>
        </Box>
      </Paper>
      <br />
      <br />
      <br />
    </Box>
  );
};

export default AdminRightSidebar;
