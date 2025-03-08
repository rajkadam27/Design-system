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
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Business,
  Settings,
  Phone,
  LocationOn,
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

const EditCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: 1,
    companyname: "ABC",
    plantname: "xyz",
    plantAdmin: "Super Admin",
    number: "1234567890",
    plantAddress: "Pune",
    isActive: "yes",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyname.trim()) newErrors.companyname = "Company Name is required";
    if (!formData.plantname.trim()) newErrors.plantname = "Plant Name is required";
    if (!formData.plantAdmin.trim()) newErrors.plantAdmin = "Plant Admin is required";
    if (!formData.number.trim()) newErrors.number = "Contact Number is required";
    if (!formData.plantAddress.trim()) newErrors.plantAddress = "Address is required";

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
      console.log("Plant Data:", formData);
      alert("Plant updated successfully!");
      navigate("/company");
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
      "& .MuiInputBase-root": {
        borderRadius: 2,
        // height: "40px", // Smaller height for input fields
      },
      "& .MuiInputLabel-root": {
        fontSize: "0.875rem", // Smaller label font size
      },
      "& .MuiInputBase-input": {
        fontSize: "0.875rem", // Smaller input font size
      },
    },
    button: {
      px: 4, // Reduced padding for buttons
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
            <Business
              sx={{
                fontSize: 50,
                color: "primary.main",
                mb: 1,
                animation: `${pulse} 2s ease-in-out infinite`,
              }}
            />
            <Typography variant="h4" fontWeight="bold" color="primary">
              Update Plant
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Plant ID */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Plant ID"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  error={!!errors.id}
                  helperText={errors.id}
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

              {/* Plant Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Plant Name"
                  name="plantname"
                  value={formData.plantname}
                  onChange={handleChange}
                  error={!!errors.plantname}
                  helperText={errors.plantname}
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

              {/* Plant Admin */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Plant Admin"
                  name="plantAdmin"
                  value={formData.plantAdmin}
                  onChange={handleChange}
                  error={!!errors.plantAdmin}
                  helperText={errors.plantAdmin}
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

              {/* Contact Number */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  error={!!errors.number}
                  helperText={errors.number}
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

              {/* Address */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Address"
                  name="plantAddress"
                  value={formData.plantAddress}
                  onChange={handleChange}
                  error={!!errors.plantAddress}
                  helperText={errors.plantAddress}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Is Active Radio Buttons */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="subtitle1">Is Active:</Typography>
                  <RadioGroup
                    row
                    name="isActive"
                    value={formData.isActive}
                    onChange={handleChange}
                    sx={{ justifyContent: "center" }} // Center radio buttons
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
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
                onClick={() => navigate("/company")}
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
                {isSubmitting ? "Updating..." : "Update Company"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
};

export default EditCompany;