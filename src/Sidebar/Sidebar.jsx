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
import { keyframes } from "@emotion/react";
import logo from "../assets/vecteezy_male-paramedic-avatar-character-icon_17440719.jpg"

// Animations
const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

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
          width: { xs: open ? 240 : 60, sm: open ? 260 : 70 }, // Responsive width
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: open ? 240 : 60, sm: open ? 260 : 70 },
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(180deg, #1976D2 0%, #0d47a1 100%)", // Vibrant gradient
            color: "#fff",
            borderRight: "none",
            boxShadow: "4px 0 16px rgba(0, 0, 0, 0.2)",
            animation: `${slideIn} 0.5s ease`,
          },
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            textAlign: "center",
            mt: 3,
            mb: 2,
          }}
        >
          {open ? (
            <>
              <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  marginBottom: 8,
                  animation: `${pulse} 2s ease-in-out infinite`,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  fontWeight: "bold",
                  color: "#fff",
                  letterSpacing: 1,
                }}
              >
                Samyojak
              </Typography>
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
              >
                <ChevronLeft />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={() => setOpen(true)} sx={{ color: "#fff", mt: 1 }}>
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          )}
        </Box>

        <Divider sx={{ backgroundColor: "rgba(116, 113, 141, 0.2)", width: "100%", my: 2, height:"2px" }} />

        {/* Sidebar Menu Items */}
        <List
          sx={{
            flexGrow: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            px: 1,
          }}
        >
          {/* Dashboard */}
          <ListItem
            button
            onClick={() => navigate("/dashboard")}
            sx={{
              my: 0.5,
              borderRadius: 2,
              transition: "background-color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "translateX(5px)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 50 }}>
              <Dashboard />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary="Dashboard"
                sx={{ "& .MuiTypography-root": { fontSize: "0.9rem", fontWeight: "medium" } }}
              />
            )}
          </ListItem>

          {/* Manage User */}
          <ListItem
            button
            onClick={() => navigate("/manage-user")}
            sx={{
              my: 0.5,
              borderRadius: 2,
              transition: "background-color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "translateX(5px)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 50 }}>
              <People />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary="Manage User"
                sx={{ "& .MuiTypography-root": { fontSize: "0.9rem", fontWeight: "medium" } }}
              />
            )}
          </ListItem>

          {/* Setup Dropdown */}
          {open ? (
            <>
              <ListItem
                button
                onClick={() => setSetupOpen(!setupOpen)}
                sx={{
                  my: 0.5,
                  borderRadius: 2,
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <ListItemIcon sx={{ color: "#fff", minWidth: 50 }}>
                  <Settings />
                </ListItemIcon>
                <ListItemText
                  primary="Setup"
                  sx={{ "& .MuiTypography-root": { fontSize: "0.9rem", fontWeight: "medium" } }}
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
                      sx={{
                        my: 0.2,
                        borderRadius: 2,
                        transition: "background-color 0.3s ease, transform 0.2s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{ "& .MuiTypography-root": { fontSize: "0.85rem", color: "#fff" } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              button
              sx={{ my: 0.5, justifyContent: "center" }}
              onClick={(e) => handleMenuOpen(e, "setup")}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 0 }}>
                <Settings />
              </ListItemIcon>
              <IconButton sx={{ p: 0, ml: 1, color: "#fff" }}>
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
                sx={{
                  my: 0.5,
                  borderRadius: 2,
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <ListItemIcon sx={{ color: "#fff", minWidth: 50 }}>
                  <Devices />
                </ListItemIcon>
                <ListItemText
                  primary="Device Data"
                  sx={{ "& .MuiTypography-root": { fontSize: "0.9rem", fontWeight: "medium" } }}
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
                      sx={{
                        my: 0.2,
                        borderRadius: 2,
                        transition: "background-color 0.3s ease, transform 0.2s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{ "& .MuiTypography-root": { fontSize: "0.85rem", color: "#fff" } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              button
              sx={{ my: 0.5, justifyContent: "center" }}
              onClick={(e) => handleMenuOpen(e, "deviceData")}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 0 }}>
                <Devices />
              </ListItemIcon>
              <IconButton sx={{ p: 0, ml: 1, color: "#fff" }}>
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
                sx={{
                  my: 0.5,
                  borderRadius: 2,
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <ListItemIcon sx={{ color: "#fff", minWidth: 50 }}>
                  <Report />
                </ListItemIcon>
                <ListItemText
                  primary="Reports"
                  sx={{ "& .MuiTypography-root": { fontSize: "0.9rem", fontWeight: "medium" } }}
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
                      sx={{
                        my: 0.2,
                        borderRadius: 2,
                        transition: "background-color 0.3s ease, transform 0.2s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{ "& .MuiTypography-root": { fontSize: "0.85rem", color: "#fff" } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              button
              sx={{ my: 0.5, justifyContent: "center" }}
              onClick={(e) => handleMenuOpen(e, "reports")}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 0 }}>
                <Report />
              </ListItemIcon>
              <IconButton sx={{ p: 0, ml: 1, color: "#fff" }}>
                <ArrowDropDown fontSize="small" />
              </IconButton>
            </ListItem>
          )}

          {/* Logout Button */}
          <ListItem
            button
            onClick={() => navigate("/login")}
            sx={{
              my: 0.5,
              borderRadius: 2,
              transition: "background-color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "translateX(5px)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 50 }}>
              <Logout />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary="Logout"
                sx={{ "& .MuiTypography-root": { fontSize: "0.9rem", fontWeight: "medium" } }}
              />
            )}
          </ListItem>
        </List>
      </Drawer>

      {/* Popup Menu for Collapsed State */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#1976D2",
            color: "#fff",
            boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: 2,
          },
        }}
      >
        {currentMenu &&
          menus[currentMenu].map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => {
                navigate(item.path);
                handleMenuClose();
              }}
              sx={{
                fontSize: "0.9rem",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
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