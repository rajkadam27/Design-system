import React from "react";
import Login from "./Login";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: { onSubmit: { action: "submitted" } },
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
