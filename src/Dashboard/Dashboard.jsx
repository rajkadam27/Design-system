import React, { useState } from "react";
import UserProfileCard from "./UserProfileCard";
import CreateUserForm from "./CreateUserForm";

const Dashboard = ({ layout = "vertical" }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer", image: "https://randomuser.me/api/portraits/men/1.jpg", color: "#f8f9fa" },
    { id: 2, name: "Jane Smith", role: "Product Manager", image: "https://randomuser.me/api/portraits/women/2.jpg", color: "#f8f9fa" },
  ]);

  const handleUpdateUser = (id, newName, newRole, newColor) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, name: newName, role: newRole, color: newColor } : user
      )
    );
  };

  const handleCreateUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <CreateUserForm onCreate={handleCreateUser} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", flexDirection: layout === "vertical" ? "column" : "row", gap: "20px" }}>
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} onUpdate={handleUpdateUser} onDelete={handleDeleteUser} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
