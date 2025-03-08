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
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Business,
  Settings,
  Storage,
  Memory,
  LocalGasStation,
  Science,
  Thermostat,
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

const AddMachine = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyname: "",
    plantname: "",
    machineName: "",
    devicetype: "",
    device: "",
    sectionname: "",
    machinetype: "",
    modelnumber: "",
    partnumber: "",
    manufacturer: "",
    oiltankcpacity: "",
    fueloillevel: "",
    oiltype: "",
    reserveoil: "",
    concentrationlowerlevel: "",
    concentrationupperlevel: "",
    phlowerlevel: "",
    phupperlevel: "",
    temperaturelowerlevel: "",
    temperatureupperlevel: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyname.trim()) newErrors.companyname = "Company Name is required";
    if (!formData.plantname.trim()) newErrors.plantname = "Plant Name is required";
    if (!formData.machineName.trim()) newErrors.machineName = "Machine Name is required";
    if (!formData.devicetype.trim()) newErrors.devicetype = "Device Type is required";
    if (!formData.device.trim()) newErrors.device = "Device is required";
    if (!formData.sectionname.trim()) newErrors.sectionname = "Section Name is required";
    if (!formData.machinetype.trim()) newErrors.machinetype = "Machine Type is required";
    if (!formData.modelnumber.trim()) newErrors.modelnumber = "Model Number is required";
    if (!formData.partnumber.trim()) newErrors.partnumber = "Part Number is required";
    if (!formData.manufacturer.trim()) newErrors.manufacturer = "Manufacturer is required";
    if (!formData.oiltankcpacity.trim()) newErrors.oiltankcpacity = "Oil Tank Capacity is required";
    if (!formData.fueloillevel.trim()) newErrors.fueloillevel = "Fuel Oil Level is required";
    if (!formData.oiltype.trim()) newErrors.oiltype = "Oil Type is required";
    if (!formData.reserveoil.trim()) newErrors.reserveoil = "Reserve Oil is required";
    if (!formData.concentrationlowerlevel.trim()) newErrors.concentrationlowerlevel = "Concentration Lower Level is required";
    if (!formData.concentrationupperlevel.trim()) newErrors.concentrationupperlevel = "Concentration Upper Level is required";
    if (!formData.phlowerlevel.trim()) newErrors.phlowerlevel = "pH Lower Level is required";
    if (!formData.phupperlevel.trim()) newErrors.phupperlevel = "pH Upper Level is required";
    if (!formData.temperaturelowerlevel.trim()) newErrors.temperaturelowerlevel = "Temperature Lower Level is required";
    if (!formData.temperatureupperlevel.trim()) newErrors.temperatureupperlevel = "Temperature Upper Level is required";

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
      console.log("Machine Data:", formData);
      alert("Machine added successfully!");
      navigate("/plants");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable styles
  const styles = {
    formContainer: {
      p: 4,
      width: { xs: "100%", md: 700 },
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
            <Memory
              sx={{
                fontSize: 50,
                color: "primary.main",
                mb: 1,
                animation: `${pulse} 2s ease-in-out infinite`,
              }}
            />
            <Typography variant="h4" fontWeight="bold" color="primary">
              Add New Machine
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* First Row */}
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Machine Name"
                  name="machineName"
                  value={formData.machineName}
                  onChange={handleChange}
                  error={!!errors.machineName}
                  helperText={errors.machineName}
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

              {/* Device Section */}
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Device"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  error={!!errors.device}
                  helperText={errors.device}
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
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Section Name"
                  name="sectionname"
                  value={formData.sectionname}
                  onChange={handleChange}
                  error={!!errors.sectionname}
                  helperText={errors.sectionname}
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

              {/* Machine Related Section */}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  Machine Related
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Machine Type"
                  name="machinetype"
                  value={formData.machinetype}
                  onChange={handleChange}
                  error={!!errors.machinetype}
                  helperText={errors.machinetype}
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
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Model Number"
                  name="modelnumber"
                  value={formData.modelnumber}
                  onChange={handleChange}
                  error={!!errors.modelnumber}
                  helperText={errors.modelnumber}
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
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Part Number"
                  name="partnumber"
                  value={formData.partnumber}
                  onChange={handleChange}
                  error={!!errors.partnumber}
                  helperText={errors.partnumber}
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
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Manufacturer"
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleChange}
                  error={!!errors.manufacturer}
                  helperText={errors.manufacturer}
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

              {/* Machine Oil Section */}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  Machine Oil Related
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Oil Tank Capacity (in L)"
                  name="oiltankcpacity"
                  value={formData.oiltankcpacity}
                  onChange={handleChange}
                  error={!!errors.oiltankcpacity}
                  helperText={errors.oiltankcpacity}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalGasStation color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Fuel Oil Level (in L)"
                  name="fueloillevel"
                  value={formData.fueloillevel}
                  onChange={handleChange}
                  error={!!errors.fueloillevel}
                  helperText={errors.fueloillevel}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalGasStation color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Oil Type"
                  name="oiltype"
                  value={formData.oiltype}
                  onChange={handleChange}
                  error={!!errors.oiltype}
                  helperText={errors.oiltype}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalGasStation color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Reserve Oil (in L)"
                  name="reserveoil"
                  value={formData.reserveoil}
                  onChange={handleChange}
                  error={!!errors.reserveoil}
                  helperText={errors.reserveoil}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalGasStation color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Concentration Section */}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  Concentration
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Concentration Lower Level"
                  name="concentrationlowerlevel"
                  value={formData.concentrationlowerlevel}
                  onChange={handleChange}
                  error={!!errors.concentrationlowerlevel}
                  helperText={errors.concentrationlowerlevel}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Science color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Concentration Upper Level"
                  name="concentrationupperlevel"
                  value={formData.concentrationupperlevel}
                  onChange={handleChange}
                  error={!!errors.concentrationupperlevel}
                  helperText={errors.concentrationupperlevel}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Science color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* pH Section */}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  pH
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="pH Lower Level"
                  name="phlowerlevel"
                  value={formData.phlowerlevel}
                  onChange={handleChange}
                  error={!!errors.phlowerlevel}
                  helperText={errors.phlowerlevel}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Science color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="pH Upper Level"
                  name="phupperlevel"
                  value={formData.phupperlevel}
                  onChange={handleChange}
                  error={!!errors.phupperlevel}
                  helperText={errors.phupperlevel}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Science color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>

              {/* Temperature Section */}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  Temperature
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Temperature Lower Level"
                  name="temperaturelowerlevel"
                  value={formData.temperaturelowerlevel}
                  onChange={handleChange}
                  error={!!errors.temperaturelowerlevel}
                  helperText={errors.temperaturelowerlevel}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Thermostat color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Temperature Upper Level"
                  name="temperatureupperlevel"
                  value={formData.temperatureupperlevel}
                  onChange={handleChange}
                  error={!!errors.temperatureupperlevel}
                  helperText={errors.temperatureupperlevel}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Thermostat color="action" />
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
                onClick={() => navigate("/plants")}
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
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
};

export default AddMachine;