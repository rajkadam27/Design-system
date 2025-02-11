import React from "react";
import NotificationToast from "./NotificationToast";

export default {
  title: "Components/NotificationToast",
  component: NotificationToast,
  argTypes: {
    type: { control: "radio", options: ["success", "error", "warning", "info"] },
    theme: { control: "radio", options: ["light", "dark"] },
    autoDismiss: { control: "boolean" },
  },
};

const Template = (args) => <NotificationToast {...args} />;

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  message: "Operation successful!",
  type: "success",
  autoDismiss: true,
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  message: "An error occurred!",
  type: "error",
  autoDismiss: true,
};

export const WarningToast = Template.bind({});
WarningToast.args = {
  message: "This is a warning!",
  type: "warning",
  autoDismiss: false,
};

export const InfoToast = Template.bind({});
InfoToast.args = {
  message: "Just some information.",
  type: "info",
  autoDismiss: true,
};
