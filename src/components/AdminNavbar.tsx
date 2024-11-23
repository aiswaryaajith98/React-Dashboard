import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Avatar,
    Badge,
  } from "@mui/material";
  import NotificationsIcon from "@mui/icons-material/Notifications";
  import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
  
  const AdminNavbar = () => {
    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  
    return (
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: "#333",
          boxShadow: "none",
          padding: "0 24px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Admin Tools */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <AdminPanelSettingsIcon sx={{ color: "#888" }} />
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333" }}>
              Admin Panel
            </Typography>
          </Box>
  
          {/* Date Display */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography variant="body2" sx={{ color: "#555", fontWeight: "500" }}>
              {currentDate}
            </Typography>
          </Box>
  
          {/* Notifications */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <IconButton>
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
  
            {/* Admin Avatar */}
            <Avatar
              alt="Admin Profile"
              src="/images/admin-avatar.png"
              sx={{ width: 36, height: 36 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default AdminNavbar;
  