import React from "react";
import CustomStepper from "./CustomStepper";

export default {
  title: "Components/CustomStepper",
  component: CustomStepper,
  argTypes: {
    steps: { control: "array" },
  },
};

const Template = (args) => <CustomStepper {...args} />;

export const OrderProcessStepper = Template.bind({});
OrderProcessStepper.args = {
  steps: ["Add to Cart", "Checkout", "Payment", "Order Confirmation"],
};

export const JobApplicationStepper = Template.bind({});
JobApplicationStepper.args = {
  steps: ["Resume Submission", "Screening", "Interview", "Final Selection"],
};

export const ProjectSetupStepper = Template.bind({});
ProjectSetupStepper.args = {
  steps: ["Initialize", "Development", "Testing", "Deployment"],
};

export const TravelBookingStepper = Template.bind({});
TravelBookingStepper.args = {
  steps: ["Search Flights", "Select Flight", "Enter Details", "Confirm Booking"],
};

