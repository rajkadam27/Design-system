import React from "react";
import { Card, CardContent, Typography, Grid, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import Device from '../assets/plant_img_01_002.png';

const plants = [
  { id: 1, name: "Plant A", address: "123 Street, NY", status: "Active", machines: 10 },
  { id: 2, name: "Plant B", address: "456 Avenue, CA", status: "Inactive", machines: 5 },
  { id: 3, name: "Plant C", address: "789 Road, TX", status: "Active", machines: 8 },
];

const PlantDashboard2 = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      {/* Back Button */}
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 3,
          background: "linear-gradient(135deg, #1565C0 30%, #0D47A1 90%)",
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "10px",
          px: 3,
          py: 1.2,
          boxShadow: 3,
          "&:hover": {
            background: "linear-gradient(135deg, #0D47A1 30%, #002171 90%)",
            boxShadow: 6,
            transform: "scale(1.05)",
          },
        }}
      >
        Back
      </Button>

      {/* Title */}
      <Typography variant="h5" fontWeight="700" mb={3} textAlign="center" color="#0D47A1">
        🌿 Plant Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {plants.map((plant) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
            <Card
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                width: "90%", 
                maxWidth: "280px",
                height: "280px", 
                boxShadow: 6,
                background: "linear-gradient(135deg, #ffffff 30%, #f5f5f5 90%)",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 10,
                  transform: "scale(1.05)",
                },
              }}
            >
              {/* Image Section */}
              <img
                src={Device}
                alt="Device"
                style={{ width: "100%", height: "160px", objectFit: "cover"}}
              />
              <CardContent sx={{ p: 2 }}>
                {/* Row 1: Plant Name & Status */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="body1" fontWeight="600" color="#1E88E5">
                    {plant.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: plant.status === "Active" ? "#2E7D32" : "#D32F2F", 
                      fontWeight: "600",
                      backgroundColor: plant.status === "Active" ? "#C8E6C9" : "#FFCDD2",
                      px: 1.2,
                      py: 0.5,
                      borderRadius: "5px",
                      fontSize: "0.85rem"
                    }}
                  >
                    {plant.status}
                  </Typography>
                </Box>

                {/* Row 2: Address */}
                <Box display="flex" alignItems="center" mb={1}>
                  <LocationOnIcon fontSize="small" sx={{ color: "#F57C00", mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "#333", fontSize: "0.9rem" }}>
                    {plant.address}
                  </Typography>
                </Box>

                {/* Row 3: Number of Machines */}
                <Box display="flex" alignItems="center">
                  <SettingsIcon fontSize="small" sx={{ color: "#43A047", mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "#555", fontWeight: "500", fontSize: "0.9rem" }}>
                    🏭 Machines: {plant.machines}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlantDashboard2;
