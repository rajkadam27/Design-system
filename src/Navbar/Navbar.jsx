import React, { useState } from "react";

const Navbar = ({ background, buttonColor }) => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
    setRegisterVisible(false); // Hide Register form when Login is clicked
  };

  const toggleRegister = () => {
    setRegisterVisible(!isRegisterVisible);
    setLoginVisible(false); // Hide Login form when Register is clicked
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setLoginVisible(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div style={{ backgroundColor: background, padding: "10px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "#fff" }}>My Navbar</h2>

        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: buttonColor,
                padding: "10px 20px",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={toggleLogin}
                style={{
                  backgroundColor: buttonColor,
                  padding: "10px 20px",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "10px",
                  borderRadius: "5px",
                }}
              >
                Login
              </button>
              <button
                onClick={toggleRegister}
                style={{
                  backgroundColor: buttonColor,
                  padding: "10px 20px",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Login Form */}
      {isLoginVisible && !isLoggedIn && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h3>Login</h3>
          <input
            type="text"
            placeholder="Username"
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: buttonColor,
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Login
          </button>
        </div>
      )}

      {/* Register Form */}
      {isRegisterVisible && !isLoggedIn && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h3>Register</h3>
          <input
            type="text"
            placeholder="Username"
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <input
            type="email"
            placeholder="email"
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="ConfirmPassword"
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <button
            style={{
              backgroundColor: buttonColor,
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
