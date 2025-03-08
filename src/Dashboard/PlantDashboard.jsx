import React from "react";
import { Card, CardContent, Typography, Grid, Box, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Device from "../assets/device.jpg";

const plants = [
  { id: 1, name: "Plant A", address: "123 Street", status: "Active", machines: 10 },
  { id: 2, name: "Plant B", address: "456 Avenue", status: "Inactive", machines: 5 },
  { id: 3, name: "Plant C", address: "789 Road", status: "Active", machines: 8 },
];

// Gradient backgrounds for modern look
const cardGradients = [
  "linear-gradient(135deg, #FFEBEE 30%, #FFCDD2 90%)",
  "linear-gradient(135deg, #E3F2FD 30%, #BBDEFB 90%)",
  "linear-gradient(135deg, #E8F5E9 30%, #C8E6C9 90%)",
  "linear-gradient(135deg, #FCE4EC 30%, #F8BBD0 90%)",
  "linear-gradient(135deg, #F3E5F5 30%, #E1BEE7 90%)",
];

const PlantDashboard = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Back Button (Enhanced) */}
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 3,
          background: "linear-gradient(135deg, #FF6F61 30%, #D84315 90%)",
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "8px",
          px: 3,
          py: 1.2,
          boxShadow: 3,
          "&:hover": {
            background: "linear-gradient(135deg, #E64A19 30%, #BF360C 90%)",
            boxShadow: 6,
            transform: "scale(1.05)",
          },
        }}
      >
        Back
      </Button>

      {/* Title */}
      <Typography variant="h6" fontWeight="600" mb={3} textAlign="center" color="#333">
        Plants Dashboard
      </Typography>

      {/* Plant Cards */}
      <Grid container spacing={3}>
        {plants.map((plant, index) => (
          // <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
            <Grid item xs={12} sm={8} md={8} lg={3} key={plant.id}> 
            <Card
              sx={{
                borderRadius: "20px",
                p: 2,
                background: cardGradients[index % cardGradients.length], // Gradient color
                width: 260,
                height: 200,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 8,
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {/* Circular Image */}
                  <img
                    src={Device}
                    alt="Device"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                  <Typography variant="body1" fontWeight="500" color="#333">
                    {plant.name}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                  Address: {plant.address}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: plant.status === "Active" ? "#2E7D32" : "#D32F2F" }}
                >
                  Status: {plant.status}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                  Machines: {plant.machines}
                </Typography>
                <Divider sx={{ my: 2, borderColor: "#9E9E9E" }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlantDashboard;
