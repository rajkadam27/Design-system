import React, { useState } from "react";
import { LinearProgress, Typography, Box, Button } from "@mui/material";

const ProgressTracker = ({ milestones }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < milestones.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Box sx={{ width: "100%", padding: "20px", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        {currentStep < milestones.length
          ? `Current: ${milestones[currentStep]}`
          : "All Steps Completed! 🎉"}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={(currentStep / milestones.length) * 100}
        sx={{ height: 10, borderRadius: 5, marginY: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={currentStep >= milestones.length}
      >
        {currentStep < milestones.length - 1 ? "Next Step" : "Complete 🎉"}
      </Button>
    </Box>
  );
};

// Usage Example
export default ProgressTracker;
