import React from "react";
import Dashboard from "./Dashboard";

export default {
  title: "Components/Dashboard",
  component: Dashboard,
};

export const VerticalDashboard = () => <Dashboard layout="vertical" />;
export const HorizontalDashboard = () => <Dashboard layout="horizontal" />;
