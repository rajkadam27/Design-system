import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

import Dashboard from "./pages/Dashboard";
import MachineDashboard from "./pages/MachineDashboard";
import PlantDashboard from "./pages/PlantDashboard";

import ManageUsers from "./ManageUsers/ManageUsers";
import EditUserForm from "./ManageUsers/EditUserForm";
import AddUserForm from "./ManageUsers/AddUserForm";

const ManageUser = () => <h2>Manage User Page</h2>;
const Company = () => <h2>Company Page</h2>;
const Plants = () => <h2>Plants Page</h2>;
const Machine = () => <h2>Machine Page</h2>;
const Device = () => <h2>Device Page</h2>;
const DeviceRowData = () => <h2>Device Row Data Page</h2>;
const DeviceProcessData = () => <h2>Device Process Data Page</h2>;
const SummaryReports = () => <h2>Summary Reports Page</h2>;
const DetailReports = () => <h2>Detail Reports Page</h2>;

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
     
        <Sidebar />

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>

          <Navbar />

          <Box sx={{ padding: 3 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/plant-dashboard/:id" element={<PlantDashboard />} />
              <Route path="/machine-dashboard/:id" element={<MachineDashboard />} />

              <Route path="/manage-user" element={<ManageUsers/>} />
              <Route path="/add-user" element={<AddUserForm />} />
              <Route path="/edit-user/:id" element={<EditUserForm />} />

              <Route path="/company" element={<Company />} />

              <Route path="/plants" element={<Plants />} />
              <Route path="/machine" element={<Machine />} />
              <Route path="/device" element={<Device />} />

              <Route path="/device-row-data" element={<DeviceRowData />} />
              <Route path="/device-process-data" element={<DeviceProcessData />} />

              <Route path="/summary-reports" element={<SummaryReports />} />
              <Route path="/detail-reports" element={<DetailReports />} />

              <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
