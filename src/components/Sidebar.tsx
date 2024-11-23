import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <Box
      sx={{
        width: 180,
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 3,
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      {/* Logo */}
      <Box sx={{ textAlign: "center" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="95" fill="#007bff" />
          <circle cx="70" cy="70" r="25" fill="#f7f9fc" />
          <circle cx="130" cy="130" r="20" fill="#ffffff" />
          <line
            x1="70"
            y1="70"
            x2="130"
            y2="130"
            stroke="#f7f9fc"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="130"
            y1="70"
            x2="70"
            y2="130"
            stroke="#f7f9fc"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M50 120 Q100 180, 150 120"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M50 80 Q100 20, 150 80"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </Box>

      {/* Navigation Menu */}
      <List>
        {[
          {
            text: "Activity",
            icon: <FitnessCenterIcon sx={{ color: "#5f63f2" }} />,
          },
          {
            text: "Analytics",
            icon: <BarChartIcon sx={{ color: "#5f63f2" }} />,
          },
          {
            text: "Training Plan",
            icon: <CalendarTodayIcon sx={{ color: "#5f63f2" }} />,
          },
          {
            text: "Settings",
            icon: <SettingsIcon sx={{ color: "#5f63f2" }} />,
          },
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={{
              
              backgroundColor: index === 0 ? "#f7f8fa" : "transparent",
              borderRadius: "12px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f7f8fa" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {item.icon}
              <ListItemText
                primary={item.text}
                sx={{
                  color: "#333",
                  fontWeight: index === 0 ? "bold" : "normal",
                  marginLeft: 2,
                  fontSize: "0.95rem",
                }}
              />
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Go Pro Section */}
      <Box
        sx={{
          backgroundColor: "#f7f8fa",
          borderRadius: "12px",
          padding: 2,
          textAlign: "center",
          mb: 4,
        }}
      >
        <img
          src="/images/6.png"
          alt="Go Pro"
          style={{ width: "80px", marginBottom: "1px" }}
        />
        <Typography
          variant="body2"
          sx={{ color: "#555", mb: 2 }}
        >
          Set Pro account to explore premium features.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffc107",
            color: "#333",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "12px",
          }}
        >
          Go Pro
        </Button>
      </Box>

      {/* Logout Button */}
      

      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Button
          variant="text"
          onClick={handleLogout}
          sx={{
            color: "#333", // Neutral dark color for text
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "14px",
            borderRadius: "12px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px", // Spacing between text and icon
            transition: "all 0.2s ease",
            "&:hover": {
              color: "#ff4d4f", // Subtle red on hover
              backgroundColor: "rgba(255, 77, 79, 0.1)", // Light red background
            },
            "&:active": {
              color: "#d32f2f", // Slightly darker red on click
              backgroundColor: "rgba(211, 47, 47, 0.2)",
            },
          }}
        >
          <LogoutIcon sx={{ fontSize: "20px" }} /> {/* Logout icon */}
          Log Out
        </Button>
      </Box>

    </Box>
  );
};

export default Sidebar;
