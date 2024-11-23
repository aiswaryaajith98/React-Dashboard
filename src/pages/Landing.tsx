import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures it fills the height of the viewport
        minWidth: "100vw", // Ensures it fills the width of the viewport
        backgroundColor: "#f7f9fc", // Light background matching the dashboard
        color: "#333",
        padding: "20px",
        textAlign: "center",
        overflow: "hidden", // Prevent scrollbars
        boxSizing: "border-box",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
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

      {/* Welcome Message */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "28px", sm: "36px", md: "48px" },
          color: "#2b2d42",
          letterSpacing: "1.5px",
          mb: 2,
        }}
      >
        Welcome to ThriveSync
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          color: "#6c757d",
          maxWidth: "600px",
          lineHeight: 1.6,
          mb: 4,
        }}
      >
        The ultimate platform to manage your daily tasks, health activities, and
        personal goals in one place.
      </Typography>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff", // Same button color as the dashboard
            color: "#fff",
            fontWeight: "600",
            padding: "12px 30px",
            fontSize: "16px",
            borderRadius: "12px",
            textTransform: "none",
            boxShadow: "0px 4px 6px rgba(0, 123, 255, 0.3)",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#007bff",
            color: "#007bff",
            fontWeight: "600",
            padding: "12px 30px",
            fontSize: "16px",
            borderRadius: "12px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#e9f4ff",
              borderColor: "#0056b3",
              color: "#0056b3",
            },
          }}
          onClick={() => navigate("/learn-more")}
        >
          Learn More
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "#6c757d", fontSize: "14px" }}
        >
          © {new Date().getFullYear()} Kenga. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
