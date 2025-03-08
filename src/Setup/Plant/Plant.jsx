import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
import {
  MoreVert,
  CheckCircle,
  Block,
  Print,
  GetApp,
  Edit,
  Delete,
  VisibilityOff,
} from "@mui/icons-material";
import { saveAs } from "file-saver";
import Papa from "papaparse";

// Sample plant data
const plantsData = [
  {
    id: 1,
    companyName: "Mohr, Langworth and Hills",
    plantName: "Plant A",
    creditedBy: "Admin",
    isActive: true,
  },
  {
    id: 2,
    companyName: "Koch and Sons",
    plantName: "Plant B",
    creditedBy: "Admin",
    isActive: true,
  },
  {
    id: 3,
    companyName: "Waelchi – VonRueden",
    plantName: "Plant C",
    creditedBy: "Admin",
    isActive: true,
  },
  {
    id: 4,
    companyName: "White, Cassin and Goldner",
    plantName: "Plant D",
    creditedBy: "Admin",
    isActive: false,
  },
];

// List of columns to display
const columnsList = [
  "ID",
  "Company Name",
  "Plant Name",
  "Credited By",
  "Is Active",
  "Actions",
];

const Plant = () => {
  // State declarations
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState(plantsData);
  const [columnVisibility, setColumnVisibility] = useState(
    columnsList.reduce((acc, col) => ({ ...acc, [col]: true }), {})
  );
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [creditedByFilter, setCreditedByFilter] = useState("");
  const [isActiveFilter, setIsActiveFilter] = useState("");
  const [columnMenuAnchor, setColumnMenuAnchor] = useState(null);

  // Handle CSV export
  const handleExportCSV = () => {
    const csvData = plants.map(
      ({ id, companyName, plantName, creditedBy, isActive }) => ({
        ID: id,
        "Company Name": companyName,
        "Plant Name": plantName,
        "Credited By": creditedBy,
        "Is Active": isActive ? "Active" : "Inactive",
      })
    );
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "plants.csv");
  };

  // Handle menu open/close
  const handleMenuOpen = (event, plant) => {
    setMenuAnchor(event.currentTarget);
    setSelectedPlant(plant);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedPlant(null);
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
    const updatedPlants = plants.filter(
      (plant) => !selectedRows.includes(plant.id)
    );
    setPlants(updatedPlants);
    setSelectedRows([]);
  };

  // Handle bulk edit (placeholder alert)
  const handleBulkEdit = () => {
    alert(`Editing plants with IDs: ${selectedRows.join(", ")}`);
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter plants based on search, creditedBy, and isActive
  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.plantName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCreditedBy = creditedByFilter
      ? plant.creditedBy === creditedByFilter
      : true;
    const matchesIsActive = isActiveFilter
      ? plant.isActive.toString() === isActiveFilter
      : true;
    return matchesSearch && matchesCreditedBy && matchesIsActive;
  });

  // Paginated plants
  const paginatedPlants = filteredPlants.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
          Manage Plants
        </Typography>
        <Button variant="contained" color="primary" size="small" sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' }, transition: 'background-color 0.3s ease' }}>
          + Add Plant
        </Button>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <TextField
          fullWidth
          label="Search plant..."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Credited By</InputLabel>
          <Select
            value={creditedByFilter}
            onChange={(e) => setCreditedByFilter(e.target.value)}
            label="Credited By"
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Is Active</InputLabel>
          <Select
            value={isActiveFilter}
            onChange={(e) => setIsActiveFilter(e.target.value)}
            label="Is Active"
            size="small"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="true">Active</MenuItem>
            <MenuItem value="false">Inactive</MenuItem>
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
                  checked={selectedRows.length === filteredPlants.length}
                  onChange={() => {
                    if (selectedRows.length === filteredPlants.length) {
                      setSelectedRows([]);
                    } else {
                      setSelectedRows(filteredPlants.map((plant) => plant.id));
                    }
                  }}
                />
              </TableCell>
              {columnVisibility["ID"] && <TableCell sx={{ width: "60px" }}>ID</TableCell>}
              {columnVisibility["Company Name"] && <TableCell sx={{ width: "150px" }}>Company Name</TableCell>}
              {columnVisibility["Plant Name"] && <TableCell sx={{ width: "150px" }}>Plant Name</TableCell>}
              {columnVisibility["Credited By"] && <TableCell sx={{ width: "100px" }}>Credited By</TableCell>}
              {columnVisibility["Is Active"] && <TableCell sx={{ width: "100px" }}>Is Active</TableCell>}
              {columnVisibility["Actions"] && <TableCell sx={{ width: "100px" }}>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPlants.map((plant) => (
              <TableRow key={plant.id} sx={{ '&:hover': { backgroundColor: '#e3f2fd', transition: 'background-color 0.3s ease' } }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRows.includes(plant.id)}
                    onChange={() => handleRowSelect(plant.id)}
                  />
                </TableCell>
                {columnVisibility["ID"] && <TableCell>{plant.id}</TableCell>}
                {columnVisibility["Company Name"] && <TableCell>{plant.companyName}</TableCell>}
                {columnVisibility["Plant Name"] && <TableCell>{plant.plantName}</TableCell>}
                {columnVisibility["Credited By"] && <TableCell>{plant.creditedBy}</TableCell>}
                {columnVisibility["Is Active"] && (
                  <TableCell>
                    <Chip
                      label={plant.isActive ? "Active" : "Inactive"}
                      color={plant.isActive ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>
                )}
                {columnVisibility["Actions"] && (
                  <TableCell>
                    <IconButton onClick={(e) => handleMenuOpen(e, plant)}>
                      <MoreVert />
                    </IconButton>
                    <Menu
                      anchorEl={menuAnchor}
                      open={Boolean(menuAnchor && selectedPlant === plant)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => alert(`Editing ${plant.plantName}`)}>
                        <Edit sx={{ color: "green", mr: 1 }} /> Edit
                      </MenuItem>
                      <MenuItem onClick={() => alert(`Deleting ${plant.plantName}`)}>
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
        count={filteredPlants.length}
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

export default Plant;