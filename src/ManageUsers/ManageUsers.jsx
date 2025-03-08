import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Chip,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Sample Data
const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    company: "ABC Corp",
    creditedBy: "System",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    company: "XYZ Ltd",
    creditedBy: "Admin",
    isActive: false,
  },
  {
    id: 3,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Manager",
    company: "Tech Solutions",
    creditedBy: "Admin",
    isActive: true,
  },
];

// Action Menu Component
const ActionMenu = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  

  return (
    
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => navigate(`/edit-user/${id}`)}>
          <EditIcon sx={{ mr: 1, color: "green" }} /> Edit
        </MenuItem>
        <MenuItem onClick={() => alert(`Delete User ID: ${id}`)}>
          <DeleteIcon sx={{ mr: 1, color: "red" }} /> Delete
        </MenuItem>
      </Menu>
    </>
  );
};

// Columns with adjusted widths
const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "name", headerName: "Name", width: 140 },
  { field: "email", headerName: "Email", width: 190 },
  { field: "role", headerName: "Role", width: 120 },
  { field: "company", headerName: "Company Name", width: 160 },
  { field: "creditedBy", headerName: "Credited By", width: 140 },
  {
    field: "isActive",
    headerName: "Status",
    width: 100,
    renderCell: (params) => (
      <Chip
        label={params.value ? "Active" : "Inactive"}
        color={params.value ? "success" : "error"}
        size="small"
      />
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    renderCell: (params) => <ActionMenu id={params.row.id} />,
  },
];

// Custom Toolbar
const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

// Main Component
const ManageUsers = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: "800px", // Adjusted width to fit all columns
        margin: "auto",
      }}
    >
      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Manage Users
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/add-user")}
        >
          Add User
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* DataGrid Table */}
      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={userData}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          slots={{ toolbar: CustomToolbar }}
          sx={{
            "& .MuiDataGrid-root": {
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              padding: "10px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ManageUsers;

