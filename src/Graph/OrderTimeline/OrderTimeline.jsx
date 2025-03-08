import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Paper, Box } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const orderStages = [
  { status: "Order Placed", time: "March 1, 2024 - 10:00 AM", icon: <ShoppingCartIcon />, color: "primary" },
  { status: "Order Processed", time: "March 2, 2024 - 12:00 PM", icon: <CheckCircleIcon />, color: "success" },
  { status: "Shipped", time: "March 3, 2024 - 5:00 PM", icon: <LocalShippingIcon />, color: "warning" },
  { status: "Delivered", time: "March 5, 2024 - 3:00 PM", icon: <DoneAllIcon />, color: "secondary" }
];

const OrderTimeline = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
        Order Timeline
      </Typography>
      <Timeline>
        {orderStages.map((stage, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={stage.color}>{stage.icon}</TimelineDot>
              {index !== orderStages.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 2 }}>
              <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: "#f5f5f5" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {stage.status}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {stage.time}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default OrderTimeline;
