import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";

const CustomStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div style={{ marginTop: "20px" }}>
        {activeStep === steps.length ? (
          <p>All steps completed!</p>
        ) : (
          <>
            <p>Step {activeStep + 1}: {steps[activeStep]}</p>
            <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

// ✅ Make sure to use "export default"
export default CustomStepper;
