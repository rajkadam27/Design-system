import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Box,
  TablePagination,
} from "@mui/material";
import { MoreVert, Edit, Delete, GetApp } from "@mui/icons-material";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const usersData = [
  { id: 1, avatar: "https://i.pravatar.cc/40?img=1", name: "Adam Trantow", company: "Mohr, Langworth and Hills", role: "UI Designer", status: "Active" },
  { id: 2, avatar: "https://i.pravatar.cc/40?img=2", name: "Angel Rolfson-Kulas", company: "Koch and Sons", role: "UI Designer", status: "Active" },
  { id: 3, avatar: "https://i.pravatar.cc/40?img=3", name: "Betty Hammes", company: "Waelchi – VonRueden", role: "UI Designer", status: "Active" },
  { id: 4, avatar: "https://i.pravatar.cc/40?img=4", name: "Billy Braun", company: "White, Cassin and Goldner", role: "UI Designer", status: "Banned" },
];

const ManageUsers3 = () => {
  const [search, setSearch] = useState("");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle menu open/close
  const handleMenuOpen = (event, user) => {
    setMenuAnchor(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedUser(null);
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter users based on search
  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Paginated users
  const paginatedUsers = filteredUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Handle CSV export
  const handleExportCSV = () => {
    const csvData = usersData.map(({ avatar, ...rest }) => rest); // Exclude avatar
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };

  return (
    <Paper sx={{ p: 3, maxWidth: "800px", mx: "auto", mt: 3 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Users
        </Typography>
        <Button variant="contained" color="primary">
          + Add User
        </Button>
      </Box>

      {/* Search Bar */}
      <TextField
        fullWidth
        label="Search user..."
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={user.avatar} sx={{ mr: 1 }} />
                  {user.name}
                </TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Chip label={user.status} color={user.status === "Active" ? "success" : "error"} />
                </TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuOpen(e, user)}>
                    <MoreVert />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor && selectedUser === user)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={() => alert(`Editing ${user.name}`)}>
                      <Edit sx={{ color: "green", mr: 1 }} /> Edit
                    </MenuItem>
                    <MenuItem onClick={() => alert(`Deleting ${user.name}`)}>
                      <Delete sx={{ color: "red", mr: 1 }} /> Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ mt: 2 }}
      />

      {/* Export CSV Button */}
      <Button
        variant="contained"
        color="secondary"
        startIcon={<GetApp />}
        onClick={handleExportCSV}
        sx={{ mt: 2 }}
      >
        Export CSV
      </Button>
    </Paper>
  );
};

export default ManageUsers3;