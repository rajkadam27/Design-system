import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import machineImage from "../assets/machine.jpg";

const machines = [
  { id: 1, name: "Machine X", model: "M-100" },
  { id: 2, name: "Machine Y", model: "M-200" },
  { id: 3, name: "Machine Z", model: "M-300" },
];

// Gradient backgrounds for better visuals
const cardGradients = [
  "linear-gradient(135deg, #FFEBEE 30%, #FFCDD2 90%)",
  "linear-gradient(135deg, #E3F2FD 30%, #BBDEFB 90%)",
  "linear-gradient(135deg, #E8F5E9 30%, #C8E6C9 90%)",
  "linear-gradient(135deg, #FCE4EC 30%, #F8BBD0 90%)",
  "linear-gradient(135deg, #F3E5F5 30%, #E1BEE7 90%)",
];

const MachineDashboard = () => {
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
            {/* <Grid item xs={12} sm={8} md={8} lg={3} key={machine.id}> */}
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                boxShadow: 4,
                cursor: "pointer",
                borderRadius: "20px",
                width: "240px",
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 8,
                  transform: "scale(1.05)",
                },
                background: cardGradients[index % cardGradients.length],
              }}
            >
              {/* Circular Image */}
              <Avatar
                src={machineImage}
                alt="Machine"
                sx={{ width: 64, height: 64, mr: 2, borderRadius: "50%" }}
              />
              <CardContent>
                <Typography variant="body1" fontWeight="500" color="#333">
                  {machine.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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

export default MachineDashboard;
