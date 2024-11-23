import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Snackbar, Alert, Box, Typography, Paper } from "@mui/material";
import { AuthService } from "../services/AuthService";

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "error" | "success" }>({
    open: false,
    message: "",
    severity: "error",
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await AuthService.login(data.username, data.password);
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.role);
  
      setSnackbar({ open: true, message: "Login successful!", severity: "success" });
  
      setTimeout(() => {
        navigate(response.role === "admin" ? "/AdminDashboard" : "/UserDashboard");
      }, 1500);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setSnackbar({ open: true, message: errorMessage, severity: "error" });
    }
  };
  

  const handleCloseSnackbar = () => setSnackbar((prev) => ({ ...prev, open: false }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #d9e4f5, #f3f8ff)",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 6,
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#2b2d42" }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("username", { required: true })}
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.username}
            helperText={errors.username && "Username is required"}
          />
          <TextField
            {...register("password", { required: true })}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password && "Password is required"}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity={snackbar.severity} onClose={handleCloseSnackbar}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
