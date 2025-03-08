import React, { useState, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Slider,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";

// Ensure HighchartsMore is applied correctly
if (typeof HighchartsMore === "function") {
  HighchartsMore(Highcharts);
}

const StyledCard = styled(Card)({
  backgroundColor: "#E3F2FD",
  borderRadius: 10,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: 16,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  },
});

const GaugeChart = ({ title, max }) => {
  const [value, setValue] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(5);
  const [upperLimit, setUpperLimit] = useState(max - 5);
  const [alertMessage, setAlertMessage] = useState("");

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
    if (newValue <= lowerLimit) {
      setAlertMessage(`⚠️ ${title} is too low!`);
    } else if (newValue >= upperLimit) {
      setAlertMessage(`🚨 ${title} is too high!`);
    } else {
      setAlertMessage("");
    }
  };

  const options = useMemo(
    () => ({
      chart: { type: "gauge", backgroundColor: "transparent", height: "250px" },
      title: {
        text: title,
        style: { fontSize: "16px", fontWeight: "500" }, // Reduced font size and boldness
        margin: 10,
      },
      pane: { startAngle: -150, endAngle: 150, size: "100%" },
      yAxis: {
        min: 0,
        max: max,
        tickPixelInterval: 50,
        tickWidth: 0,
        plotBands: [
          { from: 0, to: lowerLimit, color: "#F44336" }, // Red (Too Low)
          { from: lowerLimit, to: upperLimit, color: "#4CAF50" }, // Green (Safe)
          { from: upperLimit, to: max, color: "#F44336" }, // Red (Too High)
        ],
      },
      series: [{ name: title, data: [value], animation: { duration: 500 } }],
    }),
    [value, lowerLimit, upperLimit, title, max]
  );

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "#fff",
        textAlign: "center",
        maxWidth: 450,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
      {alertMessage && (
        <Alert severity="warning" sx={{ mt: 1, fontSize: "14px" }}>
          {alertMessage}
        </Alert>
      )}

      <Typography variant="h6" fontWeight="500" sx={{ mt: 2, fontSize: "16px" }}>
        Adjust {title}:
      </Typography>
      <Slider
        value={value}
        onChange={handleValueChange}
        min={0}
        max={max}
        sx={{ width: "80%", mt: 1, color: "#1976D2" }}
      />

      <Typography variant="h6" fontWeight="500" sx={{ mt: 2, fontSize: "16px" }}>
        Set Limits:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5}>
          <Typography sx={{ fontSize: "14px" }}>Lower Limit</Typography>
          <Slider
            value={lowerLimit}
            onChange={(e, v) => setLowerLimit(v)}
            min={0}
            max={max}
            sx={{ color: "#D32F2F" }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{ fontSize: "14px" }}>Upper Limit</Typography>
          <Slider
            value={upperLimit}
            onChange={(e, v) => setUpperLimit(v)}
            min={0}
            max={max}
            sx={{ color: "#D32F2F" }}
          />
        </Grid>
      </Grid>

      <Typography sx={{ fontSize: "14px", mt: 2 }}>
        Current {title}: <b>{value}</b>
      </Typography>
    </Box>
  );
};

const DeviceDashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        fontWeight="500"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 3,
          color: "#1976D2",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Device Status Dashboard
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        mt={3}
        alignContent={"center"}
      >
        {/* Machine Details Card */}
        <Grid item xs={12} md={6}>
          <StyledCard
            sx={{
              borderRadius: 3,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="500"
                  gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    bgcolor: "#1976D2",
                    color: "white",
                    height: "40px",
                    alignItems: "center",
                    width: "180px",
                    borderRadius: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Machine Details
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {[
                  ["Machine Name", "Flame Thrower"],
                  ["Machine Admin", "Admin123"],
                  ["Section", "179x22"],
                  ["Oil Type", "Hard"],
                  ["Model Number", "#Ak147"],
                  ["Part No", "23"],
                  ["Oil Tank Capacity", "1001"],
                  ["Reserve Oil Level", "2001"],
                  ["Full Oil Level", "9501"],
                  ["Manufacturer", "Vought"],
                ].map(([label, value]) => (
                  <Grid item xs={6} key={label}>
                    <Typography
                      sx={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
                    >
                      <b style={{ color: "#1976D2" }}>{label}:</b> {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Oil Details Card */}
        <Grid item xs={12} md={6}>
          <StyledCard
            sx={{
              borderRadius: 3,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="500"
                gutterBottom
                sx={{
                  bgcolor: "#1976D2",
                  color: "white",
                  height: "40px",
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Oil Details
              </Typography>
              <Grid container spacing={2}>
                {[
                  ["Oil Manufacturer", "XYZ Oils"],
                  ["Manufacturer No", "20234"],
                  ["Oil Vendor Name", "ABC Vendor"],
                  ["Vendor No", "55874"],
                  ["Vendor Data Published", "No"],
                  ["Manufacturer Data Published", "No"],
                ].map(([label, value]) => (
                  <Grid item xs={6} key={label}>
                    <Typography
                      sx={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
                    >
                      <b style={{ color: "#1976D2" }}>{label}:</b> {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Device Details Card */}
      <Box
        mt={3}
        p={2}
        bgcolor="#E8F5E9"
        borderRadius={3}
        boxShadow={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="500"
          gutterBottom
          sx={{
            bgcolor: "#1976D2",
            color: "white",
            height: "40px",
            width: "160px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Device Details
        </Typography>
        <Grid container spacing={2}>
          {[
            ["Date", "2024-11-05T06:27:14.859Z"],
            ["Name", "jobs_flame_thrower2"],
            ["Device Number", "A10"],
            ["Version", "1"],
            ["Type", "Pro"],
            ["Token", "101"],
          ].map(([label, value]) => (
            <Grid item xs={4} key={label}>
              <Typography
                sx={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
              >
                <b style={{ color: "#1976D2" }}>{label}:</b> {value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Gauge Charts */}
      <Grid container spacing={3} mt={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <GaugeChart title="Concentration" max={50} />
        </Grid>
        <Grid item xs={12} md={4}>
          <GaugeChart title="PH Level" max={100} />
        </Grid>
        <Grid item xs={12} md={4}>
          <GaugeChart title="Temperature" max={200} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeviceDashboard;