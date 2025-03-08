import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Fade,
  InputAdornment,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Business,
  Settings,
  Storage,
  Memory,
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

const EditDevice = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyname: "Tech Solutions Inc.",
    devicename: "ABC",
    devicenumber: "123",
    version: "27",
    devicetoken: "7",
    devicetype: "remote",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyname.trim()) newErrors.companyname = "Company Name is required";
    if (!formData.devicename.trim()) newErrors.devicename = "Device Name is required";
    if (!formData.devicenumber.trim()) newErrors.devicenumber = "Device Number is required";
    if (!formData.version.trim()) newErrors.version = "Version is required";
    if (!formData.devicetoken.trim()) newErrors.devicetoken = "Device Token is required";
    if (!formData.devicetype.trim()) newErrors.devicetype = "Device Type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Device Data:", formData);
      alert("Device updated successfully!");
      navigate("/device");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable styles
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
            <Memory
              sx={{
                fontSize: 50,
                color: "primary.main",
                mb: 1,
                animation: `${pulse} 2s ease-in-out infinite`,
              }}
            />
            <Typography variant="h4" fontWeight="bold" color="primary">
              Edit Device
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Company Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  error={!!errors.companyname}
                  helperText={errors.companyname}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Business color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Device Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Device Name"
                  name="devicename"
                  value={formData.devicename}
                  onChange={handleChange}
                  error={!!errors.devicename}
                  helperText={errors.devicename}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Settings color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Device Number */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Device Number"
                  name="devicenumber"
                  value={formData.devicenumber}
                  onChange={handleChange}
                  error={!!errors.devicenumber}
                  helperText={errors.devicenumber}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Storage color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Version */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Version"
                  name="version"
                  value={formData.version}
                  onChange={handleChange}
                  error={!!errors.version}
                  helperText={errors.version}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Settings color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Device Token */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Device Token"
                  name="devicetoken"
                  value={formData.devicetoken}
                  onChange={handleChange}
                  error={!!errors.devicetoken}
                  helperText={errors.devicetoken}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Memory color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Device Type */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Device Type"
                  name="devicetype"
                  value={formData.devicetype}
                  onChange={handleChange}
                  error={!!errors.devicetype}
                  helperText={errors.devicetype}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Settings color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
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
                onClick={() => navigate("/device")}
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
                {isSubmitting ? "Updating..." : "Update Device"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
};

export default EditDevice;