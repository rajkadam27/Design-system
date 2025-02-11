import React from "react";
import ProgressTracker from "./ProgressTracker";

export default {
  title: "Components/ProgressTracker",
  component: ProgressTracker,
};

const Template = (args) => <ProgressTracker {...args} />;

export const LearningSteps = Template.bind({});
LearningSteps.args = {
  milestones: ["Introduction", "Basics", "Intermediate", "Advanced", "Completed"],
};

export const FitnessTracker = Template.bind({});
FitnessTracker.args = {
  milestones: ["Warm-up", "Cardio", "Strength Training", "Cooldown", "Recovery"],
};

export const CodingJourney = Template.bind({});
CodingJourney.args = {
  milestones: ["HTML & CSS", "JavaScript", "React", "Backend", "Deployment"],
};
