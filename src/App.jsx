import "./App.css";
import React, { useState } from "react";
//import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { MainLayout } from "./components/MainLayout";
import { Dashboard } from "./components/Dashboard";
import { HealthDashboard } from "./components/HealthDashboard";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { useSelector } from "react-redux";

function App() {
  const userRedux = useSelector((state) => state.user.user);

  // code for google sign-in
  /*
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    setToken(token)
    const response = await fetch("http://127.0.0.1:5000/login/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    console.log("data", data)
    setIsLoggedIn(true)
    setUser(data)
  }

  const handleError = () => {
    console.log('Login Failed');
  }

  const checkLoginStatus = async () => {
    const response = await fetch("http://127.0.0.1:5000/login/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);
  }
  
  return (
    <>
    {isLoggedIn ? (
      <>  
        <h1>Welcome to the app, {user.name}</h1>
        <p>Email: {user.email}</p>
        <img src={user.profile_pic} alt="user" />

        <div>
          <p>Click here to check login status</p>
          <button onClick={checkLoginStatus}>Check Login Status</button>
        </div>

        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </>
    ) : (
      <>
      <h1>Sign in with Google</h1>
      <div className="card">
        <GoogleOAuthProvider clientId="876795760642-8d98jeq088u2tni81lc0220k79pcd2nq.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </GoogleOAuthProvider>
      </div>
      </>
    )}
    </>
  )
  
  */

  return (
    <>
      <BrowserRouter>
        {userRedux != null ? (
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/health" element={<HealthDashboard />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route index path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
