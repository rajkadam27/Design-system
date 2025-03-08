import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, InputBase, Box } from '@mui/material';
import { MoreVert, Search } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const menuOpen = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
    };

    // Styled component for the animated search bar
    const SearchBar = styled(Box)(({ theme, open }) => ({
        position: 'absolute',
        top: open ? '0' : '-100%',
        left: 0,
        right: 0,
        backgroundColor: theme.palette.background.paper,
        padding: '10px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'top 0.3s ease-in-out',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        flexGrow: 1,
        padding: '5px 10px',
        borderRadius: '20px',
        backgroundColor: theme.palette.grey[200],
        '&:hover': {
            backgroundColor: theme.palette.grey[300],
        },
    }));

    return (
        <Box sx={{ position: 'relative' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Welcome
                    </Typography>
                    <IconButton onClick={toggleSearch} color="inherit">
                        <Search />
                    </IconButton>
                    <Avatar sx={{ marginRight: 2 }}>SA</Avatar>
                    <Typography variant="body1">Super Admin</Typography>
                    <IconButton onClick={handleMenu} color="inherit">
                        <MoreVert />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Manage Account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Animated Search Bar */}
            <SearchBar open={searchOpen}>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton onClick={toggleSearch} sx={{ ml: 1 }}>
                    <Search />
                </IconButton>
            </SearchBar>
        </Box>
    );
};

export default Navbar;