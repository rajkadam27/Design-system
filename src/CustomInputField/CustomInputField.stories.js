import React from "react";
import CustomInputField from "./CustomInputField";
import { components } from "storybook/internal/components";

export default {
  
  title: "Components/CustomInputField",
  component: CustomInputField,
  argTypes: {
    type: { control: "radio", options: ["text", "email", "password", "number"] },
  },
};

const Template = (args) => <CustomInputField {...args} />;

export const EmailField = Template.bind({});
EmailField.args = {
  label: "Email Address",
  type: "email",
  placeholder: "Enter your email",
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  label: "Password",
  type: "password",
  placeholder: "Enter your password",
};

export const NumberField = Template.bind({});
NumberField.args = {
  label: "Age",
  type: "number",
  placeholder: "Enter your age",
};
