import { Box, Grid, Typography, Paper, Avatar, Button, Badge, useMediaQuery, List, ListItem, ListItemText, IconButton } from "@mui/material";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import AdminRightSidebar from "../components/AdminRightSidebar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState, useEffect } from "react";

import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,

} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  const [open, setOpen] = useState(false);

  const notifications = [
    "User John completed a task.",
    "New user registration pending approval.",
    "System maintenance scheduled at 12:00 AM.",
    "5 tasks are overdue.",
    "Your profile was viewed 3 times today.",
  ];


  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      const container = document.getElementById("notification-list");
      if (container) {
        container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
      }
    }
  }, [open]);

  const donutData = {
    labels: ["Users", "Projects", "Tasks"],
    datasets: [
      {
        data: [25, 15, 10],
        backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"],
        hoverOffset: 4,
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Activities",
        data: [30, 45, 40, 60, 70, 90, 100],
        borderColor: "#FF5722",
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const recentActivities = [
    { id: 1, activity: "Approved new user registrations", time: "1 hour ago" },
    { id: 2, activity: "Reviewed project submissions", time: "3 hours ago" },
    { id: 3, activity: "Updated system configurations", time: "Yesterday" },
  ];

  const teamStatistics = [
    { id: 1, name: "Team A", progress: 80 },
    { id: 2, name: "Team B", progress: 60 },
    { id: 3, name: "Team C", progress: 90 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Comic Sans MS', cursive",
      }}
    >
      {/* Sidebar */}
      {!isMobile && (
        <Box
          sx={{
            width: isTablet ? 150 : 180,
            flexShrink: 0,
            fontFamily: "'Comic Sans MS', cursive",
          }}
        >
          <AdminSidebar />
        </Box>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          width: isMobile ? "100%" : "calc(100% - 430px)",
          padding: isMobile ? 2 : isTablet ? 3 : 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          fontFamily: "'Comic Sans MS', cursive",
        }}
      >
        <Navbar onSearch={(query) => console.log("Search query:", query)} />

        <Box
          sx={{
            marginLeft: isMobile ? 0 : isTablet ? "20px" : "55px",
            width: "90%",
            fontFamily: "'Comic Sans MS', cursive",
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Welcome, Admin!
            </Typography>
            {/* <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge> */}
            <IconButton onClick={toggleDropdown}>
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* Notification Dropdown */}
            {open && (
              <Paper
                elevation={3}
                sx={{
                  position: "absolute",
                  top: "40px",
                  right: 0,
                  width: "250px", // Compact width
                  maxHeight: "150px", // Fits two notifications
                  padding: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 10,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    textAlign: "center",
                    color: "#333",
                    borderBottom: "2px solid #f0f0f0",
                    pb: 1,
                  }}
                >
                  Notifications
                </Typography>
                <List>
                  {notifications.slice(0, 2).map((notification, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        padding: 1,
                        borderBottom: "1px solid #f1f3f5",
                        "&:hover": { backgroundColor: "#f9f9f9" },
                        "&:last-child": { borderBottom: "none" },
                      }}
                    >
                      <ListItemText
                        primary={notification}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#555",
                            lineHeight: "1.4",
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                {notifications.length > 2 && (
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: "#007bff",
                      fontSize: "0.8rem",
                      marginTop: 1,
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    onClick={() => alert("View all notifications clicked!")}
                  >
                    View All Notifications
                  </Typography>
                )}
              </Paper>
            )}
          </Box>
          <Typography variant="subtitle1" color="textSecondary">
            Monitor and manage the system activities here.
          </Typography>

          {/* Key Metrics */}
          <Grid container spacing={isMobile ? 1 : 3}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                }}
              >
                <Avatar
                  src="/images/project-icon.png"
                  alt="Project Icon"
                  sx={{ width: 60, height: 60, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    There are 5 projects awaiting your approval.
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                    Review Projects
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                }}
              >
                <Avatar
                  src="/images/user-icon.png"
                  alt="User Icon"
                  sx={{ width: 60, height: 60, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    10 users need account verification.
                  </Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }}>
                    Verify Users
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Grid container spacing={isMobile ? 1 : 3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: isMobile ? 1 : isTablet ? 2 : 3,
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  System Metrics
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Users, Projects, and Tasks
                </Typography>
                <Doughnut data={donutData} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                elevation={3}
                sx={{
                  padding: isMobile ? 1 : isTablet ? 2 : 3,
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Weekly Activities
                </Typography>
                <Line data={lineData} />
              </Paper>
            </Grid>
          </Grid>

          {/* Recent Activities */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Recent Activities
            </Typography>
            <Paper elevation={3} sx={{ padding: isMobile ? 1 : isTablet ? 2 : 3, borderRadius: "12px" }}>
              {recentActivities.map((activity) => (
                <Box
                  key={activity.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Typography variant="body2">{activity.activity}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {activity.time}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Box>

          {/* Team Statistics */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Team Progress
            </Typography>
            <Paper elevation={3} sx={{ padding: isMobile ? 1 : isTablet ? 2 : 3, borderRadius: "12px" }}>
              {teamStatistics.map((team) => (
                <Box
                  key={team.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Typography variant="body2">{team.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {team.progress}%
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Box>
        </Box>
      </Box>


      {!isMobile && (
        <Box
          sx={{
            width: isTablet ? 200 : 250,
            flexShrink: 0,
            borderLeft: "1px solid #e0e0e0",
            overflow: "hidden"
          }}
        >
          <AdminRightSidebar />
        </Box>
      )}
    </Box>
  );
};

export default AdminDashboard;
