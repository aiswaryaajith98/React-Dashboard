import { Box, Typography, Avatar, Paper, Button, Grid, IconButton} from "@mui/material";
import { Link, useNavigate  } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";

const RightSidebar = () => {
  const navigate = useNavigate();

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
      fontFamily: "'Coms Sans Ms', cursive",
      scrollbarWidth: "none", 
      "&::-webkit-scrollbar": {
        display: "none",
      },
      scrollBehavior: "smooth", 
    }}
    // ref={(ref) => {
    //   if (ref) {
    //     ref.scrollTop = ref.scrollHeight; // Automatically scroll to the bottom
    //   }
    // }}
  >
    {/* Sidebar Content */}
 
  
      {/* User Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar src="/images/female.jpeg" alt="Floyd Miles" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Elle Miles
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Free account
          </Typography>
        </Box>
      </Box>

      {/* Health Section */}
      <Paper
        sx={{
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Health
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} textAlign="center">
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007bff" }}>
              6:25
            </Typography>
            <Typography variant="body2">Hours</Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ff0000" }}>
              120
            </Typography>
            <Typography variant="body2">Bpm</Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#28a745" }}>
              1.84
            </Typography>
            <Typography variant="body2">Kcal</Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            backgroundColor: "#fef8e1",
            borderRadius: 2,
            padding: 2,
            marginTop: 2,
          }}
        >
          <Avatar
            src="/images/trainer-icon.png"
            alt="Trainer"
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Sign up for a personal trainer to improve your results
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                marginTop: 1,
                backgroundColor: "#ffc107",
                textTransform: "none",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>

    

      {/* Today Trainings */}
      <Paper
        sx={{
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Today Trainings
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            {
              title: "Box",
              club: "Sport Club",
              plank: 40,
              stretches: 20,
              backgroundColor: "#e0f7fa",
              color: "#007bff",
            },
            {
              title: "Crossfit",
              club: "Sport Club",
              plank: 20,
              stretches: 20,
              backgroundColor: "#ffebee",
              color: "#ff5252",
            },
          ].map((training, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: training.backgroundColor,
                padding: 2,
                borderRadius: 3,
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {training.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {training.club}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: training.color }}>
                  {training.plank}
                </Typography>
                <Typography variant="body2">Plank</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: training.color }}>
                  {training.stretches}
                </Typography>
                <Typography variant="body2">Stretches</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      <Paper
        sx={{
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Your Trainer
        </Typography>

            
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: 1,
          }}
        >
          <Avatar src="/images/trainer-2.png" alt="Trainer 2" sx={{ width: 40, height: 40 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Jacob Jones
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Boxing Coach
            </Typography>
          </Box>
          {/* Message Icon for Trainer 2 */}
          <Link to="/chat" style={{ textDecoration: "none" }}>
            <IconButton color="primary">
              <MessageIcon />
            </IconButton>
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: 1,
            marginTop: 2,
          }}
        >
          <Avatar src="/images/group-icon.png" alt="ThriveSync Group" sx={{ width: 40, height: 40 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              ThriveSync
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Group Chat
            </Typography>
          </Box>
          <IconButton color="primary" onClick={() => navigateToGroupChat("ThriveSync")}>
            <MessageIcon />
          </IconButton>
        </Box>
      
      </Paper>
      <br />
      <br />
    </Box>
  );
};

export default RightSidebar;