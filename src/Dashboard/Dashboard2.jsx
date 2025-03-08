import React from "react";
import { Card, CardContent, Typography, Box, Divider, Grid } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BusinessIcon from "@mui/icons-material/Business";
import Device from "../assets/vecteezy_male-paramedic-avatar-character-icon_17440719.jpg";
import Company from "../assets/company.jpg";
import Device2 from "../assets/plant_img_01_002.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";

const plants = [
  {
    id: 1,
    name: "Plant A",
    address: "123 Street, NY",
    status: "Active",
    machines: 10,
  },
  {
    id: 2,
    name: "Plant B",
    address: "456 Avenue, CA",
    status: "Inactive",
    machines: 5,
  },
  {
    id: 3,
    name: "Plant C",
    address: "789 Road, TX",
    status: "Active",
    machines: 8,
  },
];
const Dashboard2 = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* First Card - Stacked Alone */}
      <Card
        sx={{
          borderRadius: 3,
          p: 2,
          background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
          width: 300,
          boxShadow: 3,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <ShoppingBagIcon sx={{ color: "#1565C0", fontSize: 32 }} />
            <Typography variant="body2" color="textSecondary">
              <TrendingUpIcon sx={{ color: "#1565C0", fontSize: 14 }} /> +2.6%
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ color: "#0D47A1", mt: 1 }}>
            Weekly Sales
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#0D47A1" }}
          >
            714k
          </Typography>
        </CardContent>
      </Card>

      {/* Second & Third Card in One Row */}
      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Second Card */}
        <Card
          sx={{
            borderRadius: 3,
            p: 2,
            background: "linear-gradient(135deg, #FFEBEE, #FFCDD2)",
            width: 300,
            height: 180,
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <img
                src={Device}
                alt="Device"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Typography variant="body2" color="textSecondary">
                User
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ color: "#B71C1C", mt: 1 }}>
              Active Users
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#B71C1C" }}
            >
              27
            </Typography>
            <Divider sx={{ my: 2, borderColor: "#B71C1C" }} />
          </CardContent>
        </Card>

        {/* Third Card */}
        <Card
          sx={{
            borderRadius: 3,
            p: 2,
            background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)",
            width: 300,
            height: 180,
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <img
                src={Device}
                alt="Device"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Typography variant="body2" color="textSecondary">
                User
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ color: "#B71C1C", mt: 1 }}>
              Total Active Users
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#B71C1C" }}
            >
              30
            </Typography>
            <Divider sx={{ my: 2, borderColor: "#B71C1C" }} />
          </CardContent>
        </Card>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#B71C1C", mt: 2 }}
      >
        Companies
      </Typography>

      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Fourth Card */}
        <Card
          sx={{
            borderRadius: 3,
            p: 2,
            width: 300,
            height: 220,
            background: "linear-gradient(135deg, #F3E5F5, #E1BEE7)",
            textAlign: "center",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={Company}
                alt="Company Logo"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#0D47A1", mt: 2 }}
            >
              Company Name
            </Typography>
            <Divider sx={{ my: 2, borderColor: "#B71C1C" }} />
            <Box display="flex" alignItems="center" justifyContent="center">
              <BusinessIcon sx={{ color: "#0D47A1", fontSize: 26, mr: 1 }} />
              <Typography variant="body1" sx={{ color: "#0D47A1" }}>
                No. of Plants: <strong>3</strong>
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Fifth Card */}
        <Card
          sx={{
            borderRadius: 3,
            p: 2,
            width: 300,
            height: 220,
            background: "linear-gradient(135deg, #E8F5E9, #C8E6C9)",
            textAlign: "center",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={Company}
                alt="Company Logo"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#0D47A1", mt: 2 }}
            >
              Company Name
            </Typography>
            <Divider sx={{ my: 2, borderColor: "#B71C1C" }} />
            <Box display="flex" alignItems="center" justifyContent="center">
              <BusinessIcon sx={{ color: "#0D47A1", fontSize: 26, mr: 1 }} />
              <Typography variant="body1" sx={{ color: "#0D47A1" }}>
                No. of Plants: <strong>1</strong>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
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
                src={Device2}
                alt="Device"
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
              <CardContent sx={{ p: 2 }}>
                {/* Row 1: Plant Name & Status */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography variant="body1" fontWeight="600" color="#1E88E5">
                    {plant.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: plant.status === "Active" ? "#2E7D32" : "#D32F2F",
                      fontWeight: "600",
                      backgroundColor:
                        plant.status === "Active" ? "#C8E6C9" : "#FFCDD2",
                      px: 1.2,
                      py: 0.5,
                      borderRadius: "5px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {plant.status}
                  </Typography>
                </Box>

                {/* Row 2: Address */}
                <Box display="flex" alignItems="center" mb={1}>
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ color: "#F57C00", mr: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "#333", fontSize: "0.9rem" }}
                  >
                    {plant.address}
                  </Typography>
                </Box>

                {/* Row 3: Number of Machines */}
                <Box display="flex" alignItems="center">
                  <SettingsIcon
                    fontSize="small"
                    sx={{ color: "#43A047", mr: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                    }}
                  >
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

export default Dashboard2;
