import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthService } from "./services/AuthService";
import { ChatProvider } from "./contexts/ChatContext";


const Login = React.lazy(() => import("./pages/Login"));
const UserDashboard = React.lazy(() => import("./pages/UserDashboard"));
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));
const Landing = React.lazy(() => import("./pages/Landing"));
const ChatPage = React.lazy(() => import("./pages/ChatPage"));
const GroupChatPage = React.lazy(() => import("./pages/GroupChatPage"));

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return AuthService.isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ChatProvider>
      <Router>
        <Suspense fallback={<div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '24px',
          textAlign: 'center',
        }}>
          Loading...
        </div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/userdashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admindashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/groupchat"
              element={
                <ProtectedRoute>
                  <GroupChatPage />
                </ProtectedRoute>
              }
            />
            
          </Routes>
        </Suspense>
      </Router>
    </ChatProvider>
  );
};

export default App;
