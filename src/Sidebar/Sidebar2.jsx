import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Box,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Dashboard,
  People,
  Settings,
  Devices,
  Report,
  ChevronLeft,
  Menu as MenuIcon,
  Logout,
  ExpandLess,
  ExpandMore,
  ArrowDropDown,
} from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(false); // Sidebar starts collapsed
  const [setupOpen, setSetupOpen] = useState(false);
  const [deviceOpen, setDeviceOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);

  const navigate = useNavigate();

  // Handlers for popup menus in collapsed state
  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  // Menu items for dropdowns
  const menus = {
    setup: [
      { label: "Company", path: "/company" },
      { label: "Plants", path: "/plants" },
      { label: "Machines", path: "/machines" },
      { label: "Devices", path: "/device" },
    ],
    deviceData: [
      { label: "Device Row Data", path: "/device-row-data" },
      { label: "Device Process Data", path: "/device-process-data" },
    ],
    reports: [
      { label: "Summary Reports", path: "/summary-reports" },
      { label: "Detailed Reports", path: "/detailed-reports" },
    ],
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 240 : 60,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 240 : 60,
            transition: "width 0.3s",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            textAlign: "center",
            mt: 4,
          }}
        >
          {open ? (
            <>
              <img
                src="https://via.placeholder.com/50" // Replace with your logo URL
                alt="Logo"
                style={{ width: 50, height: 50, marginBottom: 8 }}
              />
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                Sanyojak
              </Typography>
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", right: 10, top: 10 }}
              >
                <ChevronLeft />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        <Divider />

        {/* Sidebar Menu Items */}
        <List
          sx={{
            flexGrow: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Dashboard */}
          <ListItem
            button
            onClick={() => navigate("/dashboard")}
            sx={{ height: 50 }}
          >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    Dashboard
                  </Typography>
                }
              />
            )}
          </ListItem>

          {/* Manage User */}
          <ListItem
            button
            onClick={() => navigate("/manage-user")}
            sx={{ height: 50 }}
          >
            <ListItemIcon>
              <People />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    Manage User
                  </Typography>
                }
              />
            )}
          </ListItem>

          {/* Setup Dropdown */}
          {open ? (
            <>
              <ListItem
                button
                onClick={() => setSetupOpen(!setupOpen)}
                sx={{ height: 50 }}
              >
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                      Setup
                    </Typography>
                  }
                />
                {setupOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={setupOpen} timeout="auto" unmountOnExit>
                <List sx={{ pl: 4 }}>
                  {menus.setup.map((item) => (
                    <ListItem
                      button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      sx={{ height: 35 }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{ fontSize: "0.75rem" }}
                          >
                            {item.label}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              button
              sx={{ height: 35, padding: 0, justifyContent: "center" }}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <Settings />
              </ListItemIcon>
              <IconButton
                sx={{ p: 0, ml: 1 }}
                onClick={(e) => handleMenuOpen(e, "setup")}
              >
                <ArrowDropDown fontSize="small" />
              </IconButton>
            </ListItem>
          )}

          {/* Manage Device Data Dropdown */}
          {open ? (
            <>
              <ListItem
                button
                onClick={() => setDeviceOpen(!deviceOpen)}
                sx={{ height: 50 }}
              >
                <ListItemIcon>
                  <Devices />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                      Manage Device Data
                    </Typography>
                  }
                />
                {deviceOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={deviceOpen} timeout="auto" unmountOnExit>
                <List sx={{ pl: 4 }}>
                  {menus.deviceData.map((item) => (
                    <ListItem
                      button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      sx={{ height: 35 }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{ fontSize: "0.75rem" }}
                          >
                            {item.label}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              button
              sx={{ height: 35, padding: 0, justifyContent: "center" }}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <Devices />
              </ListItemIcon>
              <IconButton
                sx={{ p: 0, ml: 1 }}
                onClick={(e) => handleMenuOpen(e, "deviceData")}
              >
                <ArrowDropDown fontSize="small" />
              </IconButton>
            </ListItem>
          )}

          {/* Manage Reports Dropdown */}
          {open ? (
            <>
              <ListItem
                button
                onClick={() => setReportOpen(!reportOpen)}
                sx={{ height: 50 }}
              >
                <ListItemIcon>
                  <Report />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                      Manage Reports
                    </Typography>
                  }
                />
                {reportOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={reportOpen} timeout="auto" unmountOnExit>
                <List sx={{ pl: 4 }}>
                  {menus.reports.map((item) => (
                    <ListItem
                      button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      sx={{ height: 35 }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{ fontSize: "0.75rem" }}
                          >
                            {item.label}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              button
              sx={{ height: 35, padding: 0, justifyContent: "center" }}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <Report />
              </ListItemIcon>
              <IconButton
                sx={{ p: 0, ml: 1 }}
                onClick={(e) => handleMenuOpen(e, "reports")}
              >
                <ArrowDropDown fontSize="small" />
              </IconButton>
            </ListItem>
          )}

          <ListItem
             button
             onClick={() => navigate("/login")}
             sx={{ height: 50 }}
          >
            <ListItemIcon>
            <Logout />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    Logout
                  </Typography>
                }
              />
            )}
          </ListItem>
        </List>

        {/* Logout Button
        <Box sx={{ width: "100%", bottom: 10 }}>
          <ListItem
            button
            onClick={() => navigate("/login")}
            sx={{ height: 50 }}
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    Logout
                  </Typography>
                }
              />
            )}
          </ListItem>
        </Box> */}
      </Drawer>

      {/* Popup Menu for Collapsed State */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {currentMenu &&
          menus[currentMenu].map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => {
                navigate(item.path);
                handleMenuClose();
              }}
            >
              {item.label}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default Sidebar;
