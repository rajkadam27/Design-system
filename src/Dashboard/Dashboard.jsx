import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Avatar, Box } from "@mui/material";
import companyImage from "../assets/company.jpg";
import deviceIcon from "../assets/device.jpg";

const companies = [
  { id: 1, name: "Company A", devices: 100, plants: 5 },
  { id: 2, name: "Company B", devices: 80, plants: 3 },
  { id: 3, name: "Company C", devices: 120, plants: 7 },
];

const activeDevices = [
  { name: "Active Devices", count: 180, icon: deviceIcon },
  { name: "Inactive Devices", count: 20, icon: deviceIcon },
  { name: "Total Devices", count: 200, icon: deviceIcon },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCompanyClick = (company) => {
    navigate(`/plant-dashboard/${company.id}`, { state: { company } });
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* First Row: Active Devices */}
      <Grid container spacing={2} mb={4}>
        {activeDevices.map((device, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 3, borderRadius: "20px" }}>
              <Avatar src={device.icon} alt="Device Icon" sx={{ width: 48, height: 48, mr: 2 }} />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
                  {device.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Count: {device.count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Second Row: Companies */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Companies
      </Typography>
      <Grid container spacing={2}>
        {companies.map((company) => (
          <Grid item xs={12} sm={4} key={company.id}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                boxShadow: 3,
                cursor: "pointer",
                borderRadius: "20px",
              }}
              onClick={() => handleCompanyClick(company)}
            >
              <Avatar src={companyImage} alt="Company" sx={{ width: 56, height: 56, mr: 2 }} />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
                  {company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Devices: {company.devices}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plants: {company.plants}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
