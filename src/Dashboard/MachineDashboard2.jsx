import React from "react";
import { Card, CardContent, Typography, Grid, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import machineImage from '../assets/Machie2.webp'

const machines = [
  { id: 1, name: "Machine X", model: "M-100" },
  { id: 2, name: "Machine Y", model: "M-200" },
  { id: 3, name: "Machine Z", model: "M-300" },
];

// Different gradient colors for each card
const cardGradients = [
  "linear-gradient(135deg, #FFEBEE 30%, #FFCDD2 90%)",
  "linear-gradient(135deg, #E3F2FD 30%, #BBDEFB 90%)",
  "linear-gradient(135deg, #E8F5E9 30%, #C8E6C9 90%)",
];

const MachineDashboard2 = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Back Button */}
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
      <Typography variant="h6" fontWeight="600" mb={3} color="#333">
        Machine Dashboard
      </Typography>

      {/* Machine Cards */}
      <Grid container spacing={3}>
        {machines.map((machine, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={machine.id}>
            <Card
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                width: "90%",
                maxWidth: "280px",
                height: "240px",
                boxShadow: 6,
                background: cardGradients[index % cardGradients.length], // Apply gradient dynamically
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 10,
                  transform: "scale(1.05)",
                },
              }}
            >
              {/* Image */}
              <img
                src={machineImage}
                alt="Machine"
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />

              <CardContent sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="body1" fontWeight="600" color="#1E88E5">
                  {machine.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#333", fontSize: "0.9rem" }}>
                  Model: {machine.model}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MachineDashboard2;
