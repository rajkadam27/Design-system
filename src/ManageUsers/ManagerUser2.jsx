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
  Checkbox,
  Menu,
  MenuItem,
  IconButton,
  Box,
  TablePagination,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { MoreVert, CheckCircle, Block, Print, GetApp, Edit, Delete, VisibilityOff } from "@mui/icons-material";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const usersData = [
  { id: 1, avatar: "https://i.pravatar.cc/40?img=1", name: "Adam Trantow", company: "Mohr, Langworth and Hills", role: "UI Designer", verified: true, status: "Active" },
  { id: 2, avatar: "https://i.pravatar.cc/40?img=2", name: "Angel Rolfson-Kulas", company: "Koch and Sons", role: "UI Designer", verified: true, status: "Active" },
  { id: 3, avatar: "https://i.pravatar.cc/40?img=3", name: "Betty Hammes", company: "Waelchi – VonRueden", role: "UI Designer", verified: true, status: "Active" },
  { id: 4, avatar: "https://i.pravatar.cc/40?img=4", name: "Billy Braun", company: "White, Cassin and Goldner", role: "UI Designer", verified: false, status: "Banned" },
];

const columnsList = ["Name", "Company", "Role", "Verified", "Status", "Actions"];

const ManagerUsers2 = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersData);
  const [columnVisibility, setColumnVisibility] = useState(
    columnsList.reduce((acc, col) => ({ ...acc, [col]: true }), {})
  );
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedUser , setSelectedUser ] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [columnMenuAnchor, setColumnMenuAnchor] = useState(null);

  // Handle CSV export
  const handleExportCSV = () => {
    const csvData = users.map(({ avatar, ...rest }) => rest); // Exclude avatar
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };

  // Handle menu open/close
  const handleMenuOpen = (event, user) => {
    setMenuAnchor(event.currentTarget);
    setSelectedUser (user);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedUser (null);
  };

  // Handle row selection
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Handle bulk delete
  const handleBulkDelete = () => {
    const updatedUsers = users.filter((user) => !selectedRows.includes(user.id));
    setUsers(updatedUsers);
    setSelectedRows([]);
  };

  // Handle bulk edit
  const handleBulkEdit = () => {
    alert(`Editing users with IDs: ${selectedRows.join(", ")}`);
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter users based on search, role, and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter ? user.role === roleFilter : true;
    const matchesStatus = statusFilter ? user.status === statusFilter : true;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Paginated users
  const paginatedUsers = filteredUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Handle column menu open/close
  const handleColumnMenuOpen = (event) => {
    setColumnMenuAnchor(event.currentTarget);
  };

  const handleColumnMenuClose = () => {
    setColumnMenuAnchor(null);
  };

  // Toggle column visibility
  const toggleColumnVisibility = (column) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  return (
    <Paper sx={{ p: 3, maxWidth: "90%", mx: "auto", mt: 3, borderRadius: 2, boxShadow: 3 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.8rem', color: '#1976d2', fontWeight: 'bold' }}>
          Users
        </Typography>
        <Button variant="contained" color="primary" size="small" sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' }, transition: 'background-color 0.3s ease' }}>
          + Add User
        </Button>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <TextField
          fullWidth
          label="Search user..."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Role</InputLabel>
          <Select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            label="Role"
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="UI Designer">UI Designer</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Status"
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Banned">Banned</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Selected Count and Bulk Actions */}
      {selectedRows.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {selectedRows.length} selected
          </Typography>
          <Button variant="contained" color="secondary" size="small" sx={{ mr: 1, backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#388e3c' }, transition: 'background-color 0.3s ease' }} onClick={handleBulkEdit}>
            <Edit sx={{ mr: 1 }} /> Edit Selected
          </Button>
          <Button variant="contained" color="error" size="small" sx={{ mr: 1, backgroundColor: '#f44336', '&:hover': { backgroundColor: '#d32f2f' }, transition: 'background-color 0.3s ease' }} onClick={handleBulkDelete}>
            <Delete sx={{ mr: 1 }} /> Delete Selected
          </Button>
        </Box>
      )}

      {/* Column Visibility Dropdown */}
      <Box sx={{ mb: 2 }}>
        <Button
          variant="outlined"
          startIcon={<VisibilityOff />}
          onClick={handleColumnMenuOpen}
          size="small"
          sx={{ borderColor: '#1976d2', color: '#1976d2', '&:hover': { borderColor: '#115293', color: '#115293' }, transition: 'color 0.3s ease' }}
        >
          Hide Columns
        </Button>
        <Menu
          anchorEl={columnMenuAnchor}
          open={Boolean(columnMenuAnchor)}
          onClose={handleColumnMenuClose}
        >
          {columnsList.map((col) => (
            <MenuItem key={col}>
              <Checkbox
                checked={columnVisibility[col]}
                onChange={() => toggleColumnVisibility(col)}
              />
              {col}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{backgroundColor:"rgba(143, 143, 143, 0.1)" }}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedRows.length === filteredUsers.length}
                  onChange={() => {
                    if (selectedRows.length === filteredUsers.length) {
                      setSelectedRows([]);
                    } else {
                      setSelectedRows(filteredUsers.map((user) => user.id));
                    }
                  }}
                />
              </TableCell>
              {columnVisibility.Name && <TableCell sx={{ width: "150px" }}>Name</TableCell>}
              {columnVisibility.Company && <TableCell sx={{ width: "150px" }}>Company</TableCell>}
              {columnVisibility.Role && <TableCell sx={{ width: "120px" }}>Role</TableCell>}
              {columnVisibility.Verified && <TableCell sx={{ width: "100px" }}>Verified</TableCell>}
              {columnVisibility.Status && <TableCell sx={{ width: "100px" }}>Status</TableCell>}
              {columnVisibility.Actions && <TableCell sx={{ width: "100px" }}>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id} sx={{ '&:hover': { backgroundColor: '#e3f2fd', transition: 'background-color 0.3s ease' } }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRows.includes(user.id)}
                    onChange={() => handleRowSelect(user.id)}
                  />
                </TableCell>
                {columnVisibility.Name && (
                  <TableCell sx={{ display: "flex", alignItems: "center", width: "150px" }}>
                    <Avatar src={user.avatar} sx={{ mr: 1, width: 24, height: 24 }} />
                    {user.name}
                  </TableCell>
                )}
                {columnVisibility.Company && <TableCell sx={{ width: "150px" }}>{user.company}</TableCell>}
                {columnVisibility.Role && <TableCell sx={{ width: "120px" }}>{user.role}</TableCell>}
                {columnVisibility.Verified && (
                  <TableCell sx={{ width: "100px" }}>
                    {user.verified ? <CheckCircle color="success" /> : <Block color="error" />}
                  </TableCell>
                )}
                {columnVisibility.Status && (
                  <TableCell sx={{ width: "100px" }}>
                    <Chip label={user.status} color={user.status === "Active" ? "success" : "error"} size="small" />
                  </TableCell>
                )}
                {columnVisibility.Actions && (
                  <TableCell sx={{ width: "100px" }}>
                    <IconButton onClick={(e) => handleMenuOpen(e, user)}>
                      <MoreVert />
                    </IconButton>
                    <Menu
                      anchorEl={menuAnchor}
                      open={Boolean(menuAnchor && selectedUser  === user)}
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
                )}
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
      />

      {/* Export and Print Buttons */}
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="secondary" sx={{ mr: 1, backgroundColor: '#ff9800', '&:hover': { backgroundColor: '#f57c00' }, transition: 'background-color 0.3s ease' }} onClick={handleExportCSV}>
          <GetApp sx={{ mr: 1 }} /> Export CSV
        </Button>
        <Button variant="contained" sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#388e3c' }, transition: 'background-color 0.3s ease' }} onClick={() => window.print()}>
          <Print sx={{ mr: 1 }} /> Print
        </Button>
      </Box>
    </Paper>
  );
};

export default ManagerUsers2;