import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { name: "America", value: 3500, color: "#007BFF" },  // Blue
  { name: "Asia", value: 2500, color: "#FFA500" },     // Orange
  { name: "Europe", value: 1500, color: "#5A2CA0" },   // Purple
  { name: "Africa", value: 500, color: "#E74C3C" }     // Red
];

const CustomPieChart = () => {
  return (
    <Card sx={{ maxWidth: 400, p: 2, boxShadow: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Current Visits
        </Typography>
        <PieChart width={350} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default CustomPieChart;
