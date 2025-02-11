import React from "react";
import Navbar from "./Navbar";

// Define the default export with component details for Storybook
export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    background: { control: "color" },
    buttonColor: { control: "color" },
  },
};

// Base template for stories
const Template = (args) => <Navbar {...args} />;

// Default Navbar story
export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {
  background: "#333", // Default background color
  buttonColor: "#4CAF50", // Default button color
};

// Custom Navbar story with different background color
export const CustomNavbar = Template.bind({});
CustomNavbar.args = {
  background: "#1E1E1E", // Custom background color
  buttonColor: "#FF5733", // Custom button color
};
