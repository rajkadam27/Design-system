import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  InputAdornment,
  IconButton,
  CircularProgress,
  Fade,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import deviceImage from "../assets/device.jpg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEmail("");
      setPassword("");
      alert("Login successful!");
    } catch (error) {
      setLoginError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9", // Clean, light background
        p: 2,
      }}
    >
      <Fade in={true} timeout={600}>
        <Container
          maxWidth={false} // Override default maxWidth
          sx={{
            width: 320, // Slimmer width for a compact design
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            p: 3,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 32px rgba(110, 142, 251, 0.2)",
            },
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src={deviceImage}
              alt="Device"
              style={{
                width: 80,
                height: 80,
                marginBottom: 16,
                borderRadius: "50%",
                border: "2px solid #6e8efb",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                animation: `${bounce} 2s ease infinite`,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#6e8efb",
                mb: 2,
                animation: `${fadeIn} 0.6s ease`,
              }}
            >
              Samyojak Login
            </Typography>

            {loginError && (
              <Typography
                color="error"
                variant="body2"
                sx={{ mb: 2, fontSize: "0.85rem", transition: "opacity 0.3s ease" }}
              >
                {loginError}
              </Typography>
            )}

            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                size="small" // Smaller input for compactness
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#6e8efb", fontSize: 18 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "&:hover fieldset": {
                      borderColor: "#6e8efb",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6e8efb",
                      boxShadow: "0 0 6px rgba(110, 142, 251, 0.5)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#6e8efb",
                    "&.Mui-focused": { color: "#6e8efb" },
                  },
                }}
                autoComplete="email"
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "#6e8efb", fontSize: 18 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: "#6e8efb" }}
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ fontSize: 18 }} />
                        ) : (
                          <Visibility sx={{ fontSize: 18 }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "&:hover fieldset": {
                      borderColor: "#6e8efb",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6e8efb",
                      boxShadow: "0 0 6px rgba(110, 142, 251, 0.5)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#6e8efb",
                    "&.Mui-focused": { color: "#6e8efb" },
                  },
                }}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading}
                sx={{
                  py: 1,
                  borderRadius: 2,
                  backgroundColor: "#6e8efb",
                  textTransform: "none",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#5f7de8",
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 16px rgba(110, 142, 251, 0.4)",
                  },
                  "&:disabled": {
                    backgroundColor: "#b0c4ff",
                  },
                }}
              >
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <Link
              href="#"
              variant="body2"
              sx={{
                mt: 2,
                color: "#6e8efb",
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#5f7de8",
                  textDecoration: "underline",
                },
              }}
            >
              Forgot Password?
            </Link>
          </Box>
        </Container>
      </Fade>
    </Box>
  );
};

export default LoginPage;