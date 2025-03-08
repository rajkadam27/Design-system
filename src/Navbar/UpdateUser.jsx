import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Fade,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Person,
  Email,
  Phone,
  AdminPanelSettings,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    role: "Admin",
    isActive: "yes",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(user.email)) newErrors.email = "Invalid email address";
    if (!phoneRegex.test(user.phone)) newErrors.phone = "Invalid phone number (10 digits)";
    if (!user.role.trim()) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Updated User Data:", user);
      alert("User Updated Successfully!");
      navigate("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable styles inspired by EditDevice
  const styles = {
    formContainer: {
      p: 4,
      width: { xs: "100%", md: 600 },
      borderRadius: 4,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
      "&:hover": { transform: "translateY(-3px)" },
    },
    inputField: {
      mb: 2,
      "& .MuiInputBase-root": { borderRadius: 2 },
    },
    button: {
      px: 4,
      borderRadius: 2,
      transition: "all 0.3s ease",
      "&:hover": { transform: "translateY(-2px)" },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        p: 3,
      }}
    >
      <Fade in={true} timeout={500}>
        <Paper sx={styles.formContainer}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Person
              sx={{
                fontSize: 50,
                color: "primary.main",
                mb: 1,
                animation: `${pulse} 2s ease-in-out infinite`,
              }}
            />
            <Typography variant="h4" fontWeight="bold" color="primary">
              Edit User
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* User ID */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="User ID"
                  name="id"
                  value={user.id}
                  disabled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* User Name and Email */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="User Name"
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
                  sx={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
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
                  sx={styles.inputField}
                />
              </Grid>

              {/* Phone Number and Role */}
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
                  sx={styles.inputField}
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
                        <AdminPanelSettings color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Is Active Radio Group */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    mt: 2,
                    p: 3,
                    border: "1px solid rgba(25, 118, 210, 0.2)",
                    borderRadius: 3,
                    backgroundColor: "rgba(25, 118, 210, 0.05)",
                    textAlign: "center",
                  }}
                >
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
                      label="Active"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio color="error" />}
                      label="Inactive"
                    />
                  </RadioGroup>
                </Box>
              </Grid>
            </Grid>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                gap: 2,
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowBack />}
                onClick={() => navigate("/dashboard")}
                sx={styles.button}
              >
                Back
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={
                  isSubmitting ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <CheckCircle />
                  )
                }
                disabled={isSubmitting}
                sx={styles.button}
              >
                {isSubmitting ? "Updating..." : "Update User"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
};

export default UpdateUser;