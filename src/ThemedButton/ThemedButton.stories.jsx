import React from "react";
import ThemedButton from "./ThemedButton";

export default {
    title: "Components/ThemedButton", // 🔹 Updated title for uniqueness
    component: ThemedButton,
    argTypes: {
      type: { control: "radio", options: ["text", "email", "password", "number"] },
      theme: { control: "radio", options: ["light", "dark"] },
    },
  };
  

const Template = (args) => <ThemedButton {...args} />;

export const LightPrimary = Template.bind({});
LightPrimary.args = {
  label: "Click Me",
  theme: "light",
  variant: "primary",
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  label: "Click Me",
  theme: "dark",
  variant: "primary",
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  label: "Click Me",
  theme: "dark",
  variant: "outlined",
};
