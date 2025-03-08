import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { subject: "English", Series1: 90, Series2: 40, Series3: 50, fullMark: 100 },
  { subject: "History", Series1: 70, Series2: 60, Series3: 80, fullMark: 100 },
  { subject: "Physics", Series1: 50, Series2: 30, Series3: 40, fullMark: 100 },
  { subject: "Geography", Series1: 30, Series2: 90, Series3: 20, fullMark: 100 },
  { subject: "Chinese", Series1: 100, Series2: 50, Series3: 60, fullMark: 100 },
  { subject: "Math", Series1: 60, Series2: 70, Series3: 80, fullMark: 100 },
];

const RadarChartComponent = () => {
  return (
    <Card
      sx={{
        maxWidth: 450,
        p: 2,
        borderRadius: 4,
        boxShadow: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "white",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{ mb: 2, color: "#1E88E5" }}>
          📊 Current Subject Performance
        </Typography>

        <RadarChart cx={200} cy={150} outerRadius={90} width={400} height={300} data={data}>
          <PolarGrid stroke="#ECEFF1" />
          <PolarAngleAxis dataKey="subject" stroke="#455A64" tick={{ fontSize: 12, fontWeight: 600 }} />
          
          {/* ✅ Small & Subtle Tick Labels */}
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tickCount={6}
            ticks={[0, 20, 40, 60, 80, 100]}
            stroke="#78909C"
            tick={{ fontSize: 10, fill: "#546E7A" }} // Smaller and lighter color
          />

          {/* ✅ Styled Radar Series */}
          <Radar name="Series 1" dataKey="Series1" stroke="#1976D2" fill="#1976D2" fillOpacity={0.5} />
          <Radar name="Series 2" dataKey="Series2" stroke="#FFA000" fill="#FFA000" fillOpacity={0.5} />
          <Radar name="Series 3" dataKey="Series3" stroke="#26C6DA" fill="#26C6DA" fillOpacity={0.5} />
          
          <Legend wrapperStyle={{ fontSize: 12 }} />
        </RadarChart>
      </CardContent>
    </Card>
  );
};

export default RadarChartComponent;
