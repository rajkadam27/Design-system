import React from "react";
import { MemoryRouter } from "react-router-dom"; // ✅ Import MemoryRouter
import Dashboard from "./Dashboard";
import Dashboard2 from "./Dashboard2";
import PlantDashboard from "./PlantDashboard";
import MachineDashboard from "./MachineDashboard";
import DeviceDashboard from "./DeviceDashboard";
import PlantDashboard2 from "./PlantDshboard2";
import MachineDashboard2 from "./MachineDashboard2";

export default {
  title: "pages/Dashboard",
  component: Dashboard,
  
};

const DashboardTemplate = (args) => <Dashboard {...args} />;
export const DashboardPage = DashboardTemplate.bind({});
DashboardPage.args = {}; 

const DashboardTemplate2 = (args) => <Dashboard2 {...args} />;
export const DashboardPage2 = DashboardTemplate2.bind({});
DashboardPage2.args = {}; 

const PlantDashboardTemplate = (args) => <PlantDashboard {...args} />;
export const PlantDashboardPage = PlantDashboardTemplate.bind({});
PlantDashboardPage.args = {}; 

const PlantDashboardTemplate2 = (args) => <PlantDashboard2 {...args} />;
export const PlantDashboardPage2 = PlantDashboardTemplate2.bind({});
PlantDashboardPage2.args = {}; 

const MachineDashboardTemplate = (args) => <MachineDashboard {...args} />;;
export const MachineDashboardPage = MachineDashboardTemplate.bind({});
MachineDashboardPage.args = {}; 

const MachineDashboardTemplate2 = (args) => <MachineDashboard2 {...args} />;;
export const MachineDashboardPage2 = MachineDashboardTemplate2.bind({});
MachineDashboardPage2.args = {}; 

const DeviceDashboardTemplate = (args) => <DeviceDashboard {...args} />;;
export const DeviceDashboardPage = DeviceDashboardTemplate.bind({});
DeviceDashboardPage.args = {}; 

