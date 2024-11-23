import { Navigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

interface ProtectedRouteProps {
  children: JSX.Element;
  role?: "admin" | "user";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const isAuthenticated = AuthService.isAuthenticated();
  const userRole = AuthService.getRole();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
