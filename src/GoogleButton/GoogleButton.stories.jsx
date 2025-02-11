// src/components/GoogleButton.stories.jsx
import React from "react";
import GoogleButton from "./GoogleButton";

export default {
  title: "Google UI/GoogleButton",
  component: GoogleButton,
  argTypes: {
    variant: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
  },
};

const Template = (args) => <GoogleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Google Search",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "I'm Feeling Lucky",
  variant: "secondary",
};
