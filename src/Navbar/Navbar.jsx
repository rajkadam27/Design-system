// Navbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  InputBase,
  Popover,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Search, Notifications, Palette } from '@mui/icons-material'; // Added Palette icon for theme
import { styled } from '@mui/material/styles';
import { useThemeContext } from '../ThemeContext'

const Navbar = () => {
  const { selectedThemeColor, setSelectedThemeColor, schemeColors, allColorKeys, getColorValue } = useThemeContext();

  const [searchOpen, setSearchOpen] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [themeAnchorEl, setThemeAnchorEl] = useState(null);

  const handleSearchClick = () => setSearchOpen(!searchOpen);

  const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileClose = () => setProfileAnchorEl(null);

  const handleThemeClick = (event) => setThemeAnchorEl(event.currentTarget);
  const handleThemeClose = () => setThemeAnchorEl(null);

  const handleThemeSelect = (colorName) => {
    setSelectedThemeColor(colorName); // Updates global theme
    setThemeAnchorEl(null);
  };

  const profileOpen = Boolean(profileAnchorEl);
  const themeOpen = Boolean(themeAnchorEl);

  const backgroundColor = getColorValue(selectedThemeColor);
  const isDarkBackground = parseInt(backgroundColor.replace('#', ''), 16) < 0x888888;
  const contrastColor = isDarkBackground ? '#ffffff' : '#333333';

  const AnimatedSearchBar = styled(Box)(({ open }) => ({
    position: 'absolute',
    top: open ? '0' : '-100%',
    left: 0,
    right: 0,
    backgroundColor: backgroundColor,
    padding: '10px 20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'top 0.4s ease-in-out, opacity 0.3s ease',
    opacity: open ? 1 : 0,
    zIndex: 1200,
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${contrastColor}`,
  }));

  const StyledInputBase = styled(InputBase)(() => ({
    flexGrow: 1,
    padding: '8px 16px',
    borderRadius: '25px',
    backgroundColor: backgroundColor,
    border: `1px solid ${contrastColor}`,
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    color: contrastColor,
    '&:hover': {
      backgroundColor: schemeColors.surfaceContainer || '#e8e8e8',
    },
    '&:focus': {
      boxShadow: `0 0 8px ${contrastColor}`,
      borderColor: contrastColor,
    },
  }));

  return (
    <Box sx={{ position: 'relative' }}>
      <AppBar 
        position="static" 
        sx={{ backgroundColor, color: contrastColor, boxShadow: 'none', borderBottom: `1px solid ${contrastColor}` }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: contrastColor }}>
            Welcome
          </Typography>
          <IconButton onClick={handleSearchClick} sx={{ color: contrastColor, '&:hover': { transform: 'scale(1.1)' } }}>
            <Search />
          </IconButton>
          <IconButton sx={{ color: contrastColor, '&:hover': { transform: 'scale(1.1)' } }}>
            <Notifications />
          </IconButton>
          <IconButton onClick={handleThemeClick} sx={{ color: contrastColor, '&:hover': { transform: 'scale(1.1)' } }}>
            <Palette />
          </IconButton>
          <Box display="flex" alignItems="center">
            <Avatar
              sx={{
                width: 40,
                height: 40,
                marginLeft: 2,
                cursor: 'pointer',
                backgroundColor,
                color: contrastColor,
                '&:hover': { transform: 'scale(1.1)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' },
              }}
              alt="Super Admin"
              onClick={handleProfileClick}
            >
              SA
            </Avatar>
            <Popover
              open={profileOpen}
              anchorEl={profileAnchorEl}
              onClose={handleProfileClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{ '& .MuiPaper-root': { width: 220, borderRadius: 2, backgroundColor, padding: '10px 0' } }}
            >
              <Box sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: contrastColor }}>
                  Super Admin
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.875rem', color: contrastColor }}>
                  superadmin@example.com
                </Typography>
              </Box>
              <Divider sx={{ borderColor: contrastColor }} />
              <List sx={{ p: 0 }}>
                <ListItem button onClick={handleProfileClose} sx={{ '&:hover': { backgroundColor: schemeColors.surfaceContainer || '#e8e8e8' } }}>
                  <ListItemText primary="Manage Account" sx={{ color: contrastColor }} />
                </ListItem>
                <ListItem button onClick={handleProfileClose} sx={{ '&:hover': { backgroundColor: schemeColors.surfaceContainer || '#e8e8e8' } }}>
                  <ListItemText primary="Logout" sx={{ color: contrastColor }} />
                </ListItem>
              </List>
            </Popover>
          </Box>
        </Toolbar>
      </AppBar>
      <AnimatedSearchBar open={searchOpen}>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        <IconButton onClick={handleSearchClick} sx={{ ml: 1, color: contrastColor }}>
          <Search />
        </IconButton>
      </AnimatedSearchBar>
      <Popover
        open={themeOpen}
        anchorEl={themeAnchorEl}
        onClose={handleThemeClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ p: 2, display: 'flex', flexWrap: 'wrap', maxWidth: 200 }}>
          {allColorKeys.map((colorName) => (
            <Box
              key={colorName}
              sx={{
                width: 20,
                height: 20,
                backgroundColor: schemeColors[colorName],
                margin: 0.5,
                cursor: 'pointer',
                border: selectedThemeColor === colorName ? '2px solid black' : 'none',
              }}
              onClick={() => handleThemeSelect(colorName)}
              title={colorName}
            />
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default Navbar;