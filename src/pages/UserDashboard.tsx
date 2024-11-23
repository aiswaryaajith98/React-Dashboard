import { Box, Grid, Typography, Paper, Avatar, Button, Badge } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import StarIcon from "@mui/icons-material/Star";
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

const UserDashboard = () => {
  const donutData = {
    labels: ["Exercise", "Sleep", "Work"],
    datasets: [
      {
        data: [5, 8, 3],
        backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"],
        hoverOffset: 4,
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Calories Burned",
        data: [3000, 3200, 3500, 4000, 4500, 5000, 5200],
        borderColor: "#FF5722",
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const recentActivities = [
    { id: 1, activity: "Completed a 5km run", time: "2 hours ago" },
    { id: 2, activity: "Achieved daily step goal", time: "4 hours ago" },
    { id: 3, activity: "Joined a new training program", time: "Yesterday" },
  ];

  const leaderboard = [
    { id: 1, name: "John Doe", points: 1500, avatar: "/images/avatar1.png" },
    { id: 2, name: "Jane Smith", points: 1400, avatar: "/images/avatar2.png" },
    { id: 3, name: "Elle Miles", points: 1300, avatar: "/images/female.jpeg" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 180,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          maxWidth: "calc(100% - 430px)",
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          fontFamily: "'Comic Sans MS', cursive",
        }}
      >

        <Navbar onSearch={(query) => console.log("Search query:", query)} />

        <Box sx={{ marginLeft: "55px", width: "90%" }}>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              Hello, Elle!
            </Typography>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </Box>
          <Typography variant="subtitle1" color="textSecondary">
            Here is your daily statistics.
          </Typography>


          <Grid container spacing={3}>
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
                  src="/images/female.jpeg"
                  alt="Chicken"
                  sx={{ width: 60, height: 60, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Hi Elle, we have a new workout program for you.
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                    More Details
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
                  src="/images/female.jpeg"
                  alt="Chicken"
                  sx={{ width: 60, height: 60, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Elle, your free account ends in 25 days.
                  </Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }}>
                    Go Pro
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>


          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    textAlign: "left", // Align text to the left
                  }}
                >
                  Daily Task
                </Typography>
                <img
                  src="/images/5.png"
                  alt="Daily Task"
                  style={{
                    width: "70px", // Adjusted image size
                    display: "block", // Ensures proper alignment below the heading
                    margin: "12px auto", // Center the image horizontally
                  }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    textAlign: "center", mb: 2,
                  }}
                >
                  5 hours of training per day
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 2,
                    backgroundColor: "#007bff",
                    textTransform: "none",
                    borderRadius: "16px",
                    fontWeight: "bold",
                    display: "block",
                    margin: "0 auto", // Center the button
                    ":hover": {
                      backgroundColor: "#0056b3",
                    },
                  }}
                >
                 
                  Start Tracking
                </Button>
              </Paper>
            </Grid>


            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Progress
                </Typography>
                <Doughnut data={donutData} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  My Activity
                </Typography>
                <Box
                  sx={{
                    width: "100%", // Adjust the width
                    height: "178px", // Adjust the height
                    marginTop: 2,
                  }}
                >
                  <Line
                    data={lineData}
                    options={{
                      maintainAspectRatio: false, // This allows the graph to resize based on the height and width
                      responsive: true,
                      scales: {
                        x: {
                          ticks: {
                            font: {
                              size: 12, // Adjust font size for x-axis
                            },
                          },
                        },
                        y: {
                          ticks: {
                            font: {
                              size: 12, // Adjust font size for y-axis
                            },
                          },
                        },
                      },
                    }}
                  />
                </Box>
              </Paper>
            </Grid>

          </Grid>

          {/* Recent Activities */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Recent Activities
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: "12px" }}>
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

          {/* Leaderboard */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Leaderboard
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: "12px" }}>
              {leaderboard.map((player) => (
                <Box
                  key={player.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={player.avatar} alt={player.name} />
                    <Typography variant="body2">{player.name}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <StarIcon color="primary" />
                    <Typography variant="body2">{player.points}</Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          width: 250,
          flexShrink: 0,
          borderLeft: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
        }}
      >
        <RightSidebar />
      </Box>

    </Box>
  );
};

export default UserDashboard;
