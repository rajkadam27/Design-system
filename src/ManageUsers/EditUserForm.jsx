import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Typography,
  Paper,
  Grid,
  Fade,
  CircularProgress,
  InputAdornment,
  IconButton
} from "@mui/material";
import { 
  ArrowBack,
  Person,
  Email,
  Phone,
  Lock,
  CheckCircle,
  Edit
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const EditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState({
    id: id,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    role: "Admin",
    isActive: "yes",
  });

  useEffect(() => {
    // Simulate API call
    // fetchUserData();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(user.email)) newErrors.email = "Invalid email address";
    if (!phoneRegex.test(user.phone)) newErrors.phone = "Invalid phone number";
    if (!user.role) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Updated User Data:", user);
      setIsSubmitting(false);
      navigate("/manage-user");
    }, 1500);
  };

  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      p: 3
    }}>
      <Fade in={true} timeout={500}>
        <Paper sx={{ 
          p: 4, 
          width: { xs: "100%", md: 600 },
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)"
          }
        }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Edit sx={{ 
              fontSize: 50, 
              color: "#1976d2", 
              mb: 1,
              animation: `${pulse} 2s infinite`
            }} />
            <Typography variant="h4" fontWeight="bold" color="primary">
              Edit User Profile
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Role"
                  name="role"
                  value={user.role}
                  onChange={handleChange}
                  error={!!errors.role}
                  helperText={errors.role}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ 
                  mt: 2,
                  p: 3,
                  border: "1px solid rgba(25, 118, 210, 0.2)",
                  borderRadius: 3,
                  backgroundColor: "rgba(25, 118, 210, 0.05)",
                  textAlign: "center"
                }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Account Status
                  </Typography>
                  <RadioGroup
                    row
                    name="isActive"
                    value={user.isActive}
                    onChange={handleChange}
                    sx={{ justifyContent: "center", gap: 4 }}
                  >
                    <FormControlLabel 
                      value="yes" 
                      control={<Radio color="success" />} 
                      label={
                        <Typography variant="body1" color="textPrimary">
                          Active
                        </Typography>
                      } 
                    />
                    <FormControlLabel 
                      value="no" 
                      control={<Radio color="error" />} 
                      label={
                        <Typography variant="body1" color="textPrimary">
                          Inactive
                        </Typography>
                      } 
                    />
                  </RadioGroup>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              mt: 4,
              gap: 2
            }}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowBack />}
                onClick={() => navigate("/manage-user")}
                sx={{
                  px: 4,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateX(-5px)"
                  }
                }}
              >
                Back
              </Button>
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />}
                disabled={isSubmitting}
                sx={{
                  px: 4,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)"
                  }
                }}
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
};

export default EditUserForm;