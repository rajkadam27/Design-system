import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  RadioGroup,
  Radio,
  FormControlLabel,
  InputAdornment,
  CircularProgress,
  Fade
} from "@mui/material";
import { 
  ArrowBack,
  CheckCircle,
  Business,
  Language
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

const AddCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyname: "",
    companywebsite: "",
    isActive: "yes"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if (!formData.companyname.trim()) newErrors.companyname = "Company name required";
    if (!urlRegex.test(formData.companywebsite)) newErrors.companywebsite = "Invalid website URL";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Company Data:", formData);
      setIsSubmitting(false);
      navigate("/company");
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
            <Business sx={{ 
              fontSize: 50, 
              color: "#1976d2", 
              mb: 1,
              animation: `${pulse} 2s infinite`
            }} />
            <Typography variant="h4" fontWeight="bold" color="primary">
              Add New Company
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
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
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Website"
                  name="companywebsite"
                  value={formData.companywebsite}
                  onChange={handleChange}
                  error={!!errors.companywebsite}
                  helperText={errors.companywebsite}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Language color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
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
                    value={formData.isActive}
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
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
};

export default AddCompany;