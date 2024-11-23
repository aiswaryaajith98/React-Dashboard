export const AuthService = {
  login: async (username: string, password: string): Promise<{ token: string; role: string; username: string }> => {
    if (username === "admin" && password === "Admin@123") {
      const user = { token: "mock-jwt-token", role: "admin", username: "Admin User" };
      localStorage.setItem("token", user.token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("username", user.username);
      return user;
    } else if (username === "user" && password === "User@123") {
      const user = { token: "mock-jwt-token-user", role: "user", username: "Regular User" };
      localStorage.setItem("token", user.token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("username", user.username);
      return user;
    } else {
      throw new Error("Invalid credentials");
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
  },
  getToken: () => localStorage.getItem("token"),
  getRole: () => localStorage.getItem("role"),
  getUsername: () => localStorage.getItem("username"),
  isAuthenticated: () => !!localStorage.getItem("token"),
};
